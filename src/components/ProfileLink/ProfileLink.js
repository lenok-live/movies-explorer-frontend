import "./ProfileLink.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ProfileLink() {
  return (
    <Link to="/profile" className="header__link" title="Аккаунт">
      Аккаунт
    </Link>
  );
}
