gsap.registerPlugin(ScrollTrigger,CustomEase);

function $(element){
    return document.querySelectorAll(element);
}

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
const isDark = window.matchMedia(`(prefers-color-scheme: dark)`) === true || window.matchMedia(`(prefers-color-scheme: dark)`).matches === true;
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

// DECLARATIONS
let home = /index/i;
let programs = /programs/i;
let about = /about/i;
let board = /board/i;
let finance = /finance/i;
let aep = /alzheimer/i;
let yea = /youth/i;
let events = /events/i;
let anchorList = [board, finance, aep, yea];
let cW = window.innerWidth;

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

// GSAP
document.addEventListener("DOMContentLoaded", () => {
    // PROGRAMS
    if (window.location.pathname.match(aep)){        
        if(isReduced){}
        else{
            heart = gsap.timeline({
                delay: 2,
                repeat: -1
            });
            heart.to("#heart", {
                scale: 1.08,
                duration:2,
            });
            heart.to("#heart", {
                scale: 1,
                duration:2,
            });
        }

        // CARD SHADOW
        if(isDark){
            gsap.fromTo(".story-grid:last-of-type", {
                boxShadow: "0px 0px 0px 0px rgba(255,255,255,0)",
            },{
                scrollTrigger: {
                    trigger: ".story-grid:last-of-type",
                    start: "top+=50% bottom",
                    end: "bottom bottom",
                    scrub: 1
                },
                boxShadow: "0px 2px 29.7px -2px rgba(255,255,255,.25)"
            })
        }
        else{
            gsap.from(".story-grid:last-of-type", {
                scrollTrigger: {
                    trigger: ".story-grid:last-of-type",
                    start: "top+=10% bottom",
                    end: "bottom bottom+=20%",
                    scrub: 1
                },
                boxShadow: "0px 20px 19.7px 0px rgba(0,0,0,0)",
            })
        }
    }
    if(window.location.pathname.match(yea)){
        let volunteerDialog = {
            dialog: $("#volunteer")[0],
            button: $("#volunteer-button")[0], 
            modalClose: $("#volunteer .modal-wrap .x")[0],
            name: $("#vol-name")[0],
            email: $("#vol-email")[0],
            reason: $("#vol-reason")[0],
        }
        function openVolunteerDialog(){
            gsap.fromTo("#volunteer", {
                scale: 0,
                opacity: 0,
                ease: "power2.out"
            },
            {
                scale: 1,
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            })
        }
        function volModalClose(){
            gsap.to("#volunteer", {
                opacity: 0,
                scale: 0,
                duration: .5,
                ease: "power2.out"
            })
        }
        volunteerDialog.button.addEventListener("click", openVolunteerDialog)
        volunteerDialog.button.addEventListener("keydown", (e)=>{
            if(e.key == "Enter"){
                gsap.fromTo("#volunteer", {
                    scale: 0,
                    opacity: 0,
                    ease: "power2.out"
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: .5,
                    ease: "power2.out"
                })
            }
        })
        volunteerDialog.modalClose.addEventListener("click", volModalClose)
        // NEEDS
        if(isReduced){}
        else{
            if(isMobile){
                gsap.to(".needs-holster .title-wrap", {
                    scrollTrigger: {
                        trigger: ".needs-holster .title-wrap",
                        start: "bottom bottom",
                        end: "+=10%",
                        scrub: 1
                    },
                    "--after-line-width": "100%"
                })
                gsap.to("#house path:last-of-type", {
                    scrollTrigger: {
                        trigger: "#house",
                        start: "bottom bottom",
                        end: "+=2%",
                        scrub: 1
                    },
                    transformOrigin: "center",
                    scale: 1.5
                })
            }
            else{
                gsap.to(".needs-holster .title-wrap", {
                    scrollTrigger: {
                        trigger: ".needs-holster .title-wrap",
                        start: "bottom bottom",
                        end: "+=20%",
                        scrub: 1
                    },
                    "--after-line-width": "100%"
                })
                gsap.to("#house path:last-of-type", {
                    scrollTrigger: {
                        trigger: "#house",
                        start: "bottom bottom-=17.5%",
                        end: "bottom bottom",
                        scrub: 1
                    },
                    transformOrigin: "center",
                    scale: 1.5
                })
            }
        }
        if(isReduced){ 
        }
        else{
            gsap.to(".grid-icon", {
                rotate: 360,
                duration: 60,
                repeat: -1,
                ease: "none",
            })
            gsap.to(".grid-icon svg", {
                rotate: -360,
                duration: 60,
                repeat: -1,
                ease: "none",
            })
        }
        if(isReduced){}
        else{
            gsap.from("#handheart", {
                scrollTrigger: {
                    trigger: "#handheart",
                    start: "bottom bottom-=10%",
                    end: "bottom bottom",
                    scrub: 1
                },
                y:50,
                opacity: 0
            })
        }
        if(isReduced){}
        else{
            gsap.from("#gear", {
                rotate:360,
                transformOrigin: "50%, 50%",
                duration:5,
                repeat: -1
            })
        }
    }
    // ABOUT
    if (window.location.pathname.match(about)){
        let memberList = $(".member-wrap")[0].children;
        let member = {
            card: $(".member"),
            title: $(".member-meta h6"),
            shortBio: $(".member-meta p.subline"),
            img: $(".member-img img"),
            dialog: $("#dialog")[0],
            modalImg: null,
            modalText: null,
            modalClose: $("#dialog .x")
        }
        let memberData = {
            title: ["President", "Vice President", "Recording Secretary", "Treasurer","Program Manager", "Member", "Member"],
            bio: [
                "Veronica serves as the Executive Director of the Alzheimer's Enrichment Program.",
                "Vasean leads our marketing and public relations efforts as well as day-to-day board activities.",
                "Dr. Williams records and archives our board activities. She also lends her education experience to the Y.E.A. program.",
                "Tarasha manages our financial accounts, tax documents, and fundraising ethics.",
                "Daisha manages the Youth Empowerment & Advocacy program and orchestrates the workflow of our organization.",
                "Dr. Hurst lends her extensive non-profit experience to aid in developing grant funding proposals.",
                "Troylynn is our community engagement specialist, connecting us with others who share our mission and values."
            ],
        }
        let memberArray = [];
        let modalDialog = {
            name: $(".dialog-meta-top h6")[0],
            title: $(".dialog-meta-top h6")[1],
            img: $(".dialog-img img")[0],
            social: $(".dialog-meta-top .social-holster")[0],
            bio: $(".dialog-meta .member-meta p.subline")[0], 
        }
        let iW = window.innerWidth
        function cycleBio(i){
            i.preventDefault();
            for(let x=0; x<memberList.length; x++){
                if(memberList[x].classList.contains("active-member")){
                    prevActiveMember = memberList[x];
                }
                memberList[x].classList.remove("active-member")
                if (i.target.getAttribute("data-member") == x || i.target.parentElement.getAttribute("data-member") == x){
                    currentActiveMember = memberList[x];
                    if(isMobile){
                        console.log(modalDialog.name)
                        modalDialog.name.innerHTML = $(".member span")[x].innerHTML
                        modalDialog.title.innerHTML = memberData.title[x]
                        modalDialog.img.setAttribute("src", `/apz/basket/headshots/${x+1}.webp`)
                        modalDialog.bio.innerHTML = memberData.bio[x]
                    }
                    else{
                        memberTL = gsap.timeline();
                        memberTL.to(".member-meta h6, .member-meta p, .member-img",{
                            opacity: 0,
                            duration: .25,
                            ease: "power4.out"
                        })
                        setTimeout(() => {
                            $(".member-meta h6")[0].innerHTML = memberData.title[x]
                            $(".member-meta p")[0].innerHTML = memberData.bio[x]
                            member.img[0].setAttribute("src", `/apz/basket/headshots/${x+1}.webp`)
                        }, 250);
                        memberTL.to(".member-meta h6, .member-meta p, .member-img",{
                            opacity: 1,
                            delay: .1,
                            duration:.25,
                            ease: "power4.in"
                        })
                        memberList[x].classList.toggle("active-member")
                    }
                }    
            }   
        }
        function showDialog(){
            dialog.show()
            gsap.fromTo("#dialog", {
                scale: 0,
                opacity: 0,
                ease: "power2.out"
            },
            {
                scale: 1,
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            })
        }
        // ON LOAD ADD EVENT LISTENERS
        for(let i=0; i<memberList.length; i++){
            if(isMobile){
                memberList[i].addEventListener("click", cycleBio)
                memberList[i].addEventListener("click", showDialog)  
                memberArray[i] = memberList[i].getAttribute("data-member")
                memberList[0].classList.remove("active-member")
                memberList[i].children[0].classList.add("smallest-headline")
            }
            else{
                memberList[i].addEventListener("click", cycleBio);
                memberArray[i] = memberList[i].getAttribute("data-member")
            }
        }
        // ON RESIZE
        window.onresize = (e)=>{
            cW = window.innerWidth
            if(cW <= 1024){
                isMobile = true
                if (cW <= iW){
                    for(let q=0; q<memberList.length; q++){
                        memberList[q].children[0].classList.add("smallest-headline")
                        memberList[q].addEventListener("click", cycleBio) 
                        memberList[q].addEventListener("click", showDialog) 
                        memberArray[q] = memberList[q].getAttribute("data-member")
                    }
                }
            }
            else{
                isMobile = false
                if (cW >= iW)
                for(let i=0; i<memberList.length; i++){
                    memberList[i].children[0].classList.add("small-headline")
                    memberList[i].children[0].classList.remove("smallest-headline")
                    memberList[i].removeEventListener("click", showDialog) 
                    memberList[i].addEventListener("click", cycleBio);
                    memberArray[i] = memberList[i].getAttribute("data-member")
                }
            }
        }
        // CLOSE DIALOG
        member.modalClose[0].addEventListener("click", (e)=>{
            gsap.to("#dialog", {
                opacity: 0,
                scale: 0,
                duration: .5,
                ease: "power2.out"
            })
            setTimeout(() => {
                dialog.close()   
            }, 500);
        })
    }
});

// SUBSCRIBE
if(isReduced){}
else{
    gsap.from("#flag", {
        scrollTrigger: {
            trigger: "#flag",
            start: "bottom bottom-=5%",
            end: "+=25%",
            scrub: 1
        },
        transformOrigin: "bottom left",
        rotate: 360,
    })
}

// EMAIL VALIDATION
let form = $(".ef1")[0];
let ef2 = $(".ef2")[0];
let formEmail = $("#email")[0];
let aformEmail;
try {
    aformEmail = $("#a-email")[0];
}
catch (error){
    // console.error("No RSVP form on this page.")
}
let valid;


// KEEP VALIDATING EMAIL AFTER CLICK UNTIL VALID
formEmail.addEventListener("click", (e)=> {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailCheck = setInterval(() => {
        console.log(valid)
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
        console.log(valid)
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
try {
    aformEmail.addEventListener("click", (e)=> {
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailCheck = setInterval(() => {
            console.log(valid)
            if (re.test(aformEmail.value) && aformEmail.value.length != 0){
                gsap.to("#a-email, #a-submit", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                valid = true;
            }
            else{
                gsap.to("#a-email, #a-submit", {
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
    aformEmail.addEventListener("keyup", (e)=> {
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailCheck = setInterval(() => {
            console.log(valid)
            if (re.test(aformEmail.value) && aformEmail.value.length != 0){
                gsap.to("#a-email, #a-submit", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                valid = true;
            }
            else{
                gsap.to("#a-email, #a-submit", {
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
} catch (error) {
    // console.error("No RSVP form on this page.")
}

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
try {
    const aForm = document.forms['a-email-form']
    aForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(aformEmail.value)){
            formTL = gsap.timeline();
            let afv = aformEmail.value
            formTL.to('#a-email, #submit', {
                outline: "6px solid red",
                borderColor: "red",
                duration: .5
            })
            formTL.to(aformEmail, {
                value: "Not a valid email address",
                duration: 2
            })
            formTL.to('#a-email, #submit', {
                outline: "3px solid red",
                duration: .5
            })
            formTL.to(aformEmail, {
                value: afv,
                duration: .2
            }, "<")
        }
        else {
            fetch(scriptURL, { method: 'POST', body: new FormData(ef2)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            let sa = new FormData(ef2)
            let dv = [...sa.entries()]
            console.log(dv)

            aformTL2 = gsap.timeline();
            let afv = aformEmail.value
            aformTL2.to('#a-email, #submit', {
                outline: "6px solid var(--grass-dark)",
                border: "2px solid var(--grass-dark)",
                duration: .5
            })
            aformTL2.to(aformEmail, {
                value: "Thank you!",
                duration: 5
            }, "<")
            aformTL2.to('#a-email, #submit', {
                outline: "0px solid transparent",
                border: "2px solid var(--dark-mode-bg)",
                duration: 1
            })
            aformTL2.to(aformEmail, {
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
    })
}
catch (error){
    // console.error("No RSVP form on this page.")
}


// VOLUNTEER FORM
if(window.location.pathname.match(yea)){
    let vform = $(".v-form")[0];
    let vformEmail = $("#vol-email")[0];
    let vformName = $("#vol-name")[0];
    let vformReason = $("#vol-reason")[0];
    let vformSubmit = $("#vol-submit")[0];
    let vEmailValid = false;
    let vNameValid = false;
    let vReasonValid = false;
    let vformValid = false;
    let vEmailCheck;
    let vNameCheck;
    let vReasonCheck;
    const vForm = document.forms['volunteer-form']
    vformEmail.addEventListener("focus", (e)=> {
        e.preventDefault();
        let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        vEmailCheck = setInterval(() => {
            if (re.test(vformEmail.value) && vformEmail.value.length != 0){
                gsap.to("#vol-email", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vEmailValid = true;
            }
            else{
                gsap.to("#vol-email", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
                vEmailValid = false;
            }
            if (vNameValid && vEmailValid && vReasonValid){
                gsap.to("#vol-submit", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vformValid = true;
            }
            else{
                gsap.to("#vol-submit", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
            }
        }, 250);
    })
    vformName.addEventListener("focus", (e)=> {
        e.preventDefault();
        let nre = /^[a-zA-Z]+ [a-zA-Z]+$/;
        vNameCheck = setInterval(() => {
            if (nre.test(vformName.value) && vformName.value.length != 0){
                gsap.to("#vol-name", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vNameValid = true;
            }
            else{
                gsap.to("#vol-name", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
                vNameValid = false;
            }
            if (vNameValid && vEmailValid && vReasonValid){
                gsap.to("#vol-submit", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vformValid = true;
            }
            else{
                gsap.to("#vol-submit", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
            }
        }, 250);
    })
    vformReason.addEventListener("focus", (e)=> {
        e.preventDefault();
        vReasonCheck = setInterval(() => {
            if (vformReason.value.length >= 25){
                gsap.to("#vol-reason", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vReasonValid = true;
            }
            else{
                gsap.to("#vol-reason", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
                vReasonValid = false;
            }
            if (vNameValid && vEmailValid && vReasonValid){
                gsap.to("#vol-submit", {
                    outline: "3px solid var(--grass-dark)",
                    border: "2px solid var(--grass-dark)"
                })
                vformValid = true;
            }
            else{
                gsap.to("#vol-submit", {
                    outline: "3px solid red",
                    border: "2px solid red"
                })
                vformValid = false;
            }
        }, 250);
    })
    vForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let n = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/
        // EMAIL VALIDATION
        if (vEmailValid != true || !re.test(vformEmail.value)){
            vEformTL = gsap.timeline();
            let fv = vformEmail.value
            vEformTL.to('#vol-email', {
                outline: "6px solid red",
                borderColor: "red",
                duration: .5
            })
            vEformTL.to(vformEmail, {
                value: "Not a valid email address",
                duration: 2
            })
            vEformTL.to('#vol-email', {
                outline: "3px solid red",
                duration: .5
            })
            vEformTL.to(vformEmail, {
                value: fv,
                duration: .2
            }, "<")
        }
        // NAME VALIDATION
        if (vNameValid != true){
            vNformTL = gsap.timeline();
            let fNv = vformName.value
            vNformTL.to('#vol-name', {
                outline: "6px solid red",
                borderColor: "red",
                duration: .5
            })
            vNformTL.to(vformName, {
                value: "Please enter your full name.",
                duration: 2
            })
            vNformTL.to('#vol-name', {
                outline: "3px solid red",
                duration: .5
            })
            vNformTL.to(vformName, {
                value: fNv,
                duration: .2
            }, "<")
        }
        // REASON VALIDATION
        if (vReasonValid != true){
            vRformTL = gsap.timeline();
            let fRv = vformReason.value
            vRformTL.to('#vol-reason', {
                outline: "6px solid red",
                borderColor: "red",
                duration: .5
            })
            vRformTL.to(vformReason, {
                value: "Please explain more!",
                duration: 2
            })
            vRformTL.to('#vol-reason', {
                outline: "3px solid red",
                duration: .5
            })
            vRformTL.to(vformReason, {
                value: fRv,
                duration: .2
            }, "<")
        }
        // FULL FORM VALIDATION
        if (vformValid || ($("#v-form-color")[0].value == "" || !$("#v-form-color")[0])) {
            fetch(scriptURL, { method: 'POST', body: new FormData(vform)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            vformTL2 = gsap.timeline();
            let fs = vformSubmit.value
            vformTL2.to('#vol-email, #vol-name, #vol-reason, #vol-submit', {
                outline: "6px solid var(--grass-dark)",
                border: "2px solid var(--grass-dark)",
                duration: 1
            })
            vformTL2.to(vformSubmit, {
                value: "Thank you!",
                duration: 2
            }, "<")
            vformTL2.to("#volunteer", {
                opacity: 0,
                scale: 0,
                duration: .5,
                ease: "power2.out"
            })
            vformTL2.to([vformEmail, vformName, vformReason], {
                value: "",
                duration: 1
            })
            vformTL2.to(vformSubmit, {
                value: fs,
                duration: 1
            })
        }
    })
}

if(window.location.pathname.match(events)){
    // RSVP FORM
    // let rsvpDialog = {
    //     dialog: $("#rsvp")[0],
    //     button: $("#r-button")[0], 
    //     modalClose: $("#rsvp .modal-wrap .x")[0],
    //     name: $("#r-name")[0],
    //     email: $("#r-email")[0],
    //     reason: $("#r-reason")[0],
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

    // let rform = $(".v-form")[0];
    // let rformEmail = $("#r-email")[0];
    // let rformName = $("#r-name")[0];
    // let rformSubmit = $("#r-submit")[0];
    // let rEmailValid = false;
    // let rNameValid = false;
    // let rformValid = false;
    // let rEmailCheck;
    // let rNameCheck;
    // const rForm = document.forms['rsvp-form']
    // rformEmail.addEventListener("focus", (e)=> {
    //     e.preventDefault();
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     rEmailCheck = setInterval(() => {
    //         if (re.test(rformEmail.value) && rformEmail.value.length != 0){
    //             gsap.to("#r-email", {
    //                 outline: "3px solid var(--grass-dark)",
    //                 border: "2px solid var(--grass-dark)"
    //             })
    //             rEmailValid = true;
    //         }
    //         else{
    //             gsap.to("#r-email", {
    //                 outline: "3px solid red",
    //                 border: "2px solid red"
    //             })
    //             rEmailValid = false;
    //         }
    //         if (rEmailValid){
    //             gsap.to("#r-submit", {
    //                 outline: "3px solid var(--grass-dark)",
    //                 border: "2px solid var(--grass-dark)"
    //             })
    //             rformValid = true;
    //         }
    //         else{
    //             gsap.to("#r-submit", {
    //                 outline: "3px solid red",
    //                 border: "2px solid red"
    //             })
    //         }
    //     }, 250);
    // })
    // rformName.addEventListener("focus", (e)=> {
    //     e.preventDefault();
    //     let nre = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //     rNameCheck = setInterval(() => {
    //         if (nre.test(rformName.value) && rformName.value.length != 0){
    //             gsap.to("#r-name", {
    //                 outline: "3px solid var(--grass-dark)",
    //                 border: "2px solid var(--grass-dark)"
    //             })
    //             rNameValid = true;
    //         }
    //         else{
    //             gsap.to("#r-name", {
    //                 outline: "3px solid red",
    //                 border: "2px solid red"
    //             })
    //             rNameValid = false;
    //         }
    //         if (rNameValid && rEmailValid){
    //             gsap.to("#r-submit", {
    //                 outline: "3px solid var(--grass-dark)",
    //                 border: "2px solid var(--grass-dark)"
    //             })
    //             rformValid = true;
    //         }
    //         else{
    //             gsap.to("#r-submit", {
    //                 outline: "3px solid red",
    //                 border: "2px solid red"
    //             })
    //         }
    //     }, 250);
    // })
    // rForm.addEventListener("submit", (e)=>{
    //     // console.log(rNameValid, rEmailValid, rformValid)
    //     e.preventDefault();
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     let n = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/
    //     // EMAIL VALIDATION
    //     if (rEmailValid != true || !re.test(rformEmail.value)){
    //         rEformTL = gsap.timeline();
    //         let rfv = rformEmail.value
    //         rEformTL.to('#r-email', {
    //             outline: "6px solid red",
    //             borderColor: "red",
    //             duration: .5
    //         })
    //         rEformTL.to(rformEmail, {
    //             value: "Not a valid email address",
    //             duration: 2
    //         })
    //         rEformTL.to('#r-email', {
    //             outline: "3px solid red",
    //             duration: .5
    //         })
    //         rEformTL.to(rformEmail, {
    //             value: rfv,
    //             duration: .2
    //         }, "<")
    //     }
    //     // NAME VALIDATION
    //     if (rNameValid != true){
    //         rNformTL = gsap.timeline();
    //         let fNr = rformName.value
    //         rNformTL.to('#r-name', {
    //             outline: "6px solid red",
    //             borderColor: "red",
    //             duration: .5
    //         })
    //         rNformTL.to(rformName, {
    //             value: "Please enter your full name.",
    //             duration: 2
    //         })
    //         rNformTL.to('#r-name', {
    //             outline: "3px solid red",
    //             duration: .5
    //         })
    //         rNformTL.to(rformName, {
    //             value: fNr,
    //             duration: .2
    //         }, "<")
    //     }
    //     // FULL FORM VALIDATION
    //     if (rformValid) {
    //         fetch(scriptURL, { method: 'POST', body: new FormData(rform)})
    //         .then(response => console.log('Success!', response))
    //         .catch(error => console.error('Error!', error.message))
    //         rformTL2 = gsap.timeline();
    //         let rfv = rformEmail.value
    //         let rfs = rformSubmit.value
    //         rformTL2.to('#r-email, #r-name, #r-submit', {
    //             outline: "6px solid var(--grass-dark)",
    //             border: "2px solid var(--grass-dark)",
    //             duration: 1
    //         })
    //         rformTL2.to(rformEmail, {
    //             value: "Thank you!",
    //             duration: 2
    //         }, "<")
    //         rformTL2.to(rformEmail, {
    //             value: "",
    //             duration: 1
    //         })
    //         rformTL2.to(rformSubmit, {
    //             value: rfs,
    //             duration: 1,
    //             onComplete: function() {
    //                 setTimeout(() => {
    //                     rModalClose()
    //                 }, 100);
    //             }
    //         }, "<")

    //     }
    // })
}



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