import {FC} from 'react'
import s from './BtnLink.module.scss'

interface BtnLinkI {
	title: string,
		color?: string

}

const BtnLink: FC<BtnLinkI> = (props) => {
	const {title, color} = props

	return <p className={`${s.btn} ${color && s[color]}`}>{title}</p>
}

export default BtnLink
