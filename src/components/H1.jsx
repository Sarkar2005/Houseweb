import Body from "./Body";
import img1 from "./images/h1.jpg";
import img2 from "./images/h2.jpg";
import img3 from "./images/h3.jpg";
import img4 from "./images/h4.jpg";



function H1(){
    return(
        <>
        <title Flexbox></title>

        <div class="container">
            <div class='box'>
            <div class='item1' ><img src={img1} alt=" jkj" ></img></div>

            <div class='item2'><img src={img2} alt=" jkj" ></img></div>
            <div class='item3'><img src={img3} alt=" jkj" ></img></div>
            <div class='item4'><img src={img4} alt=" jkj" ></img></div>

            </div>
        </div>
       <Body/>
        </>
    )
}

export default H1;