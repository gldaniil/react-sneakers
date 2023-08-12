import Card from "../components/Card";

const Favorites = ({ items }) => {
  return (
    <div className=" content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              // onFavorite={(obj) => onAddToFavorite(obj)}
              // onPlus={(obj) => onAddToCart(obj)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
