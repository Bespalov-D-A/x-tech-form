import { FC } from "react";
import Btn from "../common/Btn/Btn";
import s from "./FeedbackForm.module.scss";

const FeedbackForm: FC = () => {
  return (
    <div className={s["form-wrap"]}>
      <form action="" className={s.form}>
        <div className={s["input-wrap"]}>
          <span className={s["inp-placeholder"]}>Ваше имя</span>
          <input type="text" className={s.inp} />
        </div>

        <div className={s["input-wrap"]}>
          <span className={s["inp-placeholder"]}>Телефон</span>
          <input type="text" className={s.inp} />
        </div>
        <div className={s["input-wrap"]}>
          <span className={s["inp-placeholder"]}>Компания</span>
          <input type="text" className={s.inp} />
        </div>
        <div className={s["input-wrap"]}>
          <span className={s["inp-placeholder"]}>E-mail</span>
          <input type="text" className={s.inp} />
        </div>
        <div className={s["input-wrap"] + " " + s.text}>
          <span className={s["inp-placeholder"]}>Опишите вашу идею</span>
          <textarea className={s.inp} />
        </div>
        <div className={s.footer}>
          <div className={s.license}>
            <div className={s.checkb}>
              <input type="checkbox" />
            </div>
            <span className={s["license-text"]}>
              Я прочитал и принимаю <a href="#">Политику конфиденциальности</a>{" "}
              и даю согласие на <a href="#">Обработку персональных данных</a>
            </span>
          </div>
          <div className={s.attach}>attach file</div>
        </div>
        <Btn
          bgcl="white"
          title="Отправить"
          pRight={40}
          pLeft={40}
          arrow={true}
        />
      </form>
    </div>
  );
};

export default FeedbackForm;
