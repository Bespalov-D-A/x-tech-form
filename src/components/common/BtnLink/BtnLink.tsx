import {FC} from 'react'
import s from './BtnLink.module.scss'

interface BtnLinkI {
	title: string
}

const BtnLink: FC<BtnLinkI> = (props) => {
	const {title} = props

	return <p className={s.btn}>{title}</p>
}

export default BtnLink
