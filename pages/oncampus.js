import { Fragment } from "react/cjs/react.production.min";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import * as imgs from "../public";
import rename from "../helper_functions/babel_img_rename";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
let college_reunion_data = [
  "/EEE_AL.png",
  "/ITAlm.png",
  "/ITECE.png",
  "/CVR_AL.png",
  "/CSE_AL.png",
];
export default function onCampus() {
return (
<Fragment>
      <div className="text-5xl font-extrabold  text-center  px-5 py-10">
          On-Campus Meets
      </div>
      <Carousel showArrows={true} useKeyboardArrows={true} autoPlay={true} autoFocus={true}>

{college_reunion_data.map((e) => {
return (
    <div>
    
<img src={e}/>
    </div>
);
})}

      </Carousel>
</Fragment>
);
}