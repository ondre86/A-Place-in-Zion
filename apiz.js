gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,CustomEase);

function $(element){
    return document.querySelectorAll(element);
}

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
const isDark = window.matchMedia(`(prefers-color-scheme: dark)`) === true || window.matchMedia(`(prefers-color-scheme: true)`).matches === true;
const isMobile = window.matchMedia(`(max-width: 1024px)`) === true || window.matchMedia(`(max-width: 1024px)`).matches === true;

// IF TOUCH
let menuOpenTapCount = 0
if(is_touch_enabled()){
    $(".nav-extra")[1].addEventListener("touchstart", (e)=>{
        $(".nav-dropdown")[0].classList.add("active");
        $(".nel")[1].children[0].classList.add("rotated");
        window.addEventListener("touchstart", closeNav1)
    })
}

function closeNav1(e) {
    e.preventDefault();
    menuOpenTapCount++;
    if(menuOpenTapCount == 2 && (String(e.target) != String($(".nel")[0]) || String(e.target) != String($(".nel")[1]))){
        $(".nav-dropdown")[0].classList.remove("active");
        $(".nel")[1].children[0].classList.remove("rotated"); 
        menuOpenTapCount = 0 
        window.removeEventListener("touchstart", closeNav1)
    }
}
function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) || 
           ( navigator.msMaxTouchPoints > 0 );
}



// LINK FOCUS BEHAVIOUR
document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
      return;
    }

    const target = event.target;
    const isButton = target.nodeName === 'BUTTON';
    const isA = target.nodeName === 'A';

    if (!isButton || !isA) {
      return;
    }

    event.preventDefault();
});

// REUSABLE CARD OBJECT
let card = {
    img: `.card ${$(".card")[0].children[0].localName}`,
    text: `.${$(".card")[0].children[1].classList.value}`,
    button: `.${$(".card")[0].children[2].classList.value}`
}

// GSAP
document.addEventListener("DOMContentLoaded", (event) => {
    // ON LOAD DIALOG
    // setTimeout(openRSVPDialog, 1500);

    let tl = gsap.timeline();

    // HERO INTRO ANIMATION
    // if(isReduced){
    //     tl.set("section", {visibility: "visible"})
    //     tl.from(".wave:not(.home-wave)", {autoAlpha: 0, duration: .1})
    //     tl.from(".home-hero-text-holster h1 span", {autoAlpha:0, duration: .75, stagger: .5, delay: 0.15});
    //     tl.from(".hero-anim", {opacautoAlphaity:0, duration: .75, stagger: .15});
    //     tl.from(".scroll-icon", {autoAlpha:0, duration:1});
    // }
    // else{
    //     // tl.from("section", {autoAlpha: 0})
    //     tl.set("section", {visibility: "visible"})
    //     tl.from(".wave:not(.home-wave)", {autoAlpha: 0, duration: .1})
    //     tl.from(".home-hero-text-holster h1 span", {x:-100, autoAlpha:0, duration: .75, stagger: .5, delay: 0.15});
    //     tl.from(".hero-anim", {autoAlpha:0, duration: .75, stagger: .15});
    //     tl.from(".scroll-icon", {autoAlpha:0, duration:1});
    // }
});

// SCROLL TRIGGER ANIMATIONS
// PLANE
    if(isReduced){
        gsap.set("#plane", {transformOrigin: "50% 40%", scaleX: .75, scaleY: .75});
        gsap.to(".plane", {
            ease: "power1.inOut",
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.55,0.45],
                start: 1,
                end: 1
            },
            rotate: "30deg"
        })

    }
    else{
        if(isMobile){
            $(".path")[0].children[0].setAttribute("viewBox", "0 0 702.549003 1900")
            $(".path")[0].children[0].setAttribute("height", "1900px")
            gsap.set("#plane", {transformOrigin: "50% 40%", scaleX: .75, scaleY: .75});
            gsap.to(".plane", {
                ease: "power1.inOut",
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.55,0.45],
                    autoRotate: true,
                },
                scrollTrigger: {
                    trigger: ".plane",
                    endTrigger: ".about",
                    start: "top-=75% bottom",
                    end: "bottom bottom",
                    scrub: 1,
                }
            })
        }
        else{
            gsap.set("#plane", {transformOrigin: "50% 40%", scaleX: .75, scaleY: .75});
            gsap.to(".plane", {
                ease: "power1.inOut",
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.55,0.45],
                    autoRotate: true,
                },
                scrollTrigger: {
                    trigger: ".plane",
                    endTrigger: ".about",
                    start: "top bottom+=25%",
                    end: "bottom bottom",
                    scrub: 1,
                }
            })
        }
    }

// PROGRAMS
    if(isReduced){}
    else{
    gsap.from(".program-holster .title-wrap h2 .headline", {
        scrollTrigger: {
            trigger: ".program-holster .title-wrap h2 .headline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })
    gsap.from(".program-holster .title-wrap .subline", {
        scrollTrigger: {
            trigger: ".program-holster .title-wrap .subline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })

// CARD APPEAR
    gsap.from(".home-card", {
        scrollTrigger: {
            trigger: ".home-card",
            start: "top+=10% bottom",
            end: "bottom bottom+=20%",
            scrub: 1
        },
        y: 100,
        opacity: 0,
    })

// ABOUT FADES
    let tl2 = gsap.timeline({});
    tl2.from(".about-title:nth-of-type(1)", {
        scrollTrigger: {
            trigger: ".about-title:nth-of-type(1)",
            start: "bottom bottom",
            end: "+=8%",
            scrub: 1,
        },
        opacity: 0,
    })
    tl2.from(".about-title:nth-of-type(2)", {
        scrollTrigger: {
            trigger: ".about-title:nth-of-type(2)",
            start: "bottom bottom",
            end: "+=8%",
            scrub: 1,
        },
        opacity: 0,
    })
    tl2.from(".about-title:nth-of-type(3)", {
        scrollTrigger: {
            trigger: ".about-title:nth-of-type(3)",
            start: "bottom bottom",
            end: "+=8%",
            scrub: 1,
        },
        opacity: 0,
    })
    tl2.from(".content-holster.about-wrap .button1", {
        scrollTrigger: {
            trigger: ".content-holster.about-wrap .button1",
            start: "top+=10% bottom",
            end: "+=10%",
            scrub: 1,
        },
        opacity: 0,
        y: 100,
    })

// EVENTS
    tl2.from(".content-holster.event-holster .headline", {
        scrollTrigger: {
            trigger: ".content-holster.event-holster .headline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })
    tl2.from(".content-holster.event-holster .subline", {
        scrollTrigger: {
            trigger: ".content-holster.event-holster .subline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })
    if(isMobile){
        tl2.from(".event-wrap", {
            scrollTrigger: {
                trigger: ".event-wrap",
                start: "top bottom-=15%",
                end: "+=20%",
                scrub: 0,
            },
            y: 100,
            opacity: 0
        })
    }
    else{
        tl2.from(".event-wrap", {
            scrollTrigger: {
                trigger: ".event-wrap",
                start: "top bottom-=15%",
                end: "+=20%",
                scrub: 0,
            },
            y: 50,
            opacity: 0
        })
    }

// NEWS
    tl2.from(".news-holster .title-wrap .headline", {
        scrollTrigger: {
            trigger: ".news-holster .title-wrap .headline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })
    tl2.from(".news-holster .title-wrap .subline", {
        scrollTrigger: {
            trigger: ".news-holster .title-wrap .subline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0,
        duration: .5,
    })
    tl2.from("section.news:not(.news-page) .news-holster .news-wrap", {
        scrollTrigger: {
            trigger: ".news-wrap",
            start: "top+=10% bottom",
            end: "+=20%",
            scrub: 1
        },
        y: 100,
        opacity: 0
    })
    tl2.from(".content-holster.news-holster .button1", {
        scrollTrigger: {
            trigger: ".content-holster.news-holster .button1",
            start: "top+=10% bottom",
            end: "bottom bottom+=20%",
            scrub: 1,
        },
        opacity: 0,
        y: 50,
    })

// SPONSORS
    tl2.from(".sp-holster .title-wrap .headline", {
        scrollTrigger: {
            trigger: ".sp-holster .title-wrap .headline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0
    })
    tl2.from(".sp-holster .title-wrap .subline", {
        scrollTrigger: {
            trigger: ".sp-holster .title-wrap .subline",
            start: "bottom bottom-=10%",
            end: "+=10%",
            scrub: 1
        },
        opacity: 0
    })
    tl2.from(".sp", {
        scrollTrigger: {
            trigger: ".sp",
            start: "bottom bottom-=5%",
            end: "+=40%",
            scrub: .5
        },
        opacity: 0,
        stagger: "10px"
    })

// SUBSCRIBE
    if(isReduced){}
    else{
        gsap.from("#flag", {
            scrollTrigger: {
                trigger: ".subscribe",
                start: "bottom bottom",
                end: "+=25%",
                scrub: 1
            },
            transformOrigin: "bottom left",
            rotate: 360,
        })
    }
}


// EMAIL VALIDATION
let form = $(".ef1")[0];
let ef2 = $(".ef2")[0];
let formEmail = $("#email")[0];
// let aformEmail;
// try {
//     aformEmail = $("#a-email")[0];
// }
// catch (error){
//     // console.error("Not present on the page")
// }
let valid;


// KEEP VALIDATING EMAIL AFTER CLICK UNTIL VALID
formEmail.addEventListener("click", (e)=> {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailCheck = setInterval(() => {
        if (re.test(formEmail.value) && formEmail.value.length != 0){
            gsap.to("#email, #submit", {
                outline: "3px solid var(--grass-dark)",
                border: "2px solid var(--grass-dark)"
            })
            valid = true;
        }
        else{
            gsap.to("#email, #submit", {
                outline: "3px solid red",
                border: "2px solid red"
            })
            valid = false;
        }

        if (valid){
            clearInterval(emailCheck)
        }
    }, 1000);
})
formEmail.addEventListener("keyup", (e)=> {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailCheck = setInterval(() => {
        if (re.test(formEmail.value) && formEmail.value.length != 0){
            gsap.to("#email, #submit", {
                outline: "3px solid var(--grass-dark)",
                border: "2px solid var(--grass-dark)"
            })
            valid = true;
        }
        else{
            gsap.to("#email, #submit", {
                outline: "3px solid red",
                border: "2px solid red"
            })
            valid = false;
        }

        if (valid){
          clearInterval(emailCheck)
        }
    }, 1000);
})
// try {
//     aformEmail.addEventListener("click", (e)=> {
//         e.preventDefault();
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         let emailCheck = setInterval(() => {
//             console.log(valid)
//             if (re.test(aformEmail.value) && aformEmail.value.length != 0){
//                 gsap.to("#a-email, #a-submit", {
//                     outline: "3px solid var(--grass-dark)",
//                     border: "2px solid var(--grass-dark)"
//                 })
//                 valid = true;
//             }
//             else{
//                 gsap.to("#a-email, #a-submit", {
//                     outline: "3px solid red",
//                     border: "2px solid red"
//                 })
//                 valid = false;
//             }
    
//             if (valid){
//                 clearInterval(emailCheck)
//             }
//         }, 1000);
//     })
//     aformEmail.addEventListener("keyup", (e)=> {
//         e.preventDefault();
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         let emailCheck = setInterval(() => {
//             console.log(valid)
//             if (re.test(aformEmail.value) && aformEmail.value.length != 0){
//                 gsap.to("#a-email, #a-submit", {
//                     outline: "3px solid var(--grass-dark)",
//                     border: "2px solid var(--grass-dark)"
//                 })
//                 valid = true;
//             }
//             else{
//                 gsap.to("#a-email, #a-submit", {
//                     outline: "3px solid red",
//                     border: "2px solid red"
//                 })
//                 valid = false;
//             }
    
//             if (valid){
//               clearInterval(emailCheck)
//             }
//         }, 1000);
//     })
// } catch (error) {
//     console.error("No RSVP form on this page.")
// }

// SUBMITTING EMAIL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwHxmr0JC0GKU9wjrUc8qW3lvhdee2B01Y15wxojlupSwTlz98CgZLH73sBZKqZR6NG/exec'
const eForm = document.forms['email-form']
eForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formEmail.value)){
        let fv = formEmail.value
        formTL = gsap.timeline()
        .to('#email, #submit', {
            outline: "6px solid red",
            borderColor: "red",
            duration: .5
        })
        .to(formEmail, {
            value: "Not a valid email address",
            duration: 2
        })
        .to('#email, #submit', {
            outline: "3px solid red",
            duration: .5
        })
        .to(formEmail, {
            value: fv,
            duration: .2
        }, "<")
    }
    else {
        if ($("#form-color")[0].value == "" || !$("#form-color")[0].value){
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    
            formTL2 = gsap.timeline()
            .to('#email, #submit', {
                outline: "6px solid var(--grass-dark)",
                border: "2px solid var(--grass-dark)",
                duration: .5
            })
            .to(formEmail, {
                value: "Thank you!",
                duration: 5
            }, "<")
            .to('#email, #submit', {
                outline: "0px solid transparent",
                border: "2px solid var(--dark-mode-bg)",
                duration: 1
            })
            .to(formEmail, {
                value: "",
                duration: 1,
                onComplete: function() {
                    try {
                        rModalClose()
                    }
                    catch (error) {
                        // console.error("Modal does not exist on this page")
                    }
                }
            }, "<")
        }
    }
})
// try {
//     const aForm = document.forms['a-email-form']
//     aForm.addEventListener("submit", (e)=>{
//         e.preventDefault();
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (!re.test(aformEmail.value)){
//             formTL = gsap.timeline();
//             let afv = aformEmail.value
//             formTL.to('#a-email, #a-submit', {
//                 outline: "6px solid red",
//                 borderColor: "red",
//                 duration: .5
//             })
//             formTL.to(aformEmail, {
//                 value: "Not a valid email address",
//                 duration: 2
//             })
//             formTL.to('#a-email, #a-submit', {
//                 outline: "3px solid red",
//                 duration: .5
//             })
//             formTL.to(aformEmail, {
//                 value: afv,
//                 duration: .2
//             }, "<")
//         }
//         else {
//             fetch(scriptURL, { method: 'POST', body: new FormData(ef2)})
//             .then(response => console.log('Success!', response))
//             .catch(error => console.error('Error!', error.message))
//             let sa = new FormData(ef2)
//             let dv = [...sa.entries()]
//             console.log(dv)

//             aformTL2 = gsap.timeline();
//             let afv = aformEmail.value
//             aformTL2.to('#a-email, #a-submit', {
//                 outline: "6px solid var(--grass-dark)",
//                 border: "2px solid var(--grass-dark)",
//                 duration: .5
//             })
//             aformTL2.to(aformEmail, {
//                 value: "Thank you!",
//                 duration: 5
//             }, "<")
//             aformTL2.to('#a-email, #a-submit', {
//                 outline: "0px solid transparent",
//                 border: "2px solid var(--dark-mode-bg)",
//                 duration: 1
//             })
//             aformTL2.to(aformEmail, {
//                 value: "",
//                 duration: 1,
//                 onComplete: function() {
//                     try {
//                         rModalClose()
//                     }
//                     catch (error) {
//                         // console.error("Modal does not exist on this page")
//                     }
//                 }
//             }, "<")
//         }
//     })
// }
// catch (error){
//     console.error("No RSVP form on this page.")
// }

// RSVP FORM
// let rsvpDialog = {
    // dialog: $("#rsvp")[0],
    // button: $("#r-button")[0], 
    // modalClose: $("#rsvp .modal-wrap .x")[0],
    // name: $("#r-name")[0],
    // email: $("#r-email")[0],
    // reason: $("#r-reason")[0],
// }
// function openRSVPDialog(){
//     gsap.fromTo("#rsvp", {
//         scale: 0,
//         opacity: 0,
//         ease: "power2.out"
//     },
//     {
//         scale: 1,
//         opacity: 1,
//         duration: .5,
//         ease: "power2.out"
//     })
// }
// function rModalClose(){
//     gsap.to("#rsvp", {
//         opacity: 0,
//         scale: 0,
//         duration: .5,
//         ease: "power2.out"
//     })
// }
// rsvpDialog.button.addEventListener("click", openRSVPDialog)
// rsvpDialog.button.addEventListener("keydown", openRSVPDialog)
// rsvpDialog.modalClose.addEventListener("click", rModalClose)


// MOBILE MENU
let mobileMenu = {
    menu: $(".mm-holster")[0],
    button: $(".mobile-menu")[0],
    hamburgerTop: $(".hamburger-inner")[0],
    hamburgerMiddle: $(".hamburger-inner")[1],
    hamburgerBottom: $(".hamburger-inner")[2],
}
let mmTL = gsap.timeline();
let mobileMenuToggled = false;
let currentY;
let oldY;

function mmOpen(){
    mobileMenuToggled = true;
    oldY = window.scrollY;
    mmTL.to(mobileMenu.hamburgerTop,{
        y: 9,
    })
    mmTL.to(mobileMenu.hamburgerBottom,{
        y: -9
    }, "<<")
    mmTL.to(mobileMenu.menu,{
        display: "flex",  
        transform: "translate(0px, 70px)",
        opacity: 1
    }, "<")
    mmTL.to([mobileMenu.hamburgerBottom, mobileMenu.hamburgerTop], {
        rotate:45
    })
    mmTL.to([mobileMenu.hamburgerMiddle], {
        rotate:-45
    }, "<")
}
function mmClose(){
    mobileMenuToggled = false;
    mmTL.to([mobileMenu.hamburgerBottom, mobileMenu.hamburgerTop], {
        rotate: 0
    })
    mmTL.to([mobileMenu.hamburgerMiddle], {
        rotate: 0
    }, "<<")
    mmTL.to(mobileMenu.menu,{
        display: "none",
        transform: "translate(0px, calc(-100svh - 70px))",
        opacity: 0
    }, "<")
    mmTL.to(mobileMenu.hamburgerTop,{
        y: 0,
    })
    mmTL.to(mobileMenu.hamburgerBottom,{
        y: 0
    }, "<")
}

mobileMenu.button.addEventListener("click", (e)=>{
    if(mobileMenuToggled == false){
        mmOpen()
    }
    else{
        mmClose()
    }
})

// NAV HIDE/SHOW
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    if(mobileMenuToggled){
    }
    else{
        let currentScrollPos = window.scrollY;
        if (prevScrollpos < 0 || currentScrollPos < 0){
            gsap.to(".header",
                {
                    y:0,  
                    opacity: 1, 
                    duration: .1, 
                    ease: CustomEase.create("custom", "M0,0 C0.602,0 0.925,0.633 1,1 ")
                }
            )
        }
        else {
            if (prevScrollpos > currentScrollPos) {
                gsap.to(".header",
                    {
                        y:0,  
                        opacity: 1, 
                        duration: .1, 
                        ease: CustomEase.create("custom", "M0,0 C0.602,0 0.925,0.633 1,1 ")
                    }
                )
            } 
            else {
                gsap.to(".header",
                    {
                        y:-100,
                        opacity: 0, 
                        duration: .1, 
                        ease: CustomEase.create("custom", "M0,0 C0.602,0 0.925,0.633 1,1 ")
                    }
                )
            }
        }
        prevScrollpos = currentScrollPos;
    }
} 
