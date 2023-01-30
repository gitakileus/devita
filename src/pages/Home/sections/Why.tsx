import React from 'react'
import { useTranslation } from 'react-i18next'

const Why = () => {
	const { t } = useTranslation()

	return (
		<div className="flex h-screen w-full flex-col items-center bg-[url('/public/images/back-why.png')] bg-cover px-[90px] ">
			<div
				className="flex h-[189px] w-[374px] items-center justify-center bg-[url('/public/images/devita-why.png')]
       bg-cover"
			>
				<h4 className="text-4xl font-bold text-white uppercase why-title">{t(`why devita`)}</h4>
			</div>

			<div className="relative flex flex-col w-full h-[750px]">
				<img
					src="/images/devita-card.png"
					className="absolute top-0 left-0 w-[331px]"
					alt="devita-card"
				/>

				<div className="absolute left-[73px] top-[93px] flex w-full gap-[15px]">
					<div className="mt-[18px] h-[3px] w-[315px] bg-blue" />
					<div className="flex flex-col">
						<h4 className="uppercase text-green font-bold text-[28px] ">{t(`healthcare inclusion`)}</h4>
						<p className="text-full mt-[15px] w-[1008px] text-white text-xl first-letter:uppercase">
							{t(
								`our telehealth services, coupled with the decentralized health database enable wider-reaching access to healthcare and data management services to rural communities that would otherwise be unable to access health services. all that’s required is adevice with internet connectivity.`
							)}
						</p>
					</div>
					<div className="absolute flex flex-col items-center top-[15px] -left-[30px]">
						<div className="h-[62px] w-[3px] bg-blue" />
						<img className="h-[72px] w-[70px]" src="/images/target.png" alt="target" />
					</div>
				</div>

				<div className="absolute left-[150px] top-[350px] flex w-full gap-[15px]">
					<div className="mt-[18px] h-[3px] w-[528px] bg-blue" />
					<div className="flex flex-col">
						<h4 className="uppercase text-green font-bold text-[28px]">{t(`financial inclusion`)}</h4>
						<p className="text-full mt-[15px] w-[918px] text-white text-xl first-letter:uppercase">
							{t(
								`users are compensated with LIFE tokens upon the provision of personal health data to the decentralized health database. LIFE represents the value of your personal health data, the face value of which is determined in the marketplace.`
							)}
						</p>
					</div>
          <div className="absolute flex flex-col items-center -top-[17px] -left-[35px]">
						<img className="h-[72px] w-[70px]" src="/images/target.png" alt="target" />
					</div>
				</div>

				<div className="absolute left-[220px] bottom-0 flex w-full gap-[15px]">
					<div className="mt-[18px] h-[3px] w-[607px] bg-blue" />
					<div className="flex flex-col">
						<h4 className="uppercase text-green font-bold text-[28px]">{t(`joint venture`)}</h4>
						<p className="text-full mt-[15px] w-[890px] text-white text-xl first-letter:uppercase">
							{t(
								`DEVITA already houses over 3 million users and proffers cutting-edge decentralized solutions in a joint-venture with XXX and DIlANT. Users can participate in a project that is already progressing on its self-started momentum.`
							)}
						</p>
					</div>
          <div className="absolute flex flex-col items-center -top-[110px] -left-[30px]">
						<img className="h-[72px] w-[70px]" src="/images/target.png" alt="target" />
						<div className="h-[62px] w-[3px] bg-blue" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Why
