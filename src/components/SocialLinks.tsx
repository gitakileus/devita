import { useTranslation } from 'react-i18next'

import { ReactComponent as TwitterIcon } from 'icons/twitter.svg'
import { ReactComponent as TelegramIcon } from 'icons/telegram.svg'
import { ReactComponent as MediumIcon } from 'icons/medium.svg'
import { ReactComponent as GitHubIcon } from 'icons/github.svg'
import { ReactComponent as GitbookIcon } from 'icons/gitbook.svg'
import { ReactComponent as DiscordIcon } from 'icons/discord.svg'

const SocialLinks = () => {
	const { t } = useTranslation()

	return (
		<div className="social-links">
			<p className="text-[11px] font-medium uppercase text-primary">
				{t('Get in touch')}
			</p>
			<div className="mt-1 flex items-center">
				<a
					href="https://twitter.com/QuotaNetwork"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<TwitterIcon width={20} height={16} />
				</a>
				<a
					href="https://t.me/quotanetofficial"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<TelegramIcon width={18} height={15} />
				</a>
				<a
					href="https://quotanetwork.medium.com"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<MediumIcon width={16} height={12} />
				</a>
				<a
					href="https://github.com/quotafinance/quota-core"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<GitHubIcon width={17} height={17} />
				</a>
				<a
					href="https://quotanetwork.gitbook.io"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<GitbookIcon width={20} height={15} />
				</a>
				<a
					href="https://discord.gg/fBypsGj5b6"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center"
				>
					<DiscordIcon width={20} height={20} />
				</a>
			</div>
		</div>
	)
}

export default SocialLinks
