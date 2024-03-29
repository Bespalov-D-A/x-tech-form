import { FC } from "react";
import photo from "./../../img/photo/mainPage/video.png";
import s from "./Community.module.scss";

const text = () => {
  return (
    <>
      {" "}
      <b>X-Сluster</b> — это масштабный проект, направленный на развитие ИТ
      индустрии.
      <br />
      <br />
      X-Сluster нацелен на сохранение кадрового потенциала, удержания и
      возвращения IT-специалистов в Россию, формирования IT-резерва и создания
      крупного IT-комьюнити страны с целью дальнейшего масштабирования за рубеж.
      <br /> <br />
      Одна из задач кластера – органическое развитие инфраструктуры для
      привлечения, развития кадров и создания комфортной среды для специалистов
    </>
  );
};

const Community: FC = () => {
  return (
    <div className={s.community}>
      <div className={s["desc-block"]}>
        <h1 className={s.title}>Сообщество</h1>
        <p className={s.desc}>{text()}</p>
      </div>
      <div className={s["video-block"]}>
        <div className={s['video-wrap']}>
          <img src={photo} alt="" className={s.mount} />
          <img src={photo} alt="" className={s.video} />
        </div>
      </div>
    </div>
  );
};

export default Community;
