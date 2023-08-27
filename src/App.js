import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  axios.defaults.baseURL = "http://localhost:3001";

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get("/cart");
      const favoritesResponse = await axios.get("/favorites");
      const itemsResponse = await axios.get("/sneakers");

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`/cart/${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
    try {
    } catch (error) {}
  };

  const onRemoveItem = (id) => {
    axios.delete(`/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post("/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное!");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
