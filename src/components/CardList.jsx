import data from "../data/coffee-list.json";
import Card from "./Card";

const CardList = () => {
  const coffeList = data;
  return (
    <div>
      <ul className="w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 ">
        {coffeList?.map((coffee) => (
          <Card
            coffee={coffee}
            key={coffee.name}
            title={coffee.name}
            description={coffee.description}
            price={coffee.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
