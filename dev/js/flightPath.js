import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();

flightPathTL.to("#rocket",{duration:0.15, rotation:-10,ease:"none"})
.to("#rocket",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
.to("#rocket",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
.to("#rocket", {
    duration: 13.9,
    motionPath: {
        path: "#flight-path",
        align:"#flight-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease: "none",
    scale:1
},"upAndAway")

// .to("#rocket",{duration:5, y:"-=800",scale: .5, ease: "power3.in"},"upAndAway")

.from("#bottom-fume",{duration:.6, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
.from("#top-fume",{duration:.75, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
.to("#flame-out",{opacity: 1, scale: 1.5,x:"-=2",y:"-=2", duration: .2},"upAndAway")
.to("#flame-in",{scale: 1.5,duration: .2,x:"-=2" },"upAndAway")
.to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
.to(".room",{duration:4,y:"+=1024", ease: "power3.in"},'upAndAway')
// .to(".window-elements",{duration:7,scale: 10, ease: "power3.in"},'upAndAway');
// .to("#flight-path",{duration:6,y:"+=1024", ease: "power3.in"},'upAndAway');
// .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');

export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#flame-in",{duration:0.25, scaleY:1.25,yoyo:true,repeat:-1},"flames")
.to("#flame-out",{duration:0.15, scaleY:1.5,yoyo:true,repeat:-1},"flames")

function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}

