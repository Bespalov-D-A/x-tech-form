import { FC } from "react";
import { IEmployee } from "../../../types/types";
import SkillsList from "../SkillsList/SkillsList";
import s from "./EmployeeItem.module.scss";

interface EmployeeItemI {
	specialization: string;
	name: string;
	lastName: string;
	photo: any;
	skills: string[];
}

const EmployeeItem: FC<EmployeeItemI> = (props) => {
	const { specialization, name, lastName, photo, skills } = props;

	return (
		<div className={s.employee}>
			<div className={s["cover-wrap"]}>
				<img src={photo} alt="" className={s.mount} />
				<img src={photo} alt="" className={s.cover} />
				<span className={s.name}>
					{name + " " + lastName.slice(0, 1) + "."}
				</span>
			</div>
			<div className={s.spec}>
				<p className={s.title}>{specialization}</p>
				<SkillsList skills={skills} />
			</div>
		</div>
	);
};

export default EmployeeItem;
