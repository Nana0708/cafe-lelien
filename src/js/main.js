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

// -------------- スライドイン --------------//
// top
gsap.from(".js_top-concept",{
    y:200,
    autoAlpha: 0,
    duration: 1,
    ease: "Power4.inOut",
    
scrollTrigger: {
    trigger: ".js_top-concept__trigger",
    start: "top center",
  
    markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",

  },
});




// menu
// news
// single
// contact


// -------------- ハンバーガー --------------//

// -------------- ハンバーガー --------------//
// -------------- ハンバーガー --------------//