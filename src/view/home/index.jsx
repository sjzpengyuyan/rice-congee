import React, { useRef, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Bottom from "../footer";
import Swiper from "../swiper";
import "./home.less";
const { Header, Content } = Layout;
function Home() {
  const headerRef = useRef();
  const [height, setHeight] = useState(0);
  const headeBtn = [
    { text: "关于我们", path: "/home" },
    { text: "我们的产品", path: "/products" },
    { text: "新闻动态", path: "/news" },
    { text: "企业社会责任", path: "/corporate" },
    { text: "加入我们", path: "/jion" },
  ];
  useEffect(() => {
	setHeight(headerRef.current.clientHeight)
  }, []);
  return (
    <Layout className="layout">
      <div ref={headerRef}>
        <Header>
          <div className="logo">
            <div className="icon" />
            <div className="web-font">白粥科技</div>
          </div>
          <Menu theme="dark" mode="horizontal">
            {headeBtn.map((item, index) => (
              <Menu.Item key={index}>{item.text}</Menu.Item>
            ))}
          </Menu>
        </Header>
      </div>
      <Content>
        <Swiper height={height} />
      </Content>
      <Bottom />
    </Layout>
  );
}

export default Home;
