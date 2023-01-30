import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'

import ModalWrapper from 'components/Wrapper/ModalWrapper'

interface Props {
	isOpen: boolean
	closeModal: () => void
}

const Disclaimer = (props: Props) => {
	const { isOpen, closeModal } = props
	const { t } = useTranslation()

	const handleClick = () => {
		const date = new Date()
		localStorage.setItem('today', date.toDateString())
		closeModal()
	}

	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen} onRequestClose={closeModal}>
			<ModalWrapper>
				<h1 className="modal-header">{t('Disclaimer')}</h1>
				<p className="mt-12 text-xl text-primary sm:text-sm">
					<b>{t('Quota is not an investment product.')}</b>
					<br />
					<br />
					{t(
						'It is not intended in its design or distribution to be utilized as a form of investment, speculation, or a financial product. No communications from Quota Network to users constitute financial advice, a solicitation for investment, or a guarantee of a financial return. Please conduct your own due diligence and research before participating in the Quota Network.'
					)}
				</p>
				<div className="mt-12 flex flex-col items-center justify-center sm:mt-8">
					<button className="btn mt-4" onClick={closeModal}>
						{t('Accept')}
					</button>
					<div
						className="mt-6 cursor-pointer text-[15px] text-gray-5 underline"
						onClick={handleClick}
					>
						{t("Don't show for today")}
					</div>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default Disclaimer
