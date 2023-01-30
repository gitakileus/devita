import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Router from 'routes'
import 'styles/app.css'

const App = () => {
	const { i18n } = useTranslation()

	useEffect(() => {
		if (i18n.language === 'ko') {
			document.getElementsByTagName('html')[0].className = 'korean-class'
		} else {
			document.getElementsByTagName('html')[0].className = 'english-class'
		}
	}, [i18n.language])

	return (
		<>
				<div className="App">
					<Router />
				</div>
			<ToastContainer autoClose={1000} hideProgressBar />
		</>
	)
}

export default App
