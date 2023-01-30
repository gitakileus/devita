import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Hexagon } from 'icons/hexagon.svg'
import { ReactComponent as FeatureLeftBtn } from 'icons/feature-btn.svg'
import { ReactComponent as FeatureLeftBtnHover } from 'icons/feature-btn-hover.svg'
import { ReactComponent as FeatureRightBtn } from 'icons/feature-btn1.svg'
import { ReactComponent as FeatureRightBtnHover } from 'icons/feature-btn1-hover.svg'

const Features = () => {
	const { t } = useTranslation()

	return (
		<div className="flex h-screen w-full flex-col items-center bg-[url('/public/images/back-features.png')] bg-cover px-[90px] ">
			<div
				className="flex h-[208px] w-[434px] justify-center bg-[url('/public/images/devita-features.png')] bg-cover
       pt-[72px]"
			>
				<h4 className="text-4xl font-bold text-white uppercase why-title">
					{t(`devita features`)}
				</h4>
			</div>
			<div className="relative flex items-center justify-center w-full h-full -translate-y-10">
				<img
					src="/images/hexagon-3d.png"
					className="absolute h-[276px] w-[245px]"
					alt="hexagon 3d"
				/>
				<Hexagon className="absolute h-[392px] w-[392px] -translate-x-1" />

				<div className="anim group absolute top-[170px] left-[150px] flex h-[221px] w-[260px] cursor-pointer items-center justify-center">
					<FeatureLeftBtn className="absolute top-0 left-0 h-[221px] w-[260px] group-hover:hidden" />
					<h5 className="relative mt-3 w-[172px] text-2xl font-medium text-[#EFEFEF] first-letter:uppercase group-hover:hidden">
						{t(`decentralized health database`)}
					</h5>
					<FeatureLeftBtnHover className="absolute top-0 left-0 hidden h-[221px] w-[260px] group-hover:block" />
					<h5 className="relative mt-4 hidden w-[170px] text-2xl font-medium leading-[29px] text-[#EFEFEF]  first-letter:uppercase group-hover:block">
						{t(`Reacd More....`)}
					</h5>
				</div>

				<div className="anim group absolute bottom-[80px] left-[60px] flex h-[221px] w-[260px] cursor-pointer items-center justify-center">
					<FeatureLeftBtn className="absolute top-0 left-0 h-[221px] w-[260px] group-hover:hidden" />
					<h5 className="relative mt-4 w-[129px] text-2xl font-medium text-[#EFEFEF] first-letter:uppercase group-hover:hidden">
						{t(`telehealth services`)}
					</h5>
					<FeatureLeftBtnHover className="absolute top-0 left-0 hidden h-[221px] w-[260px] group-hover:block" />
					<h5 className="relative mt-4 hidden w-[170px] text-2xl font-medium leading-[29px] text-[#EFEFEF]  first-letter:uppercase group-hover:block">
						{t(`Reacd More....`)}
					</h5>
				</div>

				<div className="anim group absolute top-[80px] right-[130px] flex h-[221px] w-[260px] cursor-pointer items-center justify-center">
					<FeatureRightBtn className="absolute top-0 left-0 h-[221px] w-[260px] group-hover:hidden" />
					<h5 className="relative mt-2 w-[172px] text-2xl font-medium text-[#EFEFEF] group-hover:hidden">
						{t(`Decentralized Identification (ONE-ID)`)}
					</h5>
					<FeatureRightBtnHover className="absolute top-0 left-0 hidden h-[221px] w-[260px] group-hover:block" />
					<h5 className="relative mt-4 hidden w-[170px] text-2xl font-medium leading-[29px] text-[#EFEFEF]  first-letter:uppercase group-hover:block">
						{t(`Reacd More....`)}
					</h5>
				</div>

				<div className="anim group absolute bottom-[80px] right-[250px] flex h-[221px] w-[260px] cursor-pointer items-center justify-center">
					<FeatureRightBtn className="absolute top-0 left-0 h-[221px] w-[260px] group-hover:hidden" />
					<h5 className="relative mt-2 w-[158px] text-2xl font-medium text-[#EFEFEF] group-hover:hidden">
						{t(`Marketplace`)}
					</h5>
					<FeatureRightBtnHover className="absolute top-0 left-0 hidden h-[221px] w-[260px] group-hover:block" />
					<h5 className="relative mt-4 hidden w-[170px] text-2xl font-medium leading-[29px] text-[#EFEFEF]  first-letter:uppercase group-hover:block">
						{t(`Reacd More....`)}
					</h5>
				</div>
			</div>
		</div>
	)
}

export default Features
