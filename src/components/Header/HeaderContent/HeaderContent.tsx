import { FC } from "react";
import Btn from "../../common/Btn/Btn";
import s from "./HeaderContent.module.scss";

interface HeaderContentI {}

const HeaderContent: FC<HeaderContentI> = () => {
  return (
    <div className={s["header-content"]}>
      <div className={s.content}>
        <div className={s.wrap}>
          <h1 className={s["wrap__title"]}>
            Подберем команду
            <br /> IT специалистов
          </h1>
          <p className={s["wrap__desc"]}>
            Соберем команду для проекта за 10 дней
          </p>
          <div className={s["btn-wrap"]}>
            <Btn
              bgcl={"blue"}
              arrow={true}
              title={"Узнать условия"}
              pLeft={34}
              pRight={16}
            />
          </div>
        </div>
      </div>
      <div className={s.img}></div>
    </div>
  );
};

export default HeaderContent;
