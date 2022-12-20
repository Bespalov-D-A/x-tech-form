import { FC } from "react";
import s from "./Btn.module.scss";
import union from "./../../../img/ico/common/union.svg";
import { HandySvg } from "handy-svg";

interface BtnI {
	title: string;
	pLeft: number;
	pRight: number;
	primary?: boolean;
	arrow?: boolean;
	arrowIn?: boolean;
	bgcl?: string;
}

const Btn: FC<BtnI> = (props) => {
	const { title, pLeft, pRight, primary, arrow, arrowIn, bgcl } = props;

	const style = {
		paddingLeft: pLeft,
		paddingRight: pRight,
	};

	const prm = primary ? "primary" : "";
	const arrowCl = arrow ? "arrowCl" : "";

	return (
		<div
			className={`${s.btn} ${s[prm]} ${s[arrowCl]} ${bgcl && s[bgcl]}`}
			style={style}
		>
			{arrow && (
				<>
					<div className={s.slice + " " + (bgcl && s[bgcl])}></div>
					<div
						className={s.slice + " " + s.union + " " + (bgcl && s[bgcl])}
					></div>
					<HandySvg
						src={union}
						className={s.arrow + " " + (bgcl ? s[bgcl] : "")}
						height="100%"
					/>
				</>
			)}
			<span className={"" + (arrowIn ? s["arrow-in"] : "")}>{title}</span>
		</div>
	);
};

export default Btn;
