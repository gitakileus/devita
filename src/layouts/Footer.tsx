import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Discord } from 'icons/discord.svg'
import { ReactComponent as Telegram } from 'icons/telegram.svg'
import { ReactComponent as Global } from 'icons/global.svg'
import { ReactComponent as Ko } from 'icons/ko.svg'
import { ReactComponent as Medium } from 'icons/medium.svg'
import { ReactComponent as Instagram } from 'icons/instagram.svg'
import { ReactComponent as Twitter } from 'icons/twitter.svg'
import { ReactComponent as Reddit } from 'icons/reddit.svg'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className="flex w-full flex-col items-center bg-[url('/public/images/back-footer.png')] bg-cover p-[70px_210px_26px_90px]">
			<div className="flex h-full w-full justify-between">
				<img src="/images/logo.png" alt="logo" className="h-fit w-[185px]" />
				<div className="flex text-lg font-medium">
					<div className="flex flex-col text-green">
						<span>{t(`Legal`)}</span>
						<div className="mt-[7px] h-1 w-[65px] bg-blue" />
						<div className="mt-[43px] flex flex-col gap-5">
							<span>{t(`Site Terms`)}</span>
							<span>{t(`Terms and Conditions`)}</span>
							<span>{t(`Privacy Policy`)}</span>
						</div>
					</div>

					<div className="ml-[78px] flex flex-col text-white">
						<span className="text-green">{t(`Document`)}</span>
						<div className="mt-[7px] h-1 w-[108px] bg-blue" />
						<div className="mt-[43px] flex flex-col gap-5">
							<span>{t(`Whitepaper`)}</span>
							<span>{t(`Brandbook`)}</span>
							<span>{t(`Media Kit`)}</span>
							<span>{t(`Github`)}</span>
						</div>
					</div>

					<div className="ml-[220px] flex flex-col text-white">
						<span className="text-green">{t(`Community`)}</span>
						<div className="mt-[7px] h-1 w-[123px] bg-blue" />
						<div className="mt-[43px] flex flex-col gap-5">
							<div className="flex items-center gap-[10px]">
								<Discord className="h-8 w-8" />
								{t(`Discord`)}
							</div>
							<div className="flex items-center gap-[10px]">
								<Telegram className="h-8 w-8" />
								{t(`Telegram`)}
							</div>
							<div className="ml-[42px] flex flex-col">
								<div className="flex items-center gap-[9px]">
									<Global className="h-[22px] w-[22px]" />
									{t(`Media Kit`)}
								</div>
								<div className="flex items-center gap-[9px]">
									<Ko className="h-[22px] w-[22px]" />
									{t(`Github`)}
								</div>
							</div>
						</div>
					</div>

					<div className="ml-[78px] flex flex-col">
						<span className="text-green">{t(`Social`)}</span>
						<div className="mt-[7px] h-1 w-[72px] bg-blue" />
						<div className="mt-[43px] grid grid-cols-2 grid-rows-2 gap-[35px]">
							<Medium className="cursor-pointer" />
							<Instagram className="cursor-pointer" />
							<Twitter className="cursor-pointer" />
							<Reddit className="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>

			<span className="text-[#B8B8B8] mt-[141px]">{t(`Copyright © Devita 2022. All rights reserved`)}</span>
		</div>
	)
}

export default Footer
