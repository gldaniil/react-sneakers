import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Orders = () => {
  return (
    <div className=" content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {[].map((item, index) => {
          return (
            <Card
              key={index}
              // onFavorite={(obj) => onAddToFavorite(obj)}
              // onPlus={(obj) => onAddToCart(obj)}
              favorited={true}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
