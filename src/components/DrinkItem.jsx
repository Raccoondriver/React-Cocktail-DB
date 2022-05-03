import { Link } from 'react-router-dom';

function DrinkItem(props) {
    const { idDrink, strDrink, strDrinkThumb, strDescription } = props;

    return (
        <div className='card'>
            <div className='card-image '>
                <img src={strDrinkThumb} alt={strDrink} />
                <span className='card-title'>{strDrink}</span>
            </div>
            <div className='card-content'>
                <span className='card-title'>{strDrink}</span>
                <p>{strDescription}</p>
            </div>
            <div className='card-action'>
                <Link to={`/drinks/${idDrink}`} className='btn'>
                    Watch drink
                </Link>
            
            </div>
        </div>
    );
}

export { DrinkItem };
