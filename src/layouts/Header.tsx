import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Menu } from '@material-icons/svg/svg/menu/baseline.svg'
import { ReactComponent as Close } from '@material-icons/svg/svg/close/baseline.svg'

import { menu } from 'config'
import LanguageSelect from 'components/LanguageSelect'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	return (
		<>
			<header className="absolute z-10 flex h-[125px] w-full flex-shrink-0 items-center bg-[#000000A6] shadow-md">
				<div className="mx-8 flex w-full items-center justify-between gap-5 lg:gap-14 lg:ml-20 lg:mr-16">
					<img src="/images/logo.png" alt="logo" className="h-full w-[243px]" />
					<div className="hidden flex-wrap text-white md:flex">
						{menu.map((item) => (
							<Link to={item.to} key={item.title}>
								<button
									className={`mr-0 py-2 px-3 lg:px-[14px] text-xl font-normal uppercase leading-[24px] xl:mr-[26px] lg:mr-4 ${
										item.active && ''
									} ${
										item.live ? 'blur-button cursor-pointer text-white' : 'cursor-default text-gray'
									}`}
								>
									<span className="blur-none">{t(item.title)}</span>
								</button>
							</Link>
						))}
						<LanguageSelect />
					</div>

					<Menu
						className="block h-8 w-8 cursor-pointer fill-white md:hidden"
						onClick={() => setIsOpen(true)}
					/>
				</div>
			</header>

			{isOpen && (
				<div className="fixed top-0 left-0 z-30 h-screen w-full bg-[url('/public/images/back-welcome.png')] bg-cover pt-10 pr-9">
					<div className="relative z-10 flex h-full w-full flex-col items-end">
						<Close
							className=" mr-[14px] h-8 w-8 cursor-pointer fill-white"
							onClick={() => setIsOpen(false)}
						/>
						<div className="mt-12 flex flex-col items-end gap-5">
							{menu.map((item) => (
								<Link to={item.live ? item.to : ''} key={item.title}>
									<button
										className={`mr-0 py-2 px-[14px] text-xl font-medium uppercase tracking-wide xl:mr-[26px] lg:mr-4 ${
											item.active && ''
										} ${
											item.live
												? 'blur-button cursor-pointer text-white'
												: 'cursor-default text-gray'
										}`}
									>
										<span className="blur-none">{t(item.title)}</span>
									</button>
								</Link>
							))}
						</div>
						<LanguageSelect className="mt-[60px] mr-[14px]" />
					</div>

					<div className="absolute top-14 left-14 h-[49px] w-[49px] rounded-full bg-gradient-to-b from-green to-blue" />
					<div className="absolute bottom-11 -right-14 h-[231px] w-[231px] rounded-full bg-gradient-to-b from-blue/90 to-green/90" />
					<div className="absolute bottom-32 right-32 h-[98px] w-[98px] rounded-full bg-gradient-to-b from-blue/90 to-green/90" />
					<div className="absolute bottom-24 -right-2 h-2 w-[120px] rounded-[20px] bg-gradient-to-r from-blue via-[#9AA7A6] to-green" />
					<div className="absolute bottom-16 right-0 h-2 w-[260px] rounded-[20px] bg-gradient-to-r from-blue via-[#9AA7A6] to-green" />
				</div>
			)}
		</>
	)
}

export default Header
