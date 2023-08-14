import Card from "../components/Card";

const Home = ({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) => {
  const renderItems = () => {
    return items
      .filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((item, index) => {
        return (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            added={cartItems.some((obj) => obj.id === item.id)}
            {...item}
            loading
          />
        );
      });
  };

  return (
    <div className=" content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              src="/img/button-remove.svg"
              alt="Remove"
              className="remove cu-p"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
