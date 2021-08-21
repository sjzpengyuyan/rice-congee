import React from 'react'
import { Layout, Button } from 'antd'
import './home.less'
const { Header, Footer, Content } = Layout;
function Home() {
	return (
		<div>
			<Layout>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	)
}

export default Home
