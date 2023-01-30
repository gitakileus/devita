import React from 'react'

import NewsItem from 'components/NewsItem'
import { useTranslation } from 'react-i18next'

import { ReactComponent as T } from 'icons/t-path.svg'

const dummyData = [
	{
		index: 1,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: true,
	},
	{
		index: 2,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 3,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 4,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 5,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 6,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 7,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
	{
		index: 8,
		title:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
		active: false,
	},
]

const Media = () => {
	const { t } = useTranslation()

	return (
		<div className="flex h-screen w-full flex-col items-center bg-[url('/public/images/back-media.png')] bg-cover px-[90px] pt-8">
			<div className="flex h-[153px] w-[456px] items-center justify-center bg-[url('/public/images/in-the-media.png')] bg-cover">
				<h4 className="text-4xl font-bold text-white uppercase why-title">{t(`in the media`)}</h4>
			</div>

			<div className="mt-[137px] flex w-[1260px] flex-col">
				<div className="flex items-center w-full gap-2">
					<div className="flex h-14 w-[74px] items-center justify-center bg-blue/50">
						<img src="/images/white-logo.png" alt="white-logo" className="w-8 h-8" />
					</div>
					<div className="relative flex items-center w-full h-full pl-6">
						<img
							src="/images/media-news-path.png"
							alt="white-logo"
							className="absolute left-0 h-14 w-[1175px]"
						/>
						<h6 className="relative text-xl font-medium uppercase text-[#30D6D6]">{t(`news`)}</h6>
					</div>
				</div>

				<div className="flex items-center justify-center w-full mt-8 -translate-x-3 gap-9">
					<div className="flex h-[435px] flex-col gap-[30px] overflow-y-scroll">
						{dummyData.map((item) => (
							<NewsItem
								index={item.index}
								title={t(item.title)}
								active={item.active}
								key={item.index}
							/>
						))}
					</div>

					<div className="relative flex flex-col items-center border-[2px] border-[#2F96BA] px-[90px] py-[42px]">
						<img src="/images/heralo.png" alt="heralo" className="h-[58px] w-[260px]" />
						<p className="mt-[31px] w-[477px] text-[13px] font-light leading-[16px] text-white first-letter:uppercase">
							{t(
								`lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy`
							)}
						</p>
						<a
							href="/#"
							className="mt-[21px] text-[15px] leading-[18px] text-green underline first-letter:uppercase"
						>
							{t(`read article`)}
						</a>

						<T className="absolute w-6 h-6 -top-6 -left-6" />
						<T className="absolute w-6 h-6 rotate-90 -top-6 -right-6" />
						<T className="absolute w-6 h-6 -rotate-90 -bottom-6 -left-6" />
						<T className="absolute w-6 h-6 rotate-180 -bottom-6 -right-6" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Media
