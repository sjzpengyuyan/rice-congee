import React from 'react'
import { Layout, Menu } from 'antd'
import Bottom from '../footer'
import './home.less'
const { Header, Content } = Layout
function Home() {
	const headeBtn = [
		{ text: '关于我们', path: '/home' },
		{ text: '我们的产品', path: '/products' },
		{ text: '新闻动态', path: '/news' },
		{ text: '企业社会责任', path: '/corporate' },
		{ text: '加入我们', path: '/jion' },
	]
	return (
		<Layout className="layout">
			<Header>
				<div className="logo">
                    <div className='icon'/>
					<div className='web-font'>白粥科技</div>
				</div>
				<Menu theme="dark" mode="horizontal">
					{headeBtn.map((item, index) => (
						<Menu.Item key={index}>{item.text}</Menu.Item>
					))}
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<div className="site-layout-content">Content</div>
			</Content>
            <Bottom/>
		</Layout>
	)
}

export default Home
