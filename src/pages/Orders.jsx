import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AppContext from "../context";

const Orders = () => {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов!");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className=" content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => {
          return (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              loading={isLoading}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
