import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div>
            {" "}
            <h4>
              Contact Info <PhoneIcon />
            </h4>
            <p> Phone No: +91 899900345 & +91 9834500456 </p>
          </div>

          <br />
          <div>
          <div class="icon">
            <EmailIcon /> 
            <InstagramIcon />
            
            <TelegramIcon/> 
          </div>
          </div>
          <div>
            <br />
          </div>

          <br />

          <div>
            {" "}
            <h4>
              Parmanent Address <HomeIcon />
            </h4>
            <p> House3,building near fire station Noida, Delhi,Sector3</p>
          </div>

         
        </div>
      </footer>
    </>
  );
}

export default Footer;
