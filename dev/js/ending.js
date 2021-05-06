import { gsap } from "gsap";

gsap.set("#window-star-6",{transformOrigin: "center"})

export let endingTL = gsap.timeline();
endingTL.to("#moon",{duration:2,alpha:0, scale:0.25,y:"-=900", x:"+=400",ease:"power2.in"},"moonOut")
.to("#rocket",{duration:2,alpha:0, scale:0.25,y:"-=900", x:"+=400",ease:"power2.in"},"moonOut")
.fromTo("#window-star-6",{alpha:0, display:"none"},{duration:.5,alpha:1, display:"block"},"moonOut1")
.to("#window-star-6",{duration:1,rotation:300,scale:240,y:"+=400"},"moonOut2")
.to(".room",{duration:1,y:"-=1024", ease: "power4.in"},"moonOut2")
.to("#pink-vase-leaf1", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#pink-vase-leaf2", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#pink-vase-leaf3", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#pink-vase-leaf4", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#pink-vase-leaf5", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#pink-vase-leaf6", {y:"-=3", rotation: 0, duration:.1},"moonOut2")
.to("#window-star-6",{duration:3,scale:1,y:"-=400"},"moonOut3")


.to("#computer-light-on", {fill:"#BCBCBC",duration: .5},"moonOut3")
.to("#bottom-fume",{duration:.5, y:"+=150", scale:0, alpha:0, ease: "power3.in"},'moonOut4')
.to("#top-fume",{duration:.5, y:"+=150", scale:0, alpha:0, ease: "power3.in"},'moonOut4')
.to("#computer-screen-off", {fill:"#201530",duration: 1},"moonOut5")
.to("#window-star-6",{duration:.5,alpha:0},"moonOut5")

.to("#lamp-bulb-off", {fill: "#C6C6C6", duration: .1},"moonOut6")
.to("#light-off-overlay", {opacity: 1, duration: .1},"moonOut7")
.to("#hanging-lamp", {y: "-=400", duration: 1,ease: "power3.in"},"+=1")