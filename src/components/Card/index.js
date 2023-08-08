import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, image, price, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, image, price });
    setIsAdded(!isAdded);
  };

  useEffect(() => {
    console.log("Переменная изменилась");
  }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        className="mt-20"
        width={133}
        height={112}
        src={image}
        alt="Sneakers"
      />
      <h5>{title}</h5>
      <div className="card-bottom d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/button-checked.svg" : "/img/button-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
