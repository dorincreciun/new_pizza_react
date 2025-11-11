import { BrowserRouter } from "react-router"

import { createRoot } from "react-dom/client"

import { Routing } from "@app/providers/routing/Routing"

import { SidebarInfo } from "@widgets/sidebar-info"
import { SidebarMenu } from "@widgets/sidebar-menu"

import { Loader } from "@shared/components/Loader"
import "@shared/config/styles/index.css"

const container = document.getElementById("root")

if (!container) {
	throw new Error("Root container with id 'root' not found")
}

const root = createRoot(container)

root.render(
	<BrowserRouter>
		<div className={"flex justify-between gap-x-7.5"}>
			<SidebarInfo />
			<Routing />
			<SidebarMenu />
		</div>

		{/* Overlays */}
		<Loader />
	</BrowserRouter>,
)
