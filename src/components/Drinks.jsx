import { Link } from 'react-router-dom';



function Drinks(props) {
    const { strDrink, strDrinkThumb, idDrink} = props;

    return (
        <div className='card'>
            <div className='card-image '>
                <img src={strDrinkThumb} alt={strDrink} />
                <span className='card-title'>{strDrink}</span>
            </div>
            <div className='card-content'>
                <span className='card-title'>{strDrink}</span>
            </div>
            <div className='card-action'>
                <Link to={`/drinks/${idDrink}`} className='btn'>
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Drinks };
