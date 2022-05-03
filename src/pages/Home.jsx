import { useState, useEffect } from 'react';
import { Search } from '../components/Search';
import { getDifferentDrinks } from '../api';
import { Preloader } from '../components/Preloader';
import { WaterList } from '../components/WaterList';





function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState ([]);



    const handleSearch = (strDrink) => {
        setFilteredCatalog (
            catalog.filter((item) => 
            item.strDrink.toLowerCase().includes(strDrink.toLowerCase())
            )
        );
    };
    
    


    useEffect(() => {
        getDifferentDrinks().then((data) => {
            setCatalog(data.drinks);
            setFilteredCatalog(data.drinks);
        });
    }, []);

  



    return (
        <>
        <Search cb={handleSearch}/>
        {!catalog.length ? (
            
            <Preloader /> 
            ) : ( 
                <WaterList catalog={filteredCatalog}  /> 
                )}
       
                
        </>
    );
}







export { Home };
