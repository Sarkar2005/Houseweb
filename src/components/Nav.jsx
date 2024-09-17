import BungalowIcon from '@mui/icons-material/Bungalow';
import H1 from './H1';


function Nav(params) {
    return(
        <>
        <nav className="Navbar">
            <div className="Navberleft">
           
                <a href=" " className="logo">
                 <BungalowIcon/> Home
                </a>
            </div>
            <div className="mid">
                <ul className="navlink" >
                <li > 

                    <a href="/"    style={{color:'black'}}> House  </a>
                </li>
                <li>
                    <a href="/" style={{color:'black'}}> About us</a>
                </li>
                <li>
                    <a href="/" style={{color:'black'}}>Contact</a>
                </li>
                </ul>
                
                
            </div>
           

        </nav>
       <H1/>

        </>
    )
}

export default Nav;