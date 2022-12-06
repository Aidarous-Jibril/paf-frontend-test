import React, { useEffect, useState } from 'react'
import './Home.css'

import jsonData from '../../api/games/lists.json' 
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
  const [data, setData] = React.useState<Data>({
    title: '',
    description: '',
    lists: [],
  });

  useEffect(() => {
   
    setData(jsonData)
  }, [])

  return (
    <div className='home section'>
      {/* <SearchForm  data={data.lists} wordEntered={wordEntered} 
        setWordEntered={setWordEntered}  handleFilter={handleFilter}/> */}
        <SearchForm  data={data.lists} />
        <div className="title">
           <h2>{data.title}</h2>
            <div className="underline"></div>
        </div>
        <p>{data.description}</p>
        
        <GameList lists={data.lists} />
    </div>
  )
}

export default Home