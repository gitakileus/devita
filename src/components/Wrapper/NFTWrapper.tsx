interface Props {
	imgURL: string
	text: string
	color?: string
}

const NFTWrapper = (props: Props) => {
	const { imgURL, text, color = '#000' } = props

	return (
		<div className="flex w-fit flex-shrink-0 flex-col items-center rounded-[20px] bg-gradient-to-tl from-maroon to-dark-blue p-4 shadow-[inset_3px_3px_6px_#FFFFFF33,3px_3px_6px_#00000040] sm:rounded-[10px] sm:p-2">
			<div className="w-fit rounded-[4px] py-4 px-14 shadow-[inset_3px_3px_6px_#00000033,2px_2px_2px_#0000000D]">
				<img src={imgURL} alt="" className="h-[335px] w-[175px] sm:h-[146px] sm:w-[76px]" />
			</div>
			<p
				className="mt-2 text-[40px] font-semibold transition-none sm:text-lg"
				style={{ color: color }}
			>
				{text}
			</p>
		</div>
	)
}

export default NFTWrapper
