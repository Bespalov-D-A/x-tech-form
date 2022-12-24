import { FC } from "react";
import s from "./Social.module.scss";
import fb from "./../../../img/ico/common/fb.png";
import inst from "./../../../img/ico/common/inst.png";
import youtube from "./../../../img/ico/common/youtube.png";
import vk from "./../../../img/ico/common/vk.png";

const data = [
	{ img: fb, name: "facebook" },
	{ img: inst, name: "instagram" },
	{ img: youtube, name: "youtube" },
	{ img: vk, name: "vkontakte" },
];

interface SocialI {
	column?: boolean;
}

const Social: FC<SocialI> = ({ column }) => {
	
	const socialStyle = {
		flexFlow: column ? 'column wrap' : 'row wrap'
	}

	return (
		<div className={s.social} style={socialStyle}>
			{data.map((item, index) => {
				return (
					<div className={s.item} key={index}>
						<img src={item.img} alt="" className={s.img}/>
						<span className={s.name}>{column && item.name}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Social;
