import { API_URL } from './config';

const getDrinkById = async (drinkId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + drinkId);
    return await response.json();
};

const getDifferentDrinks = async () => {
    const response = await fetch(API_URL + 'search.php?f=a');
    return await response.json();
};

export { getDrinkById, getDifferentDrinks};
