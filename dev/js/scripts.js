import { gsap } from "gsap";
// import $ from "jquery";



// gsap.from("#red-ball", {duration: 1, x:-300, y:300});
// gsap.to("#red-ball", {duration: 1, x:200, y:-200, delay:1});
// gsap.to("#red-ball", {duration: 1, x:-600, y:600, delay:2});

// gsap.from("#yellow-ball", {duration: 1, x:-100, y:150});
// gsap.to("#yellow-ball", {duration: 3, x:400, y:-50, delay:1});
// gsap.to("#yellow-ball", {duration: 1, x:-10, y:350, delay:2});

// gsap.from("#orange-ball", {duration: 1, x:-600, y:200});
// gsap.to("#orange-ball", {duration: 1, x:200, y:-300, delay:1});
// gsap.to("#orange-ball", {duration: 1, x:-70, y:60, delay:2});




// let shapeTL = gsap.timeline();


// shapeTL.from("#red-ball", {duration: 1, x:-300, y:300},"moveShapes")
//     .to("#red-ball", {duration: 1, x:200, y:-200})
//     .to("#red-ball", {duration: 1, x:-600, y:600})

//     .from("#yellow-ball", {duration: 1, x:-100, y:150},"moveShapes")
//     .to("#yellow-ball", {duration: 3, x:400, y:-50})
//     .to("#yellow-ball", {duration: 1, x:-10, y:350})

//     .from("#orange-ball", {duration: 1, x:-600, y:200},"moveShapes")
//     .to("#orange-ball", {duration: 1, x:200, y:-300})
//     .to("#orange-ball", {duration: 1, x:-70, y:60});




// let redTL = gsap.timeline();
// let orangeTL = gsap.timeline();
// let yellowTL = gsap.timeline();


// redTL.from("#red-ball", {duration: 1, x:-300, y:300})
//     .to("#red-ball", {duration: 1, x:200, y:-200})
//     .to("#red-ball", {duration: 1, x:-600, y:600});

// yellowTL.from("#yellow-ball", {duration: 1, x:-100, y:150},"-=5")
//     .to("#yellow-ball", {duration: 3, x:400, y:-50})
//     .to("#yellow-ball", {duration: 1, x:-10, y:350});

// orangeTL.from("#orange-ball", {duration: 1, x:-600, y:200})
//     .to("#orange-ball", {duration: 1, x:200, y:-300})
//     .to("#orange-ball", {duration: 1, x:-70, y:60});


let shapeTL = gsap.timeline({paused:true});

shapeTL.from("#orange-ball", {duration: 1, x:-600, y:200})
    // .to("#orange-ball", {duration: 1, x:200, y:-300})
    // .to("#orange-ball", {duration: 1, x:-70, y:60})

    // .from("#yellow-ball", {duration: 1, x:-100, y:150},"-=1.5")
    // .to("#yellow-ball", {duration: 3, x:400, y:-50})
    // .to("#yellow-ball", {duration: 1, x:-10, y:350})

    .from("#red-ball", {duration: 1, x:-300, y:300, backgroundColor:"#000"})
    .to("#red-ball", {duration: 1, x:200, y:-200})
    .to("#red-ball", {duration: 1, x:-600, y:600});

// $("#red-ball").on("click",function(){
//     shapeTL.play();
// })
