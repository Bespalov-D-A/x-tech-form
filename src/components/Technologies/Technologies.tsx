import { FC } from "react";
import s from "./Technologies.module.scss";
import front from "./../../img/ico/mainPage/frontend.svg";
import app from "./../../img/ico/mainPage/app.svg";
import gamedev from "./../../img/ico/mainPage/gamedev.svg";
import design from "./../../img/ico/mainPage/layout.svg";
import blockchain from "./../../img/ico/mainPage/blockchein.svg";
import bd from "./../../img/ico/mainPage/bd.svg";
import mobApp from "./../../img/ico/mainPage/mobile-app.svg";
import back from "./../../img/ico/mainPage/backend.svg";
import TechnoItem from "../common/TechnoItem/TechnoItem";
import { ITechnology } from "../../types/types";

const data = [
  {
    title: "Front-End",
    description:
      "HTML5, CSS3, JavaScript, jQuery, React, Redux, WebGL, Vue, Three.JS, SaaS, Less, Flutter Desktop React Native",
    photo: front,
  },
  {
    title: "Back-End",
    description:
      "FireBase, PHP, Golang, Python, Node JS, Nginx, Apache, Docker",
    photo: back,
  },
  {
    title: "Приложения",
    description: "C++, C#, QT, GTK, Java, Unity, Laravel, Jest, Joomla",
    photo: app,
  },
  {
    title: "Мобильные приложения",
    description: "Android Studio, iOS Swift, Fluter",
    photo: mobApp,
  },
  {
    title: "Базы данных",
    description:
      "Oracle, Delphi, MySQL, LightSQL, MongoDB, MariaDB, PostgreSQL, SQLite, LevelDB, DynamoDB, NoSQL",
    photo: bd,
  },
  {
    title: "Блокчейн",
    description: "BasicChain, Ethereum, Bitcoin, Waves",
    photo: blockchain,
  },
  {
    title: "Дизайн и мультимедия",
    description:
      "Прототипирование, Продуктовый дизайн, Веб-дизайн, Графический дизайн, Дизайн системы, Motion дизайн",
    photo: design,
  },
  {
    title: "Геймдев",
    description:
      "Геймдизайн, Прототипирование, Unity, Unreal Engine 4, Арт, Нарративный дизайн, Дизайн интерфейсов",
    photo: gamedev,
  },
];

const Technologies: FC = () => {
  const remapTech = (arr: ITechnology[]) => {
    return arr.map((item: ITechnology, index) => (
      <TechnoItem
        key={index}
        title={item.title}
        description={item.description}
        photo={item.photo}
      />
    ));
  };

  return (
    <div className={s.techno}>
      <h1 className={s.title}>Технологии</h1>
      <div className={s.list}>{remapTech(data)}</div>
    </div>
  );
};

export default Technologies;
