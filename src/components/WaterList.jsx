import { DrinkItem } from './DrinkItem';

function WaterList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((item) => (
                <DrinkItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export { WaterList };
