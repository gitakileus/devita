import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import Lottie from 'react-lottie-player'

import { loading } from 'config/lotties'
import ModalWrapper from 'components/Wrapper/ModalWrapper'

interface Props {
	isOpen: boolean
}

const SignTransactionModal = (props: Props) => {
	const { isOpen } = props
	const { t } = useTranslation()
	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen}>
			<ModalWrapper>
				<div className="flex flex-col items-center gap-24 sm:gap-5">
					<h1 className="modal-header sm:text-xl">{t('Sign Transaction')}</h1>
					<Lottie animationData={loading} loop play className="h-48 w-48" />
					<p className="text-xl text-primary sm:text-[15px]">
						{t('Please sign transaction in your wallet.')}
					</p>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default SignTransactionModal
