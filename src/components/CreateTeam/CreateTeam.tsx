import { FC } from "react";
import Btn from "../common/Btn/Btn";
import s from "./CreateTeam.module.scss";
import alex from "./../../img/photo/mainPage/prof1.jpeg";
import pavel from "./../../img/photo/mainPage/prof2.jpeg";
import nata from "./../../img/photo/mainPage/prof3.jpeg";
import petr from "./../../img/photo/mainPage/prof4.png";
import { IEmployee } from "../../types/types";
import EmployeeItem from "../common/EmployeeItem/EmployeeItem";

const employees = [
  {
    name: "Alexander",
    lastName: "Suslikov",
    spec: "Frontend разработчик",
    photo: alex,
    skills: ["css", "html", "Ruby", "sqol", "MondoDB", "ORM models"],
  },
  {
    name: "Pavel",
    lastName: "Perechniy",
    spec: "Frontend разработчик",
    photo: pavel,
    skills: ["php", "css", "html", "Ruby", "sqol", "MondoDB", "ORM models"],
  },
  {
    name: "Nataly",
    lastName: "Zabolotskaya",
    spec: "2D Artist",
    photo: nata,
    skills: ["php", "css", "html", "Ruby", "sqol", "MondoDB", "ORM models"],
  },
  {
    name: "Petr",
    lastName: "Bolshoy",
    spec: "Backend разработчик",
    photo: petr,

    skills: ["php", "css", "html", "Ruby", "sqol", "MondoDB", "ORM models"],
  },
];

const CreateTeam: FC = () => {
  const remapEmployees = (arr: IEmployee[]) => {
    return arr.map((employee: IEmployee) => (
      <EmployeeItem
        name={employee.name}
        lastName={employee.lastName}
        specialization={employee.spec}
        photo={employee.photo}
        skills={employee.skills}
      />
    ));
  };

  return (
    <div className={s["create-team"]}>
      <div className={s.header}>
        <h1 className={s.title}>Создай свою команду</h1>
        <p className={s.description}>
          Мы подберем команду, учитывая все тонкости вашего проекта.
          <br /> В команде
          <b> X-Сluster </b>
          больше 4000 профессионалов с разным опытом и квалификацией.
        </p>
      </div>
      <div className={s.info}>
        <div className={s.list}>{remapEmployees(employees)}</div>
        <div className={s.more}>
          <p className={s['more__text']}>...and <b>4368</b> more developers</p>
          <Btn title="Create team" pRight={70} pLeft={70} />
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
