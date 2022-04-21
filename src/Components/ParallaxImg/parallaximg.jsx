import react from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import {Col} from 'react-bootstrap';
import './Parallaximg.css'
const ParallaxImg = (props) => {

let contentStyle={
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100%",
color: "#fff",
backgroundColor: "rgba(0, 0, 0, .2)",
WebkitFilter: "blur(0px) saturate(2)"
}


return (
  <ParallaxBanner
    layers={[{ image: props.imgsrc, amount: 0.9 }]} className='banner --background-image'
  >
    <Col style={contentStyle}>{props.children}</Col>
  </ParallaxBanner>
);
}

export default ParallaxImg;