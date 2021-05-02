import { gsap } from "gsap";

export let lightsOnTL = gsap.timeline();

lightsOnTL.from("#hanging-lamp", {y: "-=500", duration: 1.1})
          .to("#lamp-bulb-off", {fill: "#F8D570", duration: .1},"+=.3")
          .to("#light-off-overlay", {opacity: 0, duration: .1},"+=.1")