import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Hexagon } from 'icons/hexagon1.svg'
import { ReactComponent as Android } from 'icons/android.svg'
import { ReactComponent as IOS } from 'icons/ios.svg'

const NewsLetter = () => {
	const { t } = useTranslation()

	return (
		<div className="relative flex w-full justify-between bg-[url('/public/images/back-newsletter.png')] bg-cover py-[114px] px-[140px]">
			<div className="flex flex-col gap-[35px]">
				<h5 className="text-[28px] font-medium uppercase leading-[34px] text-green">
					{t(`receive our newsletter`)}
				</h5>
				<span className="text-2xl font-medium text-white first-letter:uppercase">
					{t(`sign up to receive updates and announcements`)}
				</span>
				<button className="relative flex h-[77px] w-[300px] items-center justify-center border-x-8 border-cadetbule bg-blue/50  text-xl font-medium uppercase text-white">
					{t(`newsletter`)}
					<div className="absolute top-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
					<div className="absolute top-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
					<div className="absolute bottom-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
					<div className="absolute bottom-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
				</button>
			</div>

			<div className="flex flex-col gap-[35px]">
				<h5 className="text-[28px] font-medium uppercase leading-[34px] text-green">
					{t(`download the app`)}
				</h5>
				<span className="text-2xl font-medium text-white">
					{t(`Coming soon for iOS and Android`)}
				</span>
				<div className="flex gap-5">
					<button className="relative flex h-[77px] w-[300px] items-center justify-center gap-[15px] border-x-8 border-cadetbule  bg-blue/50 text-xl font-medium uppercase text-white">
						<Android className="h-[38px] w-8" />
						{t(`for android`)}
						<div className="absolute top-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
						<div className="absolute top-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
						<div className="absolute bottom-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
						<div className="absolute bottom-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
					</button>
					<button className="relative flex h-[77px] w-[300px] items-center justify-center gap-[15px] border-x-8 border-cadetbule  bg-blue/50 text-xl font-medium uppercase text-white">
						<IOS className="h-9 w-[30px]" />
						{t(`for ios`)}
						<div className="absolute top-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
						<div className="absolute top-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
						<div className="absolute bottom-0 left-0 w-4 h-1 -translate-x-2 bg-darkTurquoise" />
						<div className="absolute bottom-0 right-0 w-4 h-1 translate-x-2 bg-darkTurquoise" />
					</button>
				</div>
			</div>

			<div className="absolute top-1/2 left-1/2 h-[123px] w-[109px] -translate-x-1/2 -translate-y-1/2">
				<img
					src="images/logo-symbol.png"
					className="absolute top-[30px] left-[25px] h-[65px] w-[60px]"
					alt="logo"
				/>
				<Hexagon className="absolute top-0 left-0 h-[123px] w-[109px]" />
			</div>
		</div>
	)
}

export default NewsLetter
