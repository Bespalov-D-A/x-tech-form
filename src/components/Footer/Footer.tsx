import { FC } from "react";
import Nav from "../common/Nav/Nav";
import Social from "../common/Social/Social";
import s from "./Footer.module.scss";
import logo from "./../../img/other/technology.png";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s["right-side"]}>
        <img src={logo} alt="" />
        <p className={s.copyright}>
          Copyright © 2020 «X-Technology»
          <br />
          Все права защищены.
        </p>
      </div>
      <div className={s["left-side"]}>
        <div className={s.navigation}>
          <h3 className={s.title}>Navigation</h3>
          <Nav column={true} />
        </div>
        <div className={s.social}>
          <h3 className={s.title}>Social</h3>
          <Social column={true} />
        </div>
        <div className={s.info}>
          <div>
            <h3 className={s.title}>Мы находимся</h3>
            <p>236010, РФ, г. Калининград, ул. Генерала озерова 17Б</p>
          </div>
          <div>
            <p>+796543210</p>
            <p>office@x-tech.im</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
