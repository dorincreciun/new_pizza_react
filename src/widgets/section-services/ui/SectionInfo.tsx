import type { FC } from "react"

import type { ISectionInfoProps } from "@widgets/section-services/model/interface"

import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"

export const SectionInfo: FC<ISectionInfoProps> = ({ id, title, description, render }) => {
	return (
		<div id={id}>
			<div className={"mx-auto mb-12.5 max-w-[430px]"}>
				<Title
					as={"h2"}
					size={"md"}
					className={"mb-6 text-center"}
				>
					{title}
				</Title>
				<Subtitle className={"text-center"}>{description}</Subtitle>
			</div>
			{render && render()}
		</div>
	)
}
