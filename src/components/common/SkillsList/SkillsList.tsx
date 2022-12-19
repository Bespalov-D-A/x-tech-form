import {FC} from 'react'
import Skill from '../Skill/Skill'
import s from './SkillsList.module.scss'

interface SkillsListI {
	skills: string[]
}

const SkillsList: FC<SkillsListI> = (props) => {
	const {skills} = props

	const remapSkills = (arr: string[]) => {
		return arr.map((skill:string) => <Skill skill={skill} key={skill}/>)
	}

	return <div className={s.list}>{remapSkills(skills)}</div>
}

export default SkillsList

