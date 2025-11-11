import type { RouteObject } from "react-router"

import { FallBackPage } from "@pages/fallback/FallBackPage"
import { HomePage } from "@pages/home"

import { TRouter } from "@shared/const/react-router"

export const RoutesPublic: RouteObject[] = [
	{ path: TRouter.DEFAULT, element: <HomePage /> },
	{ path: TRouter.FALLBACK, element: <FallBackPage /> },
]
