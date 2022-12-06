import React, { FC, ChangeEvent, useState, useRef, FormEvent, SetStateAction } from 'react'
import './SearchForm.css'
import { List as Props } from '../home/Home';
import GameCard from '../gamecard/GameCard';


interface IProps {
    data: Props[],
    // wordEntered: string,
    // setWordEntered: React.Dispatch<SetStateAction<string>>,
    // handleFilter: () => void
    // setData:  React.Dispatch<React.SetStateAction<[]>>
}

 
const SearchForm: FC<IProps> = ({ data, }): JSX.Element => {
  console.log(data)
  const [filteredData, setFilteredData] = useState<Props[]>([]);
  const [wordEntered, setWordEntered] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener("load", () => inputRef.current?.focus());

  const handleFilter = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase();
    setWordEntered(searchWord);

    const newFilter: Props[] = data.filter(({ title }): boolean =>
      title.toLowerCase().includes(searchWord)
    );

    if (!searchWord) return setFilteredData([]);
    setFilteredData(newFilter);
  };
  console.log(filteredData);
  // const clearInput = (): void => {
  //   setFilteredData([]);
  //   setWordEntered("");
  //   inputRef.current?.focus();
  // };
  return (
    <>
      <section className='section'>
        <form className='search-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>search a game</label>
            <input
              type='text'
              name='name'
              id='name'
              value={wordEntered}
              onChange={handleFilter}
              // ref={inputRef}
              />
            </div>
          </form>
        </section>

        {filteredData.map((game) => (
          <div className='container'>
              <h3 className='heading'>{game.title}</h3> 

              <div className='cards'>
                {filteredData.map((game) => {
                  return <GameCard key={game.title}  items={game.items}/>
                })}
              </div>     
          </div>
              )
         )}

      </>
  )
}

export default SearchForm
