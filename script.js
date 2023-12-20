// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


  
function loader(){

    let a = 0;
    let loadValue = document.getElementById('loadvalue')

    setInterval(function(){
        
        
        if(a<100){
            a = a + Math.floor(Math.random()*15)
            loadValue.textContent = a + "%"
        }
        
        else{
            a = 100
            loadValue.textContent = a + "%"
        }

    },60)    

}
    

let cursor = document.getElementById("cursor")

document.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x +55+ 'px'
    cursor.style.top  = dets.y + 'px'
})

let img1 = document.getElementsByClassName('img')
let crsrImg = document.getElementById('crsr-Img')

// for(let i = 0 ; i < elem.length ; i++){

    
//     img1[i].addEventListener('mousemove',(d)=>{
//         crsrImg.style.top = d.y + 'px'
//         crsrImg.style.left = d.x + 'px'
//     })
    
    
//     img1[i].addEventListener('mouseenter',()=>{
//         crsrImg.style.opacity = 1
//         cursor.style.opacity = 0
        
//     })
    
//     img1[i].addEventListener('mouseleave',()=>{
//         crsrImg.style.opacity = 0
//         cursor.style.opacity = 1
//     })
    
// }

let li = document.querySelectorAll('#header .navbar ul li a,#about-us .img,#page3 #cards-container .card,#food-card1,#food-card-btn,#page5 .tilted-img img,#page6 .gallery-card')

li.forEach((a) => {
    
    
    a.addEventListener('mouseenter',function(){
        cursor.style.width  = "80px"
        cursor.style.height  = "80px"
        cursor.style.border  = '2px solid #fff'
        // cursor.style.outline  = '#ffff solid 2px'
        cursor.style.backgroundColor  = 'transparent'
        cursor.style.boxShadow  = '0px 0px 120px 40px #96c11e7a'
        
    })   
    
    a.addEventListener('mouseleave',function(){
        cursor.style.width  = "25px"
        cursor.style.height  = "25px"
        cursor.style.border  = 'none'
        cursor.style.backgroundColor  = '#95C11E'
        cursor.style.boxShadow  = '0px 0px 120px 90px #96c11e7a'
    })   
    

})


let foodImg = document.getElementById("food-card1-img");
let count = 0;

setInterval(() => {
    

    // ++count
    
    // if(count == 3){
    //     count = 0
    // }
    
    // console.log(count)
    
    

    if(count == 0){
        foodImg.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 1
    }
    
    else if(count == 1){
        foodImg.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 2
    }

    else if(count == 2){
        foodImg.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 0
    }


}, 2000);


let tl = gsap.timeline(2)


tl.to("#loader h1",{
    duration : .5,
    onStart : loader() 
})


tl.to("#loader",{
    top : "-100vh",
    duration : 1.5,
    delay : .8
})


gsap.to("#header",{
    backgroundColor : 'black',
    scrollTrigger : {
        trigger : '#header',
        scroller : 'body',
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

tl.from(".logo",{
    x : -200,
    duration : .5,
    opacity : 0
})

tl.from(".navbar ul li",{
    y : -200,
    duration : .6,
    opacity : 0,
    stagger : .3
})

tl.from("#page1 h1,#page1 h2,#page1 p,#page1 .scroll",{
    y : 600,
    duration : .66,
    opacity : 0,
    stagger : .4
})

tl.to(".scroll",{
    y : 100,
    duration : 1,
    repeat : -1,
    yoyo : true

})

gsap.to("#main",{
    backgroundColor : "rgba(0,0,0,0.975)",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : 'top -30%',
        end : 'top -80%',
        scrub : 2
    }    
})

gsap.from('#about-us', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : .4,
    scrollTrigger : {
    trigger : '#about-us',
    scroller : 'body',
    start : "top 160%",
    end : "top 130%",
    scrub : 3
    }
})

gsap.from('#cards-container', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
    trigger : '#cards-container',
    scroller : 'body',
    start : "top 160%",
    end : "top 140%",
    scrub : 3
    }
})



gsap.from('#green-div', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
    trigger : '#green-div',
    scroller : 'body',
    // markers : true,
    start : "top 160%",
    end : "top 130%",
    scrub : 3
    }
})


gsap.from('#food-div', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
    trigger : '#food-div',
    scroller : 'body',
    // markers : true,
    start : "top 160%",
    end : "top 130%",
    scrub : 3
    }
})


gsap.from('#tilted', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
    trigger : '#tilted',
    scroller : 'body',
    // markers : true,
    start : "top 160%",
    end : "top 130%",
    scrub : 3
    }
})


gsap.from('#para', {
    y : 600,
    duration : 2,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
    trigger : '#para',
    scroller : 'body',
    // markers : true,
    start : "top 180%",
    end : "top 170%",
    scrub : 3
    }
})

// gsap.from('#gallery', {
//     y : 600,
//     duration : 2,
//     opacity : 0,
//     stagger : 1,
//     scrollTrigger : {
//     trigger : '#gallery',
//     scroller : 'body',
//     // markers : true,
//     start : "top 160%",
//     end : "top 130%",
//     scrub : 3
//     }
// })



gsap.to('#z-text', {
    y : -150,
    duration : 2,
    opacity : 1,
    scrollTrigger : {
    trigger : '#z-text',
    scroller : 'body',
    // markers : true,
    start : "top 80%",
    end : "top 60%",
    scrub : 3
    }
})
