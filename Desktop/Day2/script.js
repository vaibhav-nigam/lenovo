gsap.to("#page1 .box1", {
    scale:0,
    delay:1,
    duration:3,
    borderRadius:"50%",
    //repeat:-1,

    
})

gsap.from("#page1 .words",{
    opacity:0,
    scale:1.5,
    delay:1,
    color:"white",
    backgroundColor: "black",
    y:-500,
    duration:3,
    scrollTrigger:{
        trigger:"#page1 .words",
        scroller:"body",
        //markers:true
    }

})


gsap.from(".page2 .box1", {
    scale:2,
    delay:1,
    duration:3,
    borderRadius:"50%",
    //repeat:-1,
    //yoyo:true,
    scrollTrigger:{
        trigger: ".page2 .box1",
        scroller:"body",
        start:"top 60%",
        end:"top 7%",
        scrub:4
        //start:"top 30%",
        //markers: true
        }

})
gsap.from(".page2 .words",{
    opacity:0,
    scale:1.5,
    delay:1,
    color:"white",
    backgroundColor: "black",
    x:-500,
    duration:3,
    scrollTrigger:{
        trigger:".page2 .words",
        scroller: "body"
    }

})


gsap.from(".page3 .words",{
    opacity:0,
    scale:1.5,
    delay:1,
    color:"white",
    backgroundColor: "black",
    x:500,
    duration:3,
    scrollTrigger:{
        trigger:".page3 .words",
        scroller: "body"
        //markers:true
    }

})

gsap.to(".page3 .box1", {
    scale:0,
    delay:1,
    duration:3,
    borderRadius:"50%",
    //repeat:-1,
    scrollTrigger:{
        trigger: ".page3 .box1",
        scroller: "body",
    }
})

gsap.to(".last .thanks", {
    transform:"translateX(-140%)",
    scrollTrigger:{
        trigger:".last",
        scroller:"body",
        start: "top 0%",
        end:"top -200%",
        pin:true,
        scrub:3
    }
})