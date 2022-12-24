import { FC } from "react";
import { IServiceItem } from "../../types/types";
import ServiceItem from "../common/ServiceItem/ServiceItem";
import image1 from "./../../img/photo/mainPage/team.jpg";
import image2 from "./../../img/photo/mainPage/standup.jpg";
import image3 from "./../../img/photo/mainPage/screen.jpg";
import s from "./Services.module.scss";

const serviceArr = [
  {
    title: "Выделенная команда",
    description:
      "Мы подберем команду ИТ-специалистов на любом этапе создания вашего проекта. Вы получите квалифицированных специалистов с необходимым уровнем знаний и навыков.",
  },
  {
    title: "Аутсорсинг",
    description:
      "Вы снизите расходы, отдав обслуживание IT-инфраструктуры нам. А мы удаленно обеспечим высокое качество IT-сервиса.",
  },
  {
    title: "Разработка оборудования",
    description:
      "Проектируем и разрабатываем аппаратное обеспечение для современной электроники с учетом всех ваших пожеланий.",
  },
];

const imageArr = [image1, image2, image3];

const Services: FC = () => {
  const remapServices = (arr: IServiceItem[]) => {
    return arr.map((service: IServiceItem, index: number) => (
      <ServiceItem
        key={index}
        image={imageArr[index]}
        title={service.title}
        description={service.description}
      />
    ));
  };

  return (
    <div className={s.services}>
      <h1 className={s.title}>СЕРВИСЫ</h1>
      <div className={s.list}>{remapServices(serviceArr)}</div>
    </div>
  );
};

export default Services;
