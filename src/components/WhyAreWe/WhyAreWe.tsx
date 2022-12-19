import { FC } from "react";
import s from "./WhyAreWe.module.scss";
import image from "./../../img/photo/mainPage/girl.jpg";

const WhyAreWe: FC = () => {
  return (
    <div className={s["why-are-we"]}>
      <div className={s.description}>
        <h1 className={s.title}>Почему мы?</h1>
        <ul className={s.list}>
          <li className={s["list__li"]}>
            <b>Быстро и точно</b> оценим ваш проект по срокам и стоимости.
          </li>
          <li className={s["list__li"]}>
            Собственная команда разработчиков — <b>X-Сluster</b>
          </li>
          <li className={s["list__li"]}>
            Мы решаем <b>юридические, административные</b> и <b>кадровые</b>{" "}
            аспекты сотрудничества
          </li>
          <li className={s["list__li"]}>
            Гарантия <b>квалификации</b> сотрудника
          </li>
          <li className={s["list__li"]}>
            Начинаем подбирать команду через <b>30 минут</b> после заключения
            договора
          </li>
          <li className={s["list__li"]}>
            Работаем с <b>любыми</b> критериями отбора
          </li>
        </ul>
      </div>
      <div className={s.cover}>
        <img className={s.mount} src={image} alt="" />
        <img className={s["cover__image"]} src={image} alt="" />
      </div>
    </div>
  );
};

export default WhyAreWe;
