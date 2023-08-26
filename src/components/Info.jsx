import React from "react";
import AppContext from "../context";

const Info = ({ title, description }) => {
  const [] = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="mb-20"
        width={120}
        height={120}
        src="/img/empty-cart.png"
        alt="Empty cart"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClose} className="green-button">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
