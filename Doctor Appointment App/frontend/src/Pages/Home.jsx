
import Carousel from 'react-bootstrap/Carousel';
import hos1 from "../Images/hos1.webp"
import hos2 from "../Images/hos2.jpeg"
import hos3 from "../Images/hos3.jpeg"

const Home=()=>{
    return(
        <>
        <div>
        <Carousel>
      <Carousel.Item>
        <img src={hos1}  style={{height:"512px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={hos2}  style={{height:"512px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={hos3}  style={{height:"512px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </>
    )
}
export default Home