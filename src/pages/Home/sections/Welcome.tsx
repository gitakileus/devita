import React from 'react'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
	const { t } = useTranslation()

	return (
		<div className="relative h-screen w-full bg-[url('/public/images/back-welcome.png')] bg-cover">
			<div className="flex items-center justify-center w-full h-full ">
				<div className="relative z-20 flex w-fit flex-col items-center justify-center rounded-[15px] bg-gradient-to-r from-[#FFFFFF00] to-[#48BB8633] px-[91px] pt-8 pb-24 backdrop-blur-[15px]">
					<h4 className="text-center text-[32px] uppercase leading-[39px] text-white">
						{t(`welcome to`)}
						<span className="font-bold"> {t(`devita`)}</span>
					</h4>
					<p className="mt-9 w-[1152px] text-[52px] font-medium leading-[1.2] text-white first-letter:uppercase">
						{t(`applying the latest digital technologies to`)}
						<span className="text-blue"> {t(`solve classic problems`)}</span>
						<span className="text-green"> {t(`healthcare access, data,`)}</span>
						{t(` and`)}
						<span> {t(`infrastructure.`)}</span>
					</p>
					<button className="polygon-btn absolute -bottom-9 bg-green py-6 px-14 text-xl font-medium uppercase leading-[24px] text-white">
						{t(`whitepaper`)}
					</button>
				</div>
			</div>

			<div className="absolute top-0 left-0 w-full h-full">
				<div className="circle-tl-1" />
				<div className="circle-tl-2" />
				<div className="circle-center" />
				<div className="circle-bl" />
				<div className="box-bl" />
				<div className="circle-br-1">
					<div className="circle-br-2" />
				</div>
				<div className="box-br-1">
					<div className="box-br-2" />
				</div>
				<div className="circle-tr" />
			</div>
		</div>
	)
}

export default Welcome
