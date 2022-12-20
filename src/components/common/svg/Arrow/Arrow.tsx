import {FC} from "react";

const Arrow: FC = (props:any) => {
	const {bgcolor, cl, s} = props
	return (
		<svg
			className={s[cl]}
			width="37"
			height="56"
			viewBox="0 0 37 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M37 28L10 0H0L27 28L0 56H10L37 28Z" fill={bgcolor ? bgcolor : "#5D83E4"} />
		</svg>
	);
};

export default Arrow;
