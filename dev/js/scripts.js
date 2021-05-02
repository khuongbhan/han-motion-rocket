import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { lightsOnTL } from "./lightOn"
import { officeTL } from "./officeAnim"
import { rocketAnimTL } from "./rocketAnim"

// import { plantsTL } from "./plants"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(lightsOnTL)
      .add(officeTL)
      .add(rocketAnimTL);



GSDevTools.create();