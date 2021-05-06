import { gsap } from "gsap";
import {flamesTL} from "./flightPath"


export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:3, x:"-=100", y:"-=300", rotation:"-=200",scale:2},"flames")
            .to("#flame-out",{duration:1, scaleY:0, onStart:stopFlames},"flames")
            .to("#flame-in",{duration:1, scaleY:0},"flames")


function stopFlames(){
    // console.log("stop");
    flamesTL.kill();
}