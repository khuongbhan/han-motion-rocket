import { gsap } from "gsap";

export let rocketAnimTL = gsap.timeline();

gsap.set("#rocket",{transformOrigin: "center"})
gsap.set("#rocket",{opacity: 0, scale: .3})
gsap.set("#rocket-window",{transformOrigin: "center",opacity: 0, scale: .3})
// gsap.set("#rocket-window",{transformOrigin: "bottom"})
gsap.set("#flame-out",{opacity: 0, scale: 0})
gsap.set("#flame-in",{opacity: 1, scale: 0})
gsap.set("#rocket-wing-left",{rotation: -45})
gsap.set("#rocket-wing-right",{rotation: 45, x:"+=3"})

// rocket shows up

rocketAnimTL.to("#rocket",{duration: 1, opacity: 1, scale: 1})
            .to("#rocket-window",{duration: .5, opacity: 1, scale: 1},"-=.2")
            .to("#rocket-wing-left",{rotation: 0, duration: .25})
            .to("#rocket-wing-right",{rotation: 0, x:0, duration: .25})
            // .to("#flame-out",{opacity: 1, scale: 1.5,x:"-=2",y:"-=2", duration: .2})
            // .to("#flame-in",{scale: 1.5,duration: .2,x:"-=2" })
