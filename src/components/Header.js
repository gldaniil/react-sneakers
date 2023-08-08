const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} alt="Logo" src="img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="navMenu d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/backet.svg" alt="Backet" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/liked.svg" alt="Liked" />
        </li>
        <li>
          <img src="/img/profile.svg" alt="Profile" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
