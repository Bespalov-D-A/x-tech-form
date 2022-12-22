import { FC } from "react";
import Btn from "../common/Btn/Btn";
import Nav from "../common/Nav/Nav";
import logo from "./../../img/other/technology.png";
import s from "./MainMenu.module.scss";

interface MainMenuI {
  mobileMenuRef: React.MutableRefObject<HTMLDivElement>
}

const MainMenu: FC<MainMenuI> = (props) => {
  const {mobileMenuRef} = props

  return (
    <div id='menu' ref={mobileMenuRef} className={s["menu-wrap"]}>
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
          bgcl='white'
        />
      </div>
    </div>
  );
};

export default MainMenu;
