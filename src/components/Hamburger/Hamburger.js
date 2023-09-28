// Hamburger - компонент отображения бургер-меню в Header
import "./Hamburger.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function Hamburger(props) {
  // const { onHandleHamburger } = props;
  // const onHandleHamburger = true;
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current.style.visibility === "hidden") {
      ref.current.style.visibility = "visible";
      ref.current.style.transform = "translateX(-100%)";
    } else {
      ref.current.style.visibility = "hidden";
    }
  };

  return (
    <>
      <button
        className="header__burger-btn"
        id="burger"
        type="button"
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav ref={ref} className="menu" id="menu">
      <Link to="/profile" className="menu__profile" title="Аккаунт">
      Главная
    </Link>
        <Navigation />
        <ProfileLink />
      </nav>
    </>
    // <button className="hamburger" type="button" onClick={onHandleHamburger} />
  );
}
