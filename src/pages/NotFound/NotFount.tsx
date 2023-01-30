import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFount = () => {
	const { t } = useTranslation()

	return (
		<div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#0B0B0B] bg-[url('/public/images/stars.png')] bg-cover">
			<div className="flex flex-col items-center">
				<img src="/images/404.png" alt="404" className="w-[375px]" />
				<h1 className="mt-[17px] text-[50px] font-bold uppercase leading-[61px] text-white">
					{t(`oops`)}
				</h1>
				<span className="text-[30px] font-light uppercase leading-[36px] text-white">
					{t(`page not found`)}
				</span>
				<div className="mt-5 flex gap-[30px]">
					<Link to={'/home'}>
						<button className="flex h-9 w-[169px] items-center justify-center rounded-[5px] border-[0.5px] border-white text-xl font-light uppercase text-white">
							{t(`home`)}
						</button>
					</Link>
					<Link to={'/contact-us'}>
						<button className="flex h-9 w-[169px] items-center justify-center rounded-[5px] border-[0.5px] border-white text-xl font-light uppercase text-white">
							{t(`contact us`)}
						</button>
					</Link>
				</div>
			</div>

			<img
				src="/images/hexagon-3d1.png"
				alt="hexagon"
				className="absolute left-[84px] top-[99px] w-[149px]"
			/>
			<img
				src="/images/hexagon-3d2.png"
				alt="hexagon"
				className="absolute right-[65px] bottom-[40px] w-[259px]"
			/>
		</div>
	)
}

export default NotFount
