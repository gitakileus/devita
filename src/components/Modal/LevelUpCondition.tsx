import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'

import ModalWrapper from 'components/Wrapper/ModalWrapper'

interface Props {
	isOpen: boolean
	closeModal: () => void
	onNext: () => void
}

const LevelUpConditionModal = (props: Props) => {
	const { isOpen, closeModal, onNext } = props
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const id = useId()
	const {t} = useTranslation()

	return (
		<Modal ariaHideApp={false} closeTimeoutMS={200} isOpen={isOpen} onRequestClose={closeModal}>
			<ModalWrapper>
				<h1 className="modal-header">{t('Level Up Conditions')}</h1>
				<p className="mt-12 text-xl text-primary sm:text-sm">
					{t('Information containing detailed level up conditions can be found on the landing page.')}
					(www.quota.network)
					<br />
					<br />
					{t('This level up tool is to simplify the process of meeting the staking requirements of the level up conditions. Please be aware that even if you click the “Level up NFT” button and meet the staking requirements for the level, your NFT will not level up until you meet the referral requirement for the next tier.')}
				</p>
				<div className="mt-24 flex flex-col items-center justify-center sm:mt-8">
					<label htmlFor={id} className="flex items-center gap-4 text-primary sm:gap-2 sm:text-xs">
						<input
							type="checkbox"
							id={id}
							className="h-6 w-6 accent-primary"
							checked={isChecked}
							onChange={() => setIsChecked((prev) => !prev)}
						/>
						{t('I understand')}
					</label>
					<button className="btn mt-4" onClick={onNext} disabled={!isChecked}>
						{t('Next')}
					</button>
				</div>
			</ModalWrapper>
		</Modal>
	)
}

export default LevelUpConditionModal
