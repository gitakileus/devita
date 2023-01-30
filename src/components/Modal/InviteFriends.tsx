import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'

import ModalWrapper from 'components/Wrapper/ModalWrapper'
import ContentWrapper from 'components/Wrapper/ContentWrapper'
import { ReactComponent as CloseIcon } from '@material-icons/svg/svg/close/outline.svg'
import { toast } from 'react-toastify'

interface CopyFormProps {
	label: string
	value: string
	text: string
}

const CopyForm = (props: CopyFormProps) => {
	const { label, value, text } = props
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const { t } = useTranslation()

	const handleCopy = () => {
		navigator.clipboard.writeText(value)
		setIsCopied(true)
		toast.success('Successfully copied to clipboard')
	}

	return (
		<div>
			<p className="modal-body-2 font-medium sm:text-xs">{label}</p>
			<ContentWrapper className="mt-3 px-6 py-4 sm:mt-1.5 sm:rounded-md sm:px-3 sm:py-2">
				<div className="modal-body-1 flex items-center justify-between sm:text-xs">
					<p>{value.length > 33 ? `${value.slice(0, 33)}...` : value}</p>
					<p
						className={`cursor-pointer ${isCopied ? 'text-primary' : 'text-orange'}`}
						onClick={handleCopy}
					>
						{isCopied ? t('Copied') : t(text)}
					</p>
				</div>
			</ContentWrapper>
		</div>
	)
}

interface Props {
	referralId: string | undefined
	isOpen: boolean
	closeModal: () => void
}

const InviteFriendsModal = (props: Props) => {
	const { isOpen, closeModal, referralId } = props
	const { t } = useTranslation()

	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen} onRequestClose={closeModal}>
			<ModalWrapper>
				<CloseIcon
					className="absolute top-8 right-6 h-8 w-8 cursor-pointer fill-primary sm:top-3 sm:right-3 sm:h-6 sm:w-6"
					onClick={closeModal}
				/>
				<h1 className="modal-header sm:text-center sm:text-xl">Invite Friends</h1>
				<p className="modal-body-1 mt-6 font-medium sm:text-center sm:text-base">
					{t('Invite your friends to earn more rewards!')}
				</p>
				<p className="modal-body-1 mt-2.5 sm:text-center sm:text-xs">
					{t('Earn up to 50% more rewards for leveling up your NFTs by inviting more friends!')}
				</p>
				<div className="mt-10 grid gap-10 sm:gap-5">
					<CopyForm label="Your Referral ID" value={referralId ?? '-'} text={t('Copy ID')} />
					<CopyForm
						label={t('Referral Link')}
						value={`https://quota.finance/nft?referralId=${referralId}`}
						text="Copy Link"
					/>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default InviteFriendsModal
