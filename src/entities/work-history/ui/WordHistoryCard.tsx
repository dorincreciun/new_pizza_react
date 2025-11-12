import type { FC } from "react"

import type { IWorkHistoryProps } from "@entities/work-history/model/interface"

import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"

export const WordHistoryCard: FC<IWorkHistoryProps> = ({ company, period, position, description }) => {
	return (
		<div className={"flex flex-col gap-7 p-10"}>
			<div className={"flex items-center justify-between gap-5"}>
				<Title
					as={"h3"}
					size={"xs"}
					className={"flex items-center gap-3"}
				>
					{position}
					<span className={"text-yellow"}>|</span>
					{company}
				</Title>
				<span className={"leading-6 text-black"}>{period}</span>
			</div>
			<Subtitle>{description}</Subtitle>
		</div>
	)
}
