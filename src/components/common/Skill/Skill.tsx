import {FC} from 'react'
import s from './Skill.module.scss'

interface SkillI {
	skill: string
}

const Skill: FC<SkillI> = (props) => {
	const {skill} = props

	return <div className={s.skill}>{skill}</div>
}

export default Skill
