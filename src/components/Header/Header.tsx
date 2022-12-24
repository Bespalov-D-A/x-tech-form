import s from "./Header.module.scss";

import { FC } from "react";
import HeaderContent from "./HeaderContent/HeaderContent";
import HeaderBar from "./HeaderBar/HeaderBar";

const Header: FC = () => {
  return <div className={s.header}>
    <HeaderContent />
    <HeaderBar />
  </div>;
};

export default Header;
