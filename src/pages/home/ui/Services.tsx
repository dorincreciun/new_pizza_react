import { useTranslation } from "react-i18next"

export const Services = () => {
	const { t } = useTranslation("common")
	return <div>{t("navbar.home")}</div>
}
