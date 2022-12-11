import React, { useEffect, useState } from 'react'
import './Home.css'

import jsonData from '../../assets/api/games/lists.json' 
import GameList from '../gamelist/GameList';
import SearchForm from '../search/SearchForm';

 export interface Data {
  title: string;
  description: string;
  lists: List[];
}

export interface List {
 id: string;
 title: string;
 items: Item[];
}

export interface Item {
  id: number;
  title: string;
  provider: string;
  image: string;
}




const Home: React.FC = () => {
  const [data, setData] = useState<Data>({
    title: '',
    description: '',
    lists: [],
  });
  const [filteredData, setFilteredData] = useState<List[]>([]);

  //Filter data based on user's search term
  const handleFilter = ( searchQuery: string) => {
    const newFilter: List[] = data.lists
      .filter(({ title }): boolean => title.toLowerCase().includes(searchQuery));

    if (searchQuery === "") {
      setFilteredData(data.lists)
    }
    else setFilteredData(newFilter);
  }

  //Here i could have fetched json file but by importing it is much faster since it's a local file
  useEffect(() => {
    setData(jsonData);
  }, [])

  
  
  useEffect(() => {
    handleFilter('');
  }, [data])

  //truncate function
  const truncate = (str : string, n : number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  return (
    <div className='home section'>
        <SearchForm  handleFilter={handleFilter} />
        <div className="title">
           <h2>{data.title}</h2>
            <div className="underline"></div>
        </div>
        <p>{truncate(data.description, 150)}</p>
        
        <GameList lists={filteredData} />
    </div>
  )
}

export default Home