import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  useEffect(() => {
    console.log("Переменная изменилась");
  }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        className="mt-20"
        width={133}
        height={112}
        src={props.image}
        alt="Sneakers"
      />
      <h5>{props.title}</h5>
      <div className="card-bottom d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
