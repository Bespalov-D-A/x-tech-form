import { FC } from "react";
import Btn from "../common/Btn/Btn";
import photo from "./../../img/photo/mainPage/where.jpg";
import s from "./WhereFind.module.scss";

const WhereFind: FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s["where-find"]}>
        <img src={photo} alt="" className={s.photo} />
        <div className={s.desc}>
          <h1 className={s.title}>Где мы ищем?</h1>
          <p className={s["desc__text"]}>
            Наша команда всегда готова к работе над вашим проектом. Хантим
            специалистов на встречах, мероприятиях, тематических форумах,
            boolean search.
          </p>
          <Btn title="Обсудить проект" pRight={40} pLeft={40} primary={true} />
        </div>
      </div>
    </div>
  );
};

export default WhereFind;
