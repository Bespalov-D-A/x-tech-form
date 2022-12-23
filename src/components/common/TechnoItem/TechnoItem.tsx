import { FC } from "react";
import s from "./TechnoItem.module.scss";

interface TechnoItemI {
	title: string;
	description: string;
	photo: string;
}

const TechnoItem: FC<TechnoItemI> = (props) => {
	const { title, description, photo } = props;

	return (
		<div className={s.tech}>
			<div className={s.wrapper}>
				<div className={s.cover}>
					<img src={photo} className={s.photo} alt="" />
				</div>
				<div className={s.desc}>
					<h3 className={s.title}>{title}</h3>
					<p className={s["desc__text"]}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default TechnoItem;
