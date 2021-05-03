import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { lightsOnTL } from "./lightOn"
import { officeTL } from "./officeAnim"
import { rocketAnimTL } from "./rocketAnim"
import { flightPathTL } from "./flightPath"
// import { liftOffTL } from "./liftOff"
// import { flightPathTL } from "./flightPath"


gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({paused:true});

mainTL.add(lightsOnTL)
      .add(officeTL)
      .add(rocketAnimTL)
    //   .add(liftOffTL)
      .addLabel("marker")
      .add(flightPathTL);

      mainTL.play("marker");



// GSDevTools.create();