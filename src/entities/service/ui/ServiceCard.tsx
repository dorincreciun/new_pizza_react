import type { FC } from "react"

import type { IServiceProps } from "@entities/service/model/interface"

import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"

export const ServiceCard: FC<IServiceProps> = ({ icon, title, description }) => {
	return (
		<div className={"flex flex-col items-center gap-6 bg-white p-10"}>
			<div className={"text-yellow size-16"}>{icon}</div>
			<div className={"flex flex-col items-center gap-4"}>
				<Title
					as={"h3"}
					size={"xs"}
					className={"text-center"}
				>
					{title}
				</Title>
				<Subtitle className={"text-center"}>{description}</Subtitle>
			</div>
		</div>
	)
}
