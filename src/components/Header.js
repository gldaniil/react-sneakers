import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} alt="Logo" src="img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="navMenu d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img src="/img/backet.svg" alt="Backet" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img src="/img/liked.svg" alt="Liked" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img src="/img/profile.svg" alt="Profile" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
