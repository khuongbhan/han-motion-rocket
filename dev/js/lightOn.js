import { gsap } from "gsap";

export let lightsOnTL = gsap.timeline();

lightsOnTL.to("#lamp-bulb-off", {fill: "#F8D570", duration: .1},"+=1")
          .to("#light-off-overlay", {opacity: 0, duration: .1},"+=.1")