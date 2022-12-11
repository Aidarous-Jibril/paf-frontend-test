import GameCard from '../gamecard/GameCard';
import { List as Props } from '../home/Home';

import './GameList.css'

interface IProps {
    lists: Props[]
}



const GameList: React.FC<IProps> = ({ lists }) => {


  return (
      <div className="centered section">     
        {lists.map((game) => (
          <div className='container' key={game.id}>
              <h3 className='heading'>{game.title}</h3> 

          
                <GameCard items={game.items}/>
                  
            </div>
              )
            )}
      </div>
  )
}

export default GameList

  
