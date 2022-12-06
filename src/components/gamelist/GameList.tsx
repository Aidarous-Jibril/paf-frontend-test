import React from 'react'
import GameCard from '../gamecard/GameCard';
import { List as Props } from '../home/Home';

import './GameList.css'

interface IProps {
    lists: Props[]
}



const GameList: React.FC<IProps> = ({ lists }) => {
    // console.log(lists);


  return (
      // <div className='section'>
      //   <div className='container'>
      //     {lists.map((game) => (
      //         <>
      //           <h3 className='heading'>{game.title}</h3>
      //           <div className="row">
      //             <GameCard key={game.id}  items={game.items}/>
      //           </div>
      //         </>
      //     )
      //   )}
      //   </div>
      // </div>
      <div className="centered section">
         
     
            {lists.map((game) => (
              <div className='container'>
                  <h3 className='heading'>{game.title}</h3> 

                  <div className='cards'>
                    {lists.map((game) => {
                      return <GameCard key={game.title}  items={game.items}/>
                    })}
                  </div>     
                </div>
                  )
                )}


          </div>
  )
}

export default GameList

  
