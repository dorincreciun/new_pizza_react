import { Contact } from "@pages/home/ui/Contact"
import { Education } from "@pages/home/ui/Education"
import { Hero } from "@pages/home/ui/Hero"
import { Portfolio } from "@pages/home/ui/Portfolio"
import { Recommendations } from "@pages/home/ui/Recommendations"
import { Services } from "@pages/home/ui/Services"
import { WorkHistory } from "@pages/home/ui/WorkHistory"

export const HomePage = () => {
	return (
		<div className={"flex flex-1 flex-col gap-y-17.5"}>
			<Hero />
			<Services />
			<Recommendations />
			<Education />
			<WorkHistory />
			<Portfolio />
			<Contact />
		</div>
	)
}
