
import {DrinkItem} from '../components/DrinkItem';
import { Preloader } from "../components/Preloader";
import {useGlobalContext} from '../context';



function CockTailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Preloader />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search creteria
      </h2>
    );
  }
  return (
    <section>
      <h2 className="cocktailTitle">Cocktails</h2>
      <div className="cocktail-center">
        {cocktails.map((item) => {
          return <DrinkItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CockTailList;
