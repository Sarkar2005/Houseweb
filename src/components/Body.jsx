import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slider from './Slider';
import Footer from './Footer';




function Body() {
  return (
    <>
      <title Flexbox></title>

      <div class="container2">
        <div class="box1">
          <div class="item11">
         
            <marquee>
                <h3>house1</h3>
            </marquee>
            <p>  3 Bds - 3 Ba - 1700 ft2 <br></br>
            <br />
         Green park house east facing
         <br />
        Baba Peer Choudhary Colony, Kapurthala, Punjab</p>
            <h4> price $3000</h4>
           <h4><a href="https://www.google.com/maps/place/31%C2%B022'30.0%22N+75%C2%B024'21.6%22E/@31.375093,75.406312,20z/data=!4m4!3m3!8m2!3d31.375!4d75.406?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">< LocationOnIcon style={{color:" rgb(115, 151, 152)"}}/></a></h4> 
            
          </div>

          <div class="item22">
          <marquee>
                <h3>house2</h3>
            </marquee>
            <div>
            <p>  2 Bds - 4 Ba - 1800 ft2 <br></br>
            <br />
            New house build with love

            Ajit Nagar, Kapurthala, Punjab
            
            </p>
            <br />
            <h4> price $4000</h4>
            
           <h4 ><a href="https://www.google.com/maps?ll=31.387,75.399&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=31%C2%B023%2713.2%22N+75%C2%B023%2756.4%22E+31.387000,+75.399000@31.387,75.399"><LocationOnIcon style={{color:" rgb(115, 151, 152)"}}/></a></h4> 
           </div>
          </div>
          <div class="item33">

          <marquee>
                <h3>house3</h3>
            </marquee>
            <p>  2 Bds - 4 Ba - 1800 ft2 <br></br>
            <br />
            Old House for sell


            Sheikhupur, Kapurthala, Punjab
            
            </p>
       <br />

       <br />
            <h4> price $8000</h4>
           <h4><a href="https://www.google.com/maps/place/31%C2%B021'18.0%22N+75%C2%B021'39.6%22E/@31.355,75.361,15z/data=!4m4!3m3!8m2!3d31.355!4d75.361?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"><LocationOnIcon style={{color:" rgb(115, 151, 152)"}}/></a></h4> 
          </div>
          <div class="item44">
          <marquee>
                <h3>house4</h3>
            </marquee>
            <p>  9 Bds - 9 Ba - 1800 ft2 <br></br>
            <br />
            Nirmal enclave Baba Deepeep Singh nagar gali no 6
            RCF Colony, Kapurthala, Punjab</p>
            <h4> price $4000</h4>

           <h4><a href="https://www.google.com/maps/place/31%C2%B018'57.6%22N+75%C2%B020'20.4%22E/@31.316,75.339,15z/data=!4m4!3m3!8m2!3d31.316!4d75.339?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"><LocationOnIcon  style={{color:" rgb(115, 151, 152)"}}/></a></h4> 
          </div>
        </div>
      
      </div>

      <Footer/>
      
    </>
  );
}

export default Body;