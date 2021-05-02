import { gsap } from "gsap";

export let officeTL = gsap.timeline();

gsap.set("#fan-wing",{transformOrigin: "center"})

gsap.set("#pink-vase-leaf1", {transformOrigin: "bottom"})
gsap.set("#pink-vase-leaf2", {transformOrigin: "bottom"})
gsap.set("#pink-vase-leaf3", {transformOrigin: "bottom"})
gsap.set("#pink-vase-leaf4", {transformOrigin: "bottom"})
gsap.set("#pink-vase-leaf5", {transformOrigin: "bottom"})
gsap.set("#pink-vase-leaf6", {transformOrigin: "bottom"})
gsap.set("#hanging-plant", {transformOrigin: "top"})

// fan rotating and leaves flying

officeTL.to("#fan-wing", {rotation: 1440, duration: 5},"plantsStart")
     .to("#pink-vase-leaf1", {y:"+=3", rotation: 10, duration:2, ease: "bounceOut"},"plantsStart")
     .to("#pink-vase-leaf1", {rotation: 5, duration:1.5, ease: "bounceOut"},"-=3")
     .to("#pink-vase-leaf2", {y:"+=3",rotation: 12, duration:1.5, ease: "bounceOut"},"-=4.7")
     .to("#pink-vase-leaf2", {rotation: 6, duration:1.5, ease: "bounceOut"},"-=3.2")
     .to("#pink-vase-leaf3", {y:"+=3",rotation: 15, duration:1, ease: "bounceOut"},"-=4.8")
     .to("#pink-vase-leaf3", {rotation: 8, duration:1.5, ease: "bounceOut"},"-=3.8")
     .to("#pink-vase-leaf4", {y:"+=3",rotation: 17, duration:1.3, ease: "bounceOut"},"-=4.6")
     .to("#pink-vase-leaf4", {rotation: 10, duration:1.4, ease: "bounceOut"},"-=3.3")
     .to("#pink-vase-leaf5", {y:"+=3",rotation: 8, duration:1.8, ease: "bounceOut"},"-=4")
     .to("#pink-vase-leaf5", {rotation: 2, duration:1, ease: "bounceOut"},"-=2.2")
     .to("#pink-vase-leaf6", {y:"+=3",rotation: 6, duration:1.5, ease: "bounceOut"},"-=3.8")
     .to("#pink-vase-leaf6", {rotation: 0, duration:1, ease: "bounceOut"},"-=2.3")

// hanging leaf flying

     .to("#hanging-plant", {rotation:-3, duration:1, ease: "bounceOut"}, "plantsStart")
     .to("#hanging-plant", {rotation:3, duration:1, ease: "bounceOut"}, "-=4")
     .to("#hanging-plant", {rotation:-1, duration:.7, ease: "bounceOut"}, "-=3")
     .to("#hanging-plant", {rotation:0, duration:.5, ease: "bounceOut"}, "-=2.3")

// desktop turning on 
      
     .to("#computer-light-on", {fill:"#6AC89E",duration: .5},"-=2")
     .to("#computer-screen-off", {fill:"#94CAD3",duration: .75},"-=1.5")
