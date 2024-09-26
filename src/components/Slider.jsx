import Carousel from "react-bootstrap/Carousel";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SavingsIcon from '@mui/icons-material/Savings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';



import p1 from "./images/p1.jpeg";
import p2 from "./images/p2.jpeg";
import p3 from "./images/p3.jpeg";
function Slider() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className="Carou">
        <Carousel>
          <Carousel.Item>
            <div className="img">
              
              <img src={p1} alt="first" />
            </div>
            {/* <img src={p1}  alt ="first" /> */}
            <Carousel.Caption>
              {/* <h1>First</h1> */}
              <h2> Houses shield You from harsh weather conditions, providing a safe and comfortable environment for you <HealthAndSafetyIcon style={{color:'black', height:'70px', width:'40px'}}/>.</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img">
              <img src={p2} alt="Second" />
            </div>
            <Carousel.Caption>
              <h2>They are places where we form strong emotional bonds with family and loved ones <FamilyRestroomIcon style={{color:'black', height:'70px', width:'40px'}}/></h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img">
              <img src={p3} alt="Third" />
            </div>

            <Carousel.Caption>
              <h2>Owning a home can provide financial stability and security, as it is often a significant asset <SavingsIcon style={{color:'black', height:'70px', width:'40px'}}/>.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
