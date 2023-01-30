import React from 'react'
import Layout from 'layouts/Layout'

import Welcome from './sections/Welcome'
import Why from './sections/Why'
import Features from './sections/Features'
import Media from './sections/Media'
import NewsLetter from './sections/NewsLetter'

const Home = () => {
	return (
		<Layout title="Dashboard">
			<Welcome />
			<Why />
			<Features />
			<Media />
      <NewsLetter />
		</Layout>
	)
}

export default Home
