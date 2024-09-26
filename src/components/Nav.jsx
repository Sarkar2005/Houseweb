import BungalowIcon from "@mui/icons-material/Bungalow";
import H1 from "./H1";
import Slider from "./Slider";

function Nav(params) {
  return (
    <>
      <nav className="Navbar">
        <div className="Navberleft">
          <a href=" " className="logo">
            <BungalowIcon /> Home
          </a>
        </div>
        <div className="mid">
          <ul className="navlink">
            <li>
              <a href="/" style={{ color: "black" }}>
                {" "}
                House{" "}
              </a>
            </li>
            <li>
              <a href="/" style={{ color: "black" }}>
                {" "}
                About us
              </a>
            </li>
            <li>
              <a href="/" style={{ color: "black" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="slide">
        <Slider />
      </div>

      <div>
      <H1 />
      </div>
      
    </>
  );
}

export default Nav;
