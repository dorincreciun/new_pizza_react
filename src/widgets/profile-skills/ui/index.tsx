import type { FC } from "react"

import type { IProfileSkillsProps } from "@widgets/profile-skills/model/interface"

import { Title } from "@shared/components/Title"

export const ProfileSkills: FC<IProfileSkillsProps> = ({ title, skills, className }) => {
	return (
		<div className={className}>
			<Title
				as={"h3"}
				size={"xs"}
				className={"mb-4"}
			>
				{title}
			</Title>
			<ul className={"flex flex-col gap-y-2.5"}>
				{skills.map(({ name, value }, index) => {
					return (
						<li key={name + value + index}>
							<div className={"mb-1 flex items-center justify-between"}>
								<div className={"text-paragraph leading-6"}>{name}</div>
								<div className={"text-paragraph leading-6"}>{value}%</div>
							</div>
							<div className={"border-yellow rounded-4xl border p-[2px]"}>
								<div
									className={"bg-yellow h-[2px] rounded-4xl"}
									style={{ width: `${value}%` }}
								/>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
