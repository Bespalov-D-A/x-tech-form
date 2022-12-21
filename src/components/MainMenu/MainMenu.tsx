import { FC } from "react";
import { NavLink } from "react-router-dom";
import Btn from "../common/Btn/Btn";
import Nav from "../common/Nav/Nav";
import logo from "./../../img/other/technology.png";
import s from "./MainMenu.module.scss";

const MainMenu: FC = () => {
  return (
    <div className={s["menu-wrap"]}>
      <div className={s.logo}>
        <img src={logo} alt="" className={s.icon} />
        <Nav />
      </div>
      <div className={s.right}>
        <Btn
          arrow={false}
          title="Узнать условия"
          pRight={50}
          pLeft={50}
          primary={false}
        />
      </div>
    </div>
  );
};

export default MainMenu;
