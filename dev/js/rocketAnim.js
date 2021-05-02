import { gsap } from "gsap";

export let rocketAnimTL = gsap.timeline();

gsap.set("#rocket",{transformOrigin: "center"})
gsap.set("#rocket",{opacity: 0, scale: .3})
gsap.set("#rocket-window",{opacity: 0, scale: .3})
// gsap.set("#rocket-window",{transformOrigin: "bottom"})
gsap.set("#rocket-flame",{display: "none"})
gsap.set("#rocket-wing-left",{rotation: -45})
gsap.set("#rocket-wing-right",{rotation: 45, x:"+=3"})


rocketAnimTL.to("#rocket",{duration: 1, opacity: 1, scale: 1})
            .to("#rocket-window",{duration: .5, opacity: 1, scale: 1},"-=.2")
            .to("#rocket-wing-left",{rotation: 0})
            .to("#rocket-wing-right",{rotation: 0, x:0})