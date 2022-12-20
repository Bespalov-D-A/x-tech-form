import { FC } from "react";
import Social from "../common/Social/Social";
import s from "./Feedback.module.scss";

const Feedback: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s["feedback-wrap"]}>
        <div className={s.feedback}>
          <div className={s.info}>
            <h1 className={s.title}>свяжитесь с нами</h1>
            <h3 className={s["where-title"]}>МЫ НАХОДИМСЯ</h3>
            <p className={s.address}>
              236010, РФ, г. Калининград, ул. Генерала озерова 17Б
            </p>
            <p className={s.phone}>+796543210</p>
            <p className={s.mail}>office@stl.im</p>
            <div className={s.social}>
                <h3 className={s['social__title']}>social</h3>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
