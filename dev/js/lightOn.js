import { gsap } from "gsap";

export let lightsOnTL = gsap.timeline();

lightsOnTL.from("#hanging-lamp", {y: "-=400", duration: 1,ease: "elastic.out(.75, 0.75)"})
          .to("#lamp-bulb-off", {fill: "#F8D570", duration: .1},"+=.3")
          .to("#light-off-overlay", {opacity: 0, duration: .1},"+=.1")