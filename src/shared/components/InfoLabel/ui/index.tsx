import type { FC } from "react"

import type { IInfoLabelProps } from "@shared/components/InfoLabel/model/interface"

export const InfoLabel: FC<IInfoLabelProps> = ({ children }) => {
	return <span className="bg-yellow max-w-max px-2 py-1 leading-4 text-black">{children}</span>
}
