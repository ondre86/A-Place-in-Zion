// REGISTER GSAP
gsap.registerPlugin(ScrollTrigger,CustomEase);

// QUERY SHORTCUT
function $(element){
    return document.querySelectorAll(element);
}

// IF REDUCED MOTION
let isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
// IF IS DARK
let isDark = window.matchMedia(`(prefers-color-scheme: dark)`) === true || window.matchMedia(`(prefers-color-scheme: dark)`).matches === true;
// IF MOBILE
let isMobile = window.matchMedia(`(max-width: 1024px)`) === true || window.matchMedia(`(max-width: 1024px)`).matches === true;
// IF TOUCH
let menuOpenTapCount = 0
if(is_touch_enabled()){
    // $(".nav-extra")[0].setAttribute("onclick", "return false")
    $(".nav-extra")[1].addEventListener("touchstart", (e)=>{
        $(".nav-dropdown")[0].classList.add("active");
        $(".nel")[1].children[0].classList.add("rotated");
        window.addEventListener("touchstart", closeNav1)
    })
}
else{
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
