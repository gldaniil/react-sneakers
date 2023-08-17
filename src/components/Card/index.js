import { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

const Card = ({
  id,
  title,
  image,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, image, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, image, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={158}
          height={234}
          viewBox="0 0 158 234"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="10" rx="10" ry="10" width="158" height="120" />
          <rect x="0" y="148" rx="3" ry="3" width="158" height="15" />
          <rect x="0" y="168" rx="3" ry="3" width="100" height="15" />
          <rect x="0" y="202" rx="8" ry="8" width="80" height="32" />
          <rect x="126" y="198" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="Unliked"
            />
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
              src={
                isItemAdded(id)
                  ? "/img/button-checked.svg"
                  : "/img/button-plus.svg"
              }
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
