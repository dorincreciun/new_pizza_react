export const Avatar = () => {
	return (
		<div className="relative mx-auto max-w-max">
			<div className="flex size-[150px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
				<img
					className="size-full"
					src={"/Profile.png"}
					alt="avatar"
					width={100}
					height={100}
				/>
			</div>
			<div className="absolute right-4 bottom-3.5 size-4 rounded-full bg-green-500"></div>
		</div>
	)
}
