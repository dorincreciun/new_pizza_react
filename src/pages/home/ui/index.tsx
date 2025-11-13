import { ChartPie, ChevronsLeftRightEllipsis, Snail } from "lucide-react"
import { useTranslation } from "react-i18next"

import { SectionInfo } from "@widgets/section-services"

import { EducationCard } from "@entities/education"
import { ServiceCard } from "@entities/service"
import { WordHistoryCard } from "@entities/work-history"

export const HomePage = () => {
	const { t } = useTranslation("translation")
	return (
		<div className={"flex flex-1 flex-col gap-y-17.5"}>
			{/* Services */}
			<SectionInfo
				id={"services"}
				title={t("HOME.SERVICES.TITLE")}
				description={t("HOME.SERVICES.DESCRIPTION")}
				render={() => {
					return (
						<div className={"grid grid-cols-3 gap-5"}>
							<ServiceCard
								icon={<ChartPie className={"size-full"} />}
								title={t("HOME.SERVICES.BLOCKS.BLOCK_1.TITLE")}
								description={t("HOME.SERVICES.BLOCKS.BLOCK_1.DESCRIPTION")}
							/>
							<ServiceCard
								icon={<ChevronsLeftRightEllipsis className={"size-full"} />}
								title={t("HOME.SERVICES.BLOCKS.BLOCK_2.TITLE")}
								description={t("HOME.SERVICES.BLOCKS.BLOCK_2.DESCRIPTION")}
							/>
							<ServiceCard
								icon={<Snail className={"size-full"} />}
								title={t("HOME.SERVICES.BLOCKS.BLOCK_3.TITLE")}
								description={t("HOME.SERVICES.BLOCKS.BLOCK_3.DESCRIPTION")}
							/>
						</div>
					)
				}}
			/>

			{/* Recommendations */}
			<SectionInfo
				id={"recommendations"}
				title={t("HOME.RECOMMENDATIONS.TITLE")}
				description={t("HOME.RECOMMENDATIONS.DESCRIPTION")}
			/>

			{/* Education */}
			<SectionInfo
				id={"education"}
				title={t("HOME.EDUCATION.TITLE")}
				description={t("HOME.EDUCATION.DESCRIPTION")}
				render={() => {
					return (
						<div className={"divide-y divide-gray-200 bg-white"}>
							<EducationCard
								institution={t("HOME.EDUCATION.BLOCKS.BLOCK_1.INSTITUTION")}
								position={t("HOME.EDUCATION.BLOCKS.BLOCK_1.POSITION")}
								period={t("HOME.EDUCATION.BLOCKS.BLOCK_1.PERIOD")}
								certificate_title={t("HOME.EDUCATION.BLOCKS.BLOCK_1.CERTIFICATE_TITLE")}
								description={t("HOME.EDUCATION.BLOCKS.BLOCK_1.DESCRIPTION")}
							/>
							<EducationCard
								institution={t("HOME.EDUCATION.BLOCKS.BLOCK_2.INSTITUTION")}
								position={t("HOME.EDUCATION.BLOCKS.BLOCK_2.POSITION")}
								period={t("HOME.EDUCATION.BLOCKS.BLOCK_2.PERIOD")}
								certificate_title={t("HOME.EDUCATION.BLOCKS.BLOCK_2.CERTIFICATE_TITLE")}
								description={t("HOME.EDUCATION.BLOCKS.BLOCK_2.DESCRIPTION")}
							/>
						</div>
					)
				}}
			/>

			{/* Work History */}
			<SectionInfo
				id={"work-history"}
				title={t("HOME.WORK_HISTORY.TITLE")}
				description={t("HOME.WORK_HISTORY.DESCRIPTION")}
				render={() => {
					return (
						<div className={"divide-y divide-gray-200 bg-white"}>
							<WordHistoryCard
								company={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_1.INSTITUTION")}
								position={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_1.POSITION")}
								period={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_1.PERIOD")}
								description={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_1.DESCRIPTION")}
							/>
							<WordHistoryCard
								company={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_2.INSTITUTION")}
								position={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_2.POSITION")}
								period={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_2.PERIOD")}
								description={t("HOME.WORK_HISTORY.BLOCKS.BLOCK_2.DESCRIPTION")}
							/>
						</div>
					)
				}}
			/>

			{/* Portfolio */}
			<SectionInfo
				id={"portfolio"}
				title={t("HOME.PORTFOLIO.TITLE")}
				description={t("HOME.PORTFOLIO.DESCRIPTION")}
			/>
		</div>
	)
}
