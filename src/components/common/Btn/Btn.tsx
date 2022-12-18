import { FC } from "react";
import s from "./Btn.module.scss";

interface BtnI {
	title: string;
	pLeft: number;
	pRight: number;
	primary: boolean;
}

const Btn: FC<BtnI> = (props) => {
	const { title, pLeft, pRight, primary } = props;

	const style = {
		paddingLeft: pLeft,
		paddingRight: pRight,
	};

	return (
		<div className={s.btn + " " + (primary ? s.primary : "")} style={style}>
			{title}
		</div>
	);
};

export default Btn;
