import { FC } from "react";
import s from "./Btn.module.scss";

interface BtnI {
	title: string;
	pLeft: number;
	pRight: number;
	primary?: boolean;
	arrow?: boolean;
	arrowIn?: boolean;
}

const Btn: FC<BtnI> = (props) => {
	const { title, pLeft, pRight, primary, arrow, arrowIn } = props;

	const style = {
		paddingLeft: pLeft,
		paddingRight: pRight,
	};

	return (
		<div className={s.btn + " " + (primary || arrow ? s.primary : "") + ' '} style={style}>
			{arrow && <div className={s.arrow}/>}
			<span className={'' + (arrowIn ? s['arrow-in'] : '')}>{title}</span>
		</div>
	);
};

export default Btn;
