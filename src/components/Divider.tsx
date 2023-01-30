interface Props {
	className?: string
}

const Divider = (props: Props) => {
	const { className = '' } = props
	return <div className={`h-0.5 rounded-full from-maroon to-orange bg-gradient-279 ${className}`} />
}

export default Divider
