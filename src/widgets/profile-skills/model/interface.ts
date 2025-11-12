type SkillType = {
	name: string
	value: number
}

export interface IProfileSkillsProps {
	title: string
	className?: string
	skills: SkillType[]
}
