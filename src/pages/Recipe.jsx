import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getDrinkById} from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getDrinkById(id).then((data) => setRecipe(data.drinks[0]));
    }, [id]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                    <h1>{recipe.strDrink}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strAlcoholic ? (
                        <h6> Alcoholic: {recipe.strAlcoholic}</h6>
                    ) : null}
                    <p>{recipe.strInstructions}</p>
                    <h2>Ingredients:</h2>
                    <p>{recipe.strIngredient1}</p>
                    <p>{recipe.strIngredient2}</p>
                    <p>{recipe.strIngredient3}</p>
                    <p>{recipe.strIngredient4}</p>
                </div>
            )}
        </>
    );
}

export { Recipe };
