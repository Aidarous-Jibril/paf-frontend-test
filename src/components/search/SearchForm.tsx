import React, { FC, ChangeEvent, useState, FormEvent, useEffect } from 'react'
import './SearchForm.css'

interface IProps {
  handleFilter: (wordEntered: string) => void
}

 
const SearchForm: FC<IProps> = ({  handleFilter }): JSX.Element => {
  const [wordEntered, setWordEntered] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);


  //Get LS stored items and return
  const getSearchHistoryFromStorage = () => {
    const data = localStorage.getItem('searchTerm') ?? '[]';
    if (data === null) return;

    const searchData = JSON.parse(data) ?? [];

    return searchData;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWordEntered(e.target.value);
  }

  //Submit function
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    handleFilter(wordEntered)

    const data = getSearchHistoryFromStorage();

    if (data.length >= 10) {
      data.shift();
    }

    data.push(wordEntered);

    localStorage.setItem('searchTerm', JSON.stringify(data))
  }

  useEffect(() => {
    const data = getSearchHistoryFromStorage();
    setSearchHistory(data);

    setWordEntered(data[data.length - 1]);
  }, [])

  return (
    <>
      <section className='section'>
        <form className='search-form' 
          onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <label htmlFor='name'>search a game</label>
            <input
              type='text'
              name='name'
              id='name'
              value={wordEntered}
              onChange={handleChange}
              />
            </div>
          </form>
        </section>

      </>
  )
}

export default SearchForm
