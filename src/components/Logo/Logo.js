import headerLogo from "../../images/logo.svg";

export default function Logo() {
  return (
    <a aria-current="page" href="/">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
    </a>
  );
}
