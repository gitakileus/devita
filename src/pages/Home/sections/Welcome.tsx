import React from 'react'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
	const { t } = useTranslation()

	return (
		<div className="relative h-screen w-full bg-[url('/public/images/back-welcome.png')] bg-cover">
			<div className="flex h-full w-full items-center justify-center xs:px-7 px-10 ">
				<div className="relative z-20 flex flex-col items-center justify-center rounded-[15px] bg-gradient-to-r from-[#FFFFFF00] to-[#48BB8633] xs:px-5 px-7 lg:px-14 pt-8 pb-9 md:pb-16 backdrop-blur-[15px] lg:w-[960px] xl:w-[1335px] xl:px-[91px] xl:pb-24">
					<h4 className="text-center text-lg uppercase text-white md:text-3xl xl:text-[32px] xl:leading-[39px]">
						{t(`welcome to`)}
						<span className="font-bold"> {t(`devita`)}</span>
					</h4>
					<p className="mt-3 text-ellipsis xs:text-xl text-2xl md:text-3xl font-medium text-white first-letter:uppercase lg:mt-6 lg:text-[39.5px] lg:leading-[1.2] xl:mt-9 xl:text-[52px]">
						{t(`applying the latest digital technologies to`)}
						<span className="text-blue"> {t(`solve classic problems`)}</span>
						<span className="text-green"> {t(`healthcare access, data,`)}</span>
						{t(` and`)}
						<span> {t(`infrastructure.`)}</span>
					</p>
					<button className="polygon-btn absolute -bottom-7 bg-green py-3 md:py-4 px-6 md:px-10 text-xl font-medium uppercase leading-[24px] text-white xl:-bottom-9 xl:py-6 xl:px-14">
						{t(`whitepaper`)}
					</button>
				</div>
			</div>

			<div className="absolute top-0 left-0 h-full w-full">
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
