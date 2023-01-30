import React from 'react'

type Props = {
	index: number
	title: string
	active: boolean
}

const NewsItem: React.FC<Props> = ({ index, title, active }) => {
	return (
		<div className="flex items-start gap-[22px] text-lg font-medium leading-[22px]">
			<h6 className="text-white">{index}</h6>
			<div className="mt-[4px] h-7 w-[2px] bg-white" />
			<p
				className={`${
					active ? 'text-green' : 'text-white'
				} anim w-[450px] cursor-pointer hover:underline`}
			>
				{title}
			</p>
		</div>
	)
}

export default NewsItem
