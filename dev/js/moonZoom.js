import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});


export let moonZoomInTL = gsap.timeline();
moonZoomInTL.fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:10, scale:4.5, y:"+=900", x:"-=400",ease:"power1.out"})