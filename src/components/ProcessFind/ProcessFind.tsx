import { FC } from "react";
import s from "./ProcessFind.module.scss";
import arrow from "./../../img/ico/common/Arrow.svg";

const data = [
  { msg: "Мы знакомимся с вашим проектом и его целями" },
  { msg: "Подбираем подходящую для вашего проекта команду" },
  { msg: "Проводим с командой мозговой штурм и включаемся в проект" },
  { msg: "Сопровождаем команду на протяжении всего проекта" },
];

const ProcessFind: FC = () => {
  return (
    <div className={s["process-find"]}>
      <h1 className={s.title}>Процесс подбора</h1>
      <div className={s.list}>
        {data.map((item, index) => (
          <div key={index} className={s.item}>
            <h1 className={s.num}>{index + 1}</h1>
            <p className={s.desc}>
              <img src={arrow} alt="" className={s.arrow} />
              {item.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFind;
