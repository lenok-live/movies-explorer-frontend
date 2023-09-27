// Hamburger - компонент отображения бургер-меню в Header
import "./Hamburger.css";

export default function Hamburger(props) {
  //  const {
  //      onHandleHamburger,
  //  } = props;
  const onHandleHamburger = true;

  return (
    <button className="hamburger" onClick={onHandleHamburger} />
  );
}
