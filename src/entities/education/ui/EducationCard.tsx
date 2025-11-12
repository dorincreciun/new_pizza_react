import type { FC } from "react"

import type { IEducationProps } from "@entities/education/model/interface"

import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"

export const EducationCard: FC<IEducationProps> = ({
	institution,
	position,
	period,
	description,
	certificate_title,
}) => {
	return (
		<div className={"grid grid-cols-12 gap-30 p-10"}>
			<div className={"col-span-3 flex flex-col gap-7"}>
				<Title
					as={"h3"}
					size={"xs"}
				>
					{institution}
				</Title>
				<div className={"flex items-center justify-between gap-5"}>
					<span className={"leading-6 text-black"}>{position}</span>
					<div className={"bg-yellow max-w-max px-2 py-1 text-[10px] leading-4 text-white"}>{period}</div>
				</div>
			</div>
			<div className={"col-span-7 flex flex-col gap-7"}>
				<Title
					as={"h4"}
					size={"xs"}
				>
					{certificate_title}
				</Title>
				<Subtitle>{description}</Subtitle>
			</div>
		</div>
	)
}
