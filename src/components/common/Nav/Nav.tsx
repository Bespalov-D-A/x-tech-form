import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

interface NavI {
	column?: boolean
}

const Nav: FC<NavI> = ({column}) => {
	return (
		<ul className={s.menu + ' ' + (column && s.column)}>
			<li className={s["menu-block"] + " " + s.active}>
				<NavLink className={s.link} to="/services">Сервисы</NavLink>
			</li>
			<li className={s["menu-block"]}>
				<NavLink className={s.link} to="/community">Сообщество</NavLink>
			</li>
			<li className={s["menu-block"]}>
				<NavLink className={s.link} to="/career">Карьера</NavLink>
			</li>
			<li className={s["menu-block"]}>
				<NavLink className={s.link} to="/company">Компания</NavLink>
			</li>
			<li className={s["menu-block"]}>
				<NavLink className={s.link} to="/command-constructor">Конструктор команд</NavLink>
			</li>
		</ul>
	);
};

export default Nav;
