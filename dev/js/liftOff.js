import { gsap } from "gsap";

export let liftOffTL = gsap.timeline();

gsap.set("#triangle-fume",{opacity: 0, scale: 0, transformOrigin: "center top"})

liftOffTL.to("#rocket",{duration:0.15, rotation:-10,ease:"none"})
.to("#rocket",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
.to("#rocket",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
// .to("#triangle-fume",{duration:0.15, scale: 1, opacity: 1,ease:"none", onComplete:controlFlames},'+=.15')
.from("#bottom-fume",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
.from("#top-fume",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
.to("#rocket",{duration:5, y:"-=800", ease: "power3.in"},"upAndAway")
.to("#flame-out",{opacity: 1, scale: 1.5,x:"-=2",y:"-=2", duration: .1},"upAndAway")
.to("#flame-in",{scale: 1.5,duration: .1,x:"-=2" },"upAndAway")
// .to("#wall",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
// .to("#front",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
// .to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
// .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');

export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#flame-in",{duration:0.25, scaleY:.25,yoyo:true},"flames")
.to("#flame-out",{duration:0.15, scaleY:.15,yoyo:true},"flames")
// .to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
// .to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}