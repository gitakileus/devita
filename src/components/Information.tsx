interface Props {
	description?: string | null
	width: number
}

const Information = (props: Props) => {
	const { description, width } = props
	return (
		<div className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded border border-primary text-xs font-bold leading-[5px] text-primary">
			i
			<div
				className="absolute right-0 top-5 z-20 hidden rounded-[10px] bg-primary p-4 text-xs font-normal text-secondary group-hover:block"
				style={{ width: width }}
			>
				{description}
			</div>
		</div>
	)
}

export default Information
