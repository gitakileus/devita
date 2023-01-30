import Modal from 'react-modal'
import { useTranslation } from 'react-i18next'

import ModalWrapper from 'components/Wrapper/ModalWrapper'

interface Props {
	isOpen: boolean
	closeModal: () => void
	onNext: () => void
}

const CongratulationsModal = (props: Props) => {
	const { isOpen, closeModal, onNext } = props
	const { t } = useTranslation()

	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen} onRequestClose={closeModal}>
			<ModalWrapper>
				<h1 className="modal-header text-center">{t('Congratulations')}!</h1>
				<p className="mt-12 text-xl text-primary sm:text-sm">
					{t('You have fulfilled the Staking requirement to level up to next tier')}!
					<br />
					<br />
					{t(
						'Please be reminded, if you have not met the Referral requirements yet, your NFT will not level up until the referral requirement has also been met.'
					)}
					<br />
					<br />
					{t(
						'If you have met all of the requirements, please be mindful that the level up update might take around 10 minutes. Please come back later and refresh the page.'
					)}
				</p>
				<div className="mt-24 flex flex-col items-center justify-center sm:mt-8">
					<button className="btn mt-4" onClick={onNext}>
						{t('Close')}
					</button>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default CongratulationsModal
