import s from "./Header.module.scss";

import { FC } from "react";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header: FC = () => {
  return <div className={s.header}>
    <HeaderContent />
  </div>;
};

export default Header;
