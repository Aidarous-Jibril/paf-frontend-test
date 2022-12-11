import { Item as Props } from '../home/Home';

interface ItemProps {
    items: Props[]
}


const GameCard: React.FC<ItemProps> = ({ items }) => {
  const renderList = (): JSX.Element[] => {
    return items.map(game => {
        return (
            <div className='card' key={game.id}>
                <div className="card-photo">
                    <img src={game.image} alt={game.title} />
                </div>
                <p className="card-title">{game.title}</p>
            </div>

          
        )
    })
}

return (
        <div className='cards'>
            {renderList()}
        </div>
   
)
}

export default GameCard
