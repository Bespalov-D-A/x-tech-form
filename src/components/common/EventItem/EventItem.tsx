import { FC } from "react";
import { EventI } from "../../../types/types";
import s from "./EventItem.module.scss";

const EventItem: FC<EventI> = (props) => {
	const { title, desc, photo } = props;

	return (
		<div className={s.event}>
			<img src={photo} className={s.mount} alt="" />
			<div className={s["photo-block"]}>
				<div className={s["photo-wrap"]}>
					<img src={photo} className={s.photo} alt="" />
				</div>
			</div>
			<h3 className={s.title}>{title}</h3>
			<p className={s.desc}>{desc}</p>
			<a href="#" className={s.lnk}>Читать далее</a>
		</div>
	);
};

export default EventItem;
