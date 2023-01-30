interface Props {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
}

const ContentWrapper = (props: Props) => {
	const { children, className, onClick } = props

	return (
		<div
			className={`rounded-[20px] border border-[#FFFFFF26] from-[#23009619] to-[#5D535321] shadow-[inset_0px_3px_6px_#0000002F] backdrop-blur-lg backdrop-brightness-110 bg-gradient-119 ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

export default ContentWrapper
