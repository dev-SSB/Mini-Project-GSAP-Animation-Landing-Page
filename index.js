gsap.from("#nav h3", {
    y:-50,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.3
});

let t1 = gsap.timeline();

t1.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.4
});

t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.8,
    stagger:0.6
})

gsap.from("#footer h3", {
    y:50,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.3
});
