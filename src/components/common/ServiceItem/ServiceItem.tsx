import { FC } from "react";
import Btn from "../Btn/Btn";
import s from "./ServiceItem.module.scss";

export interface ServiceItemI {
	title: string;
	description: string;
	image: string;
}
const ServiceItem: FC<ServiceItemI> = (props) => {
	const { title, description, image } = props;

	return (
		<div className={s["service-item"]}>
				<img src={image} className={s.mount} alt="" />
			<div className={s.cover}>
				<img src={image} alt="" />
			</div>
			<p className={s.title}>{title}</p>
			<p className={s.description}>{description}</p>
			<Btn title='Узнать подробнее' pLeft={0} pRight={0}/>			
		</div>
	);
};

export default ServiceItem;
