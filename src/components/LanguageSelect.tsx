import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import internationalization from 'i18n/i18n'

import { ReactComponent as LanguageIcon } from 'icons/language.svg'
import { ReactComponent as DropdownIcon } from '@material-icons/svg/svg/expand_more/outline.svg'

interface Props {
	className?: string
}

const languages = [
	{ text: 'ENG', key: 'en' },
	{ text: '한국어', key: 'ko' },
]

const LanguageSelect = (props: Props) => {
	const { className = '' } = props
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { i18n } = useTranslation()
	const { t } = useTranslation()
	const getLanguage = i18n.language
	const switchLanguage = ({ lng }: { lng: string }) => {
		internationalization.changeLanguage(lng)
		localStorage.setItem('language', lng)
	}

	return (
		<>
			<div
				className={`relative flex cursor-pointer select-none items-center ${
					isOpen ? 'z-20' : ''
				} ${className}`}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<LanguageIcon className="fill-primary" />
				<span className="ml-2 text-lg font-medium text-primary">{t('ENG')}</span>
				<DropdownIcon className="fill-primary" />
				{isOpen && (
					<div className="absolute flex flex-col top-6 left-7">
						{languages.map(
							(language, index) =>
								getLanguage !== language.key && (
									<p
										className="mt-2 text-lg font-medium text-right text-primary"
										onClick={() => switchLanguage({ lng: language.key })}
										key={index}
									>
										{language.text}
									</p>
								)
						)}
					</div>
				)}
			</div>
			{isOpen && (
				<div
					className="fixed top-0 left-0 z-10 w-screen h-screen"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	)
}

export default LanguageSelect
