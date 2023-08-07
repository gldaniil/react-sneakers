import styles from "./Card.module.scss";

console.log(styles);

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
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
        <button className="button">
          <img src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
