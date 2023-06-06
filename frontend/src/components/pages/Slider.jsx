import Carousel from 'react-bootstrap/Carousel';
import laptap from '../../assets/img/m5.gif';
import laptap1 from '../../assets/img/m3.gif';
import laptap2 from '../../assets/img/m6.gif';
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-thumbnail"
          src={laptap}   
          style={{height:'450px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100 img-thumbnail"
         src={laptap1}
         style={{height:'450px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100 img-thumbnail"
         src={laptap2} 
         style={{height:'450px',boxShadow:'10px 10px 15px 2px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;