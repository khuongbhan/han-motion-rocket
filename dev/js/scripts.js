import { gsap } from "gsap";
import { lightsOnTL } from "./lightOn.js"


let mainTL = gsap.timeline();

mainTL.add(lightsOnTL);


