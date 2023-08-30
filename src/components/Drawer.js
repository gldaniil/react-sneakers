import { useContext, useState } from "react";
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderComplete, setOrderComplete] = useState(false);

  const onClickOrder = () => {
    axios.post("/orders", cartItems);
    setOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            src="/img/button-remove.svg"
            alt="Close"
            className="cart__remove-button cu-p"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cart__item d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.image})` }}
                    className="cart__item-img"
                  />
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    src="/img/button-remove.svg"
                    alt="Remove"
                    className="cart__remove-button"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="green-button">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={orderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              orderComplete
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={orderComplete ? "/img/complete-order.png" : "/img/arrow.svg"}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
