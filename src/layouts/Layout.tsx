import Helmet from 'react-helmet'
import Footer from './Footer'

import Header from './Header'

interface Props {
	children?: React.ReactNode
	title: string
}

const Layout = (props: Props) => {
	const { children, title } = props

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div className="relative flex flex-col overflow-x-hidden bg-background/80 bg-cover">
				<Header />
				<main className="relative flex w-full flex-col">{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
