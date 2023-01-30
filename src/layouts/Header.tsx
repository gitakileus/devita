import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ReactComponent as MenuIcon } from '@material-icons/svg/svg/menu/outline.svg'
import { ReactComponent as CloseIcon } from '@material-icons/svg/svg/close/outline.svg'

import { menu } from 'config'
import LanguageSelect from 'components/LanguageSelect'

const Header = () => {
	const { t } = useTranslation()

	return (
		<header className="absolute z-10 flex h-[125px] w-full flex-shrink-0 items-center bg-[#000000A6] shadow-md">
			<div className="flex items-center justify-between w-full mx-10 gap-14 lg:ml-20 lg:mr-16">
				<img src="/images/logo.png" alt="logo" className="h-full w-[243px]" />
				<div className="hidden flex-wrap gap-4 text-white xl:gap-[30px] md:flex">
					{menu.map((item) => (
						<Link to={item.to} key={item.title}>
							<button
								className={`blur-button cursor-pointer py-2 px-[14px] uppercase ${
									item.active && ''
								}`}
							>
								<span className="blur-none">{t(item.title)}</span>
							</button>
						</Link>
					))}
					<LanguageSelect />
				</div>
			</div>
		</header>
	)
}

export default Header
