interface Props {
	children: React.ReactNode
	className?: string
}

const ModalWrapper = (props: Props) => {
	const { children, className } = props
	return (
		<div className="rounded-[22px] from-orange to-maroon p-[3px] shadow-[3px_3px_6px_#00000029] bg-gradient-221">
			<div
				className={`relative flex w-[640px] flex-col rounded-[22px] bg-background px-10 py-12 shadow-[3px_3px_6px_#00000029] sm:w-[336px] sm:px-5 ${className}`}
			>
				{children}
			</div>
		</div>
	)
}

export default ModalWrapper
