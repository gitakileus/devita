interface Props {
	className?: string
	children?: React.ReactNode
}

const ContentWrapper2 = (props: Props) => {
	const { className, children } = props

	return (
		<div
			className={`shadow-[inset_4px_2px_3px_#FFFFFF26,inset_-4px_-2px_3px_#FFFFFF26,0px_0px_6px_1px_#FFFFFF26] ${className}`}
		>
			{children}
		</div>
	)
}

export default ContentWrapper2
