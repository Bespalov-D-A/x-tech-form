import { FC } from "react";
import { EventI } from "../../types/types";
import EventItem from "../common/EventItem/EventItem";
import s from "./Event.module.scss";
import event1 from "./../../img/photo/mainPage/event1.jpg";
import event2 from "./../../img/photo/mainPage/event2.jpg";
import event3 from "./../../img/photo/mainPage/event3.jpg";
import BtnLink from "../common/BtnLink/BtnLink";

const data = [
  {
    title: "презентация X-Cluster",
    desc: "Завершением этого лета стало открытие X-Сluster — масштабного проекта, направленного на развитие IT-индустрии",
    photo: event1,
  },
  {
    title: "Крупный выездной митап для команды",
    desc: "В каждой компании действительно необходима максимально комфортная обстановка для полноценной работы",
    photo: event2,
  },
  {
    title: "форум «Устойчивое развитие» ",
    desc: "4 сентября 2020 года на Всероссийском форуме Устойчивое развитие был представлен проект «ИТ-кластер Северо-Запад»",
    photo: event3,
  },
];

const EventComp: FC = () => {
  const remapEvents = (arr: EventI[]) => {
    return arr.map((item, index) => (
      <EventItem
        key={index}
        title={item.title}
        desc={item.desc}
        photo={item.photo}
      />
    ));
  };

  return (
    <div className={s.event}>
      <div className={s.wrapper}>
        <div className={s["title-block"]}>
          <h2 className={s.title}>События</h2>
          <BtnLink title="Все события" color="black" />
        </div>
        <div className={s.list}>{remapEvents(data)}</div>
      </div>
    </div>
  );
};

export default EventComp;
