import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import Lottie from 'react-lottie-player'

import { loading } from 'config/lotties'
import ModalWrapper from 'components/Wrapper/ModalWrapper'

interface Props {
	isOpen: boolean
}

const LoadingModal = (props: Props) => {
	const { isOpen } = props
	const { t } = useTranslation()

	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen}>
			<ModalWrapper>
				<div className="mt-16 flex flex-col items-center gap-16 sm:mt-10 sm:gap-10">
					<Lottie animationData={loading} loop play className="h-48 w-48" />
					<p className="text-xl text-primary sm:text-[15px]">
						{t('Loading, please wait a little…')}
					</p>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default LoadingModal
