/* **************************************************************************** 
                          Custom GSAP js start 
****************************************************************************  */

var tl = gsap.timeline(); 
gsap.registerPlugin(ScrollTrigger);


// **************************** Smooth Scroll js Start ****************************

// **************************** Smooth Scroll js End ****************************



// =================================== Custom Cursor Js Start =====================================
var body = document.body;
var cursor = document.querySelector('.cursor');
var dot = document.querySelector('.dot');
var cursorSmalls = document.querySelectorAll('.cursor-small');
var cursorBigs = document.querySelectorAll('.cursor-big');

body.addEventListener('mousemove', function (event) {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 2, 
        delay: 0.1,
        visibility: 'visible',
        ease: "expo.out",
    });
});

body.addEventListener('mousemove', function (event) {
    gsap.to(dot, {
        x: event.x,
        y: event.y,
        duration: 1.5,
        visibility: 'visible',
        ease: "expo.out",
    });
});

// Small Cursor
cursorSmalls.forEach(cursorSmall => {
  cursorSmall.addEventListener('mouseenter', function () {
      gsap.to(dot, {
          scale: 8,
          backgroundColor: '#fff',
      });
      gsap.to(cursor, {
          visibility: 'hidden',
          opacity: 0
      });
  });
  
  cursorSmall.addEventListener('mouseleave', function () {
      gsap.to(dot, {
          scale: 1,
          backgroundColor: '#fff',
      });
      gsap.to(cursor, {
        visibility: 'visible',
        opacity: 1
      });
  });
});

// Big Cursor
cursorBigs.forEach(cursorBig => {
  cursorBig.addEventListener('mouseenter', function () {
      gsap.to(dot, {
          scale: 16,
          backgroundColor: '#fff',
      });
      gsap.to(cursor, {
          visibility: 'hidden',
          opacity: 0
      });
  });
  
  cursorBig.addEventListener('mouseleave', function () {
      gsap.to(dot, {
          scale: 1,
          backgroundColor: '#fff',
      });
      gsap.to(cursor, {
        visibility: 'visible',
        opacity: 1
      });
  });
});
// =================================== Custom Cursor Js End =====================================



// **************************** Mobile Menu js Start ****************************
var mmm = gsap.matchMedia(); 
var mtl = gsap.timeline({paused: true}); 

const toggleMobileMenu = document.querySelector('.toggle-mobileMenu');
const closeButton = document.querySelector('.close-button');
const mobileSideOverlay = document.querySelector('.side-overlay');

mmm.add("(max-width: 991px)", () => {
  
  mtl.to('.side-overlay', {
    opacity: 1,
    visibility: 'visible',
    duration: .3, 
  });
  
  mtl.to('.mobile-menu', {
    x: 0,
  });
  
  mtl.from('.nav-menu__item', {
    opacity: 0,
    duration: .3,
    x: -60,
    stagger: .12,
  });

  mtl.from('.close-button', {
    opacity: 0,
    scale: 0,
    duration: .2,
  });

  toggleMobileMenu.addEventListener('click', function () {
    mtl.play();
    document.body.style.overflow = 'hidden'
  });

  closeButton.addEventListener('click', function () {
    mtl.reverse();
    document.body.style.overflow = ''
  });

  mobileSideOverlay.addEventListener('click', function () {
    mtl.reverse();
    document.body.style.overflow = ''
  });

});
// **************************** Mobile Menu js End ****************************


// **************************** offcanvas sidebar js start ****************************
var stl = gsap.timeline({
  paused: true,
  onReverseComplete: function() {
    document.body.style.overflow = '';
    document.body.style.paddingInlineEnd = '';
  }
}); 

var offcanvasBarIcon = document.querySelector('.offcanvas-bar-icon');
var closeBtn = document.querySelector('.offcanvas-sidebar__close');
var sideOverlay = document.querySelector('.side-overlay');

stl.to('.side-overlay', {
  duration: .3, 
  visibility: 'visible',
  opacity: 1
});

stl.to('.offcanvas-sidebar', {
  x: 0,
  duration: .3, 
  delay: .2
});

stl.from('.animate-item', {
  x: 80,
  opacity: 0,
  stagger: .12,
  duration: .3,
}); 

stl.from('.offcanvas-sidebar__close', {
  scale: .4,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
});

mmm.add("(min-width: 992px)", () => {
  offcanvasBarIcon.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingInlineEnd = '18px';
  });
});

// Mobile device scroll hide
mmm.add("(max-width: 991px)", () => {
  offcanvasBarIcon.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', function () {
    document.body.style.overflow = '';
    document.body.style.paddingInlineEnd = '';
  });
  
  sideOverlay.addEventListener('click', function () {
    document.body.style.overflow = '';
    document.body.style.paddingInlineEnd = '';
  });
});

offcanvasBarIcon.addEventListener('click', function () {
  stl.play();
});

closeBtn.addEventListener('click', function () {
  stl.reverse();
});

sideOverlay.addEventListener('click', function () {
  stl.reverse();
});
// **************************** offcanvas sidebar js End ****************************



// =================================== Custom Split text Js Start =====================================
// Split One
function breakTheText() {
  const titles = document.querySelectorAll(".splitTextStyleOne");

  titles.forEach((title) => {
    const titleText = title.textContent;
    const splittedText = titleText.split("");

    let clutter = "";
    splittedText.forEach((element) => {
      clutter += element === " " ? `<span>&nbsp;</span>` : `<span>${element}</span>`;
    });
    title.innerHTML = clutter;
  });
}
// Initialize text split
breakTheText();
// Intersection Observer to trigger animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target.querySelectorAll("span"), {
          y: 60,
          duration: 0.6,
          opacity: 0,
          stagger: 0.06,
          ease: "back.out(1.7)"
        });
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.1 } 
);
// Observe each title section
document.querySelectorAll(".splitTextStyleOne").forEach((title) => {
  observer.observe(title);
});


// Split Two
function breakTheTextTwo() {
  const titles = document.querySelectorAll(".splitTextStyleTwo");

  titles.forEach((title) => {
    const titleText = title.textContent;
    const splittedText = titleText.split("");

    let clutter = "";
    splittedText.forEach((element) => {
      clutter += element === " " ? `<span>&nbsp;</span>` : `<span>${element}</span>`;
    });
    title.innerHTML = clutter;
  });
}

// Initialize text split
breakTheTextTwo();

// Intersection Observer to trigger animation
const observerTwo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target.querySelectorAll("span"), {
          x: 60,
          duration: 0.6,
          opacity: 0,
          stagger: 0.06,
          ease: "back.out(1.7)"
        });
        observerTwo.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.1 } 
);

// Observe each title section
document.querySelectorAll(".splitTextStyleTwo").forEach((title) => {
  observerTwo.observe(title);
});
// =================================== Custom Split text Js End =====================================



// **************************** Position Aware button hover js start ****************************
class Button {
  constructor(buttonElement) {
    this.block = buttonElement;
    this.init();
    this.initEvents();
  }

  init() {
    const el = gsap.utils.selector(this.block);

    this.DOM = {
      button: this.block,
      flair: el(".button__flair")
    };

    this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent");
    this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent");
  }

  getXY(e) {
    const {
      left,
      top,
      width,
      height
    } = this.DOM.button.getBoundingClientRect();

    const xTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, width, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    const yTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, height, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    return {
      x: xTransformer(e.clientX - left),
      y: yTransformer(e.clientY - top)
    };
  }

  initEvents() {
    this.DOM.button.addEventListener("mouseenter", (e) => {
      const { x, y } = this.getXY(e);

      this.xSet(x);
      this.ySet(y);

      gsap.to(this.DOM.flair, {
        scale: 1,
        duration: 0.9,
        ease: "power2.out"
      });
    });

    this.DOM.button.addEventListener("mouseleave", (e) => {
      const { x, y } = this.getXY(e);

      gsap.killTweensOf(this.DOM.flair);

      gsap.to(this.DOM.flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.9,
        ease: "power2.out"
      });
    });

    this.DOM.button.addEventListener("mousemove", (e) => {
      const { x, y } = this.getXY(e);

      gsap.to(this.DOM.flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.9,
        ease: "power2"
      });
    });
  }
}

const buttonElements = document.querySelectorAll('[data-block="button"]');

buttonElements.forEach((buttonElement) => {
  new Button(buttonElement);
});

// **************************** Position Aware button hover js End ****************************



// **************************** banner Small Plane js Start ****************************
let st2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".planeSmall",
      scrub: 2,
      start: "top 25%",
      end: "bottom 10%",
      markers: false 
  }
});
st2.from(".planeSmall", {
  duration: .8,
  x: -80,
  scale: .6,
}).to(".planeSmall", {
  duration: .8,
  x: 0,
  scale: 1,
});

// let st3 = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".planeSmall",
//       scrub: 2,
//       start: "top 25%",
//       end: "bottom 10%",
//       markers: false 
//   }
// });
// st3.to(".planeSmall", {
//   duration: .8,
//   y: 160,
//   x: 0,
//   scale: 1.6,
// }).to(".planeSmall", {
//   duration: .8,
//   x: 0,
//   scale: 1.6,
//   rotate: -20
// }).to(".planeSmall", {
//   duration: .8,
//   x: 0,
//   scale: 1.6,
//   rotate: -70
// })
// **************************** banner Small Plane js End ****************************


// **************************** About Section Plane js Star ****************************
let atl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-plane",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2,  
    markers: false,
  }
});
atl.fromTo(".about-plane", 
  {
    x: -260,
  },  
  { 
    x: 260,
    y: -380,
    rotate: -40,
    duration: 1.6
  } 
);


// Truck Head
let trucktl = gsap.timeline({
  scrollTrigger: {
    trigger: ".truck-head",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 2,  
    markers: false,
  }
});
trucktl.fromTo(".truck-head", 
  {
    y: -280,
  },  
  { 
    y: 0,
    duration: 1.6
  } 
);
// **************************** About Section Plane js End ****************************


// **************************** Counter Section js Start ****************************
// blue biman
let counterBimanTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".blue-biman",
    start: "top 90%",
    end: "bottom 15%",
    scrub: 2,  
    markers: false,
  }
});
counterBimanTL.fromTo(".blue-biman", 
  {
    x: 240,
    scale: .3
  },  
  { 
    x: 0,
    scale: 1,
    duration: 1.6
  } 
);

// BG Image
let counterImgTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".counter-bg-img",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 2,  
    markers: false,
  }
});
counterImgTL.fromTo(".counter-bg-img", 
  {
    x: 600,
  },  
  { 
    x: 0,
    duration: 1.6
  } 
);
// **************************** Counter Section js End ****************************


// **************************** transport way Section js End ****************************
let transWayLT = gsap.timeline({
  scrollTrigger: {
    trigger: ".plan-down",
    start: "top 70%",
    end: "bottom 0%",
    scrub: 2,  
    markers: false,
  }
});
transWayLT.fromTo(".plan-down", 
  {
    x: -260,
    scale: .6
  },  
  { 
    x: 620,
    y: 220,
    scale: 1.4,
    duration: 1.6
  } 
);
// **************************** transport way Section js End ****************************

// **************************** Project section js Start ****************************
let projectLT = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-shape-img",
    start: "top 70%",
    end: "bottom 0%",
    scrub: 2,  
    markers: false,
  }
});
projectLT.fromTo(".project-shape-img", 
  {
    y: -360,
    scale: .6
  },  
  { 
    y: 0,
    scale: 1.4,
    duration: 1.6
  } 
);
// **************************** Project section js End ****************************


// **************************** quote section start ==========================
gsap.utils.toArray(".updown-animation, .moon-shape").forEach((element) => {
  let karentl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 50%",
      end: "bottom 10%",
      scrub: 2,
      markers: false,
    }
  });

  karentl.fromTo(
    element,
    { y: -280 },
    { y: 0, duration: 1.6 }
  );
});
// **************************** quote section End ==========================

// **************************** quote Two section start ==========================

let planLocation = gsap.timeline({
  scrollTrigger: {
    trigger: ".plan-location",
    start: "top 70%",
    end: "bottom 0%",
    scrub: 2,  
    markers: false,
  }
});
planLocation.fromTo(".plan-location", 
  {
    y: -360,
    scale: .6
  },  
  { 
    y: 0,
    scale: 1.4,
    duration: 1.6
  } 
);
// **************************** quote Two section End ==========================






/* **************************************************************************** 
                          Custom GSAP js start 
****************************************************************************  */