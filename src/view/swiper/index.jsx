import React from "react";
import { Carousel } from "antd";
import "./swiper.less";
function Swiper(props) {
  console.log(props);
  const clientHeight = document.documentElement.clientHeight;
  const contentStyle = {
    height: clientHeight - props.height,
    color: "#fff",
    lineHeight: clientHeight - props.height + "px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default Swiper;
