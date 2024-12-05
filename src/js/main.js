// -------------- オープニングアニメーション --------------/
// 読み込んだらtxtが入ってくる
// gsap.from(".js_opening__txt", {
//     duration: 1.2,
//     autoAlpha: 0,
//     y: 40,
//   });

// // openingが消える
//   gsap.to(".js_opening", {
//     autoAlpha: 0,
//     duration: 0.6,
//   		//1.2秒の遅延
//     delay: 1.5,
//   });

// -------------- ハンバーガー --------------//
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("is-active");
navigation.classList.toggle("is-active");
body.classList.toggle("is-active");
});

// -------------- 各ページkvのアニメーション --------------//

  gsap.from(".js_m_kv__copy", {
    opacity: 0,            
    y: 50,                 
    scale: 0.8,            
    duration: 0.7,         
    ease: "power2.out",    
    scrollTrigger: {
      trigger: ".js_m_kv__copy", 
      start: "top 80%",      
    }
  });

// -------------- スライドイン --------------//
// top
// concept
gsap.from(".js_top-concept",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-concept__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",

  },
});

// menu
gsap.from(".js_top-menu",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-menu__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

// news
gsap.from(".js_top-news",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-news__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

// access
gsap.from(".js_top-access",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-access__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

// contact
gsap.from(".js_top-contact",{
    y:200,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-contact__trigger",
    start: "top center",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});




// menu
// drink
gsap.from(".js_menu_drink",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_menu_drink__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

// food
gsap.from(".js_menu_food",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_menu_food__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});



// news
gsap.from(".js_news",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_news_trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

// single
gsap.from(".js_single",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_single__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});


// contact
gsap.from(".js_contact",{
    y:50,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_contact__trigger",
    start: "top 80%",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});



// -------------- ハンバーガー --------------//

// -------------- ハンバーガー --------------//
// -------------- ハンバーガー --------------//