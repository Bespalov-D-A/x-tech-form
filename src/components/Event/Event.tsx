import { FC, useEffect, useRef } from "react";
import { EventI } from "../../types/types";
import { useMediaQuery } from "react-responsive";
import EventItem from "../common/EventItem/EventItem";
import s from "./Event.module.scss";
import event1 from "./../../img/photo/mainPage/event1.jpg";
import event2 from "./../../img/photo/mainPage/event2.jpg";
import event3 from "./../../img/photo/mainPage/event3.jpg";
import BtnLink from "../common/BtnLink/BtnLink";
import Flickity from "react-flickity-component";

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
  const flckty = useRef() as any;

  const flickityOptions = {
    pageDots: false,
    draggable: true,
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    if (!isDesktopOrLaptop && flckty.current.isActive) flckty.current.destroy();
    else if (isDesktopOrLaptop && !flckty.current.isActive) {
      flckty.current.activate();
      flckty.current.onActivateDrag();
    }
    console.log(flckty.current);
  }, [isDesktopOrLaptop]);

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
        <div className={s.list}>
          <Flickity
            flickityRef={(flkt) => (flckty.current = flkt)}
            className={s.list} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static // default false
          >
            {remapEvents(data)}
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default EventComp;
