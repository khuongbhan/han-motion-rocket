import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { lightsOnTL } from "./lightOn"
import { officeTL } from "./officeAnim"
import { rocketAnimTL } from "./rocketAnim"
import { flightPathTL } from "./flightPath"
import { moonZoomInTL } from "./moonZoom"
import { landingTL } from "./landing"
import { endingTL } from "./ending"



gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({repeat:1});

mainTL.add(lightsOnTL)
      .add(officeTL)
      .add(rocketAnimTL)
      // .add(liftOffTL)
      // .addLabel("marker")
      .add(flightPathTL,"zoomFlight")
      .add(moonZoomInTL,"zoomFlight")
      .add(landingTL)
      .add(endingTL)
      // mainTL.play("marker");



// GSDevTools.create();