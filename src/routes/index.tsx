import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="home">
					<Route index element={<Home />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
