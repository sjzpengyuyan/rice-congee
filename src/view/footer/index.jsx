import React from 'react'
import { Layout, Select, message } from 'antd'
import './footer.less'
const { Footer } = Layout
const { Option } = Select

function Bottom() {
	const list = [
		{
			title: '关于我们',
			children: [
				'企业文化',
				'行为准则',
				'大事记',
				'我们的产品',
				'联系我们',
			],
		},
		{ title: '新闻动态', children: ['公司新闻', '数据报告'] },
		{
			title: '企业社会责任',
			children: [
				'企业社会责任报告',
				'优质内容创造社会价值',
				'信息助力公益新思路',
				'可持续发展的经营与管理',
				'维护健康的网络生态平台',
			],
		},
		{ title: '加入我们', children: ['招聘官网'] },
	]

    function handleChange(e) {
        if (e === 'enUS') {
            message.error({
                // icon:
            })
        }
    }

	return (
		<Footer>
			<div className="footNav">
				<div className="logo">
					<div className="icon" />
					<div className="web-font">白粥科技</div>
				</div>
				<div>
					<div className="list">
						{list.map((item, index) => (
							<div className="title" key={index}>
								<div className="p">{item.title}</div>
								{item.children &&
									item.children.map((item, index) => (
										<div key={index} className="word">
											{item}
										</div>
									))}
							</div>
						))}
					</div>
				</div>
			</div>
			<footer>
				<Select
					defaultValue="zhCN"
					style={{ width: 120 }}
					onChange={handleChange}
				>
					<Option value="zhCN">中文</Option>
					<Option value="enUS">English</Option>
				</Select>
			</footer>
		</Footer>
	)
}

export default Bottom
