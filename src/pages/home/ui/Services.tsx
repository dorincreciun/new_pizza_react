import { useTranslation } from "react-i18next"

export const Services = () => {
	const { t } = useTranslation("translation")
	return <div>{t("HOME.SERVICES.TITLE")}</div>
}
