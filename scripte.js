// tl.from("header", {
//     x: 10,
//     opacity: 0,
//     duration: 0.7,
//   });
function Profile() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "h1 ",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "0% 0%",
      scrub: 2,
    },
  });

  tl.from("ul li", {
    x: 10,
    opacity: 0,
    duration: 0.7,
  });

  tl.from("h1", {
    y: 30,
    opacity: 0,
    duration: 1,
  });
}

Profile();

function section1() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section1 .img",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl.from(".section1 .img", {
    y: 60,
    opacity: 0,
    duration: 1,
  });
}
section1();

function section2() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2 ",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl.from(
    ".section2 .left",
    {
      y: 60,
      opacity: 0,
      duration: 1,
    },
    "a"
  );

  tl.from(
    ".section2 .right",
    {
      y: 60,
      opacity: 0,
      duration: 1,
    },
    "a"
  );

  tl.from(
    ".right .box1",
    {
      x: 90,
      // left:-50,
    },
    "a"
  );

  tl.from(
    ".right .box2",
    {
      x: -90,
      // left:-50,
    },
    "a"
  );

  tl.from(
    ".right .box3",
    {
      x: -90,
      // left:-50,
    },
    "a"
  );
}
section2();

function section3() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3  ",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl.from(".pera ", {
    y: 60,
    opacity: 0,
    duration: 1,
  });
}

section3();

function section4() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4 .aside",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl.from(
    ".section4 aside",
    {
      y: 60,
      opacity: 0,
      duration: 1,
    },
    "b"
  );

  tl.from(
    ".img_slider",
    {
      z: -60,
      opacity: 0,
      duration: 2,
    },
    "b"
  );

  tl.to(
    ".img_slider .left",
    {
      // y: 60,
      // opacity: 0,
      scale: 1.14,
      duration: 1,
    },
    "b"
  );

  tl.to(
    ".img_slider .right",
    {
      // y: 60,
      // opacity: 0,
      scale: 1.2,
      duration: 1,
    },
    "b"
  );
}
section4();

function section5() {
  var tl = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".section5 .img_slider2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top -60",
        scrub: 2,
      },
    },
    "c"
  );

  tl.from(
    ".img_slider2",
    {
      y: 60,
      opacity: 0,
      duration: 1,
    },
    "c"
  );

  tl.to(
    ".img_slider2 .left",
    {
      // y: 60,
      // opacity: 0,
      scale: 1.1,
      duration: 1,
    },
    "c"
  );

  tl.to(
    ".img_slider2 .right",
    {
      // y: 60,
      // opacity: 0,
      scale: 1.1,
      duration: 1,
    },
    "c"
  );
}
section5();

function section6() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section6 ",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl.from(
    ".section6 .uper",
    {
      z: 30,
      opacity: 0,
      duration: 2,
    },
    "ss"
  );

  tl.to(
    ".uper p",
    {
      //  x: 60,
      //  rotate: "-20deg",
      // opacity: 0,
      duration: 1,
      scale: 1,
    },
    "ss"
  );

  tl.from(".uper i", {
    x: 60,
  });

  tl.to(".uper i", {
    x: -60,

    rotate: "-90deg",
    // opacity: 0,
    duration: 1,
  });

  tl.from(
    ".down ",
    {
      z: 60,
      //  rotate: "-20deg",
      opacity: 0,
      duration: 2,
      delay: 1,
    },
    "s"
  );

  tl.to(
    ".down p",
    {
      //  z: 60,
      //  rotate: "-20deg",
      // opacity: 0,
      duration: 2,
      // delay:1,
      scale: 1,
    },
    "s"
  );
}
section6();

function section7() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section7 ",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -10",
      scrub: 2,
    },
  });
  tl.from(".sectionCard .minicard", {
    // x: -60,
    // opacity: 0,
    duration: 1,
  });

  tl.from(" #minicard1", {
    x: -60,
    // opacity: 0,
    duration: 1,
  });
  tl.from(" #minicard3", {
    x: -60,
    // opacity: 0,
    duration: 1,
  });

  tl.from(" #minicard", {
    x: -60,
    // opacity: 0,
    duration: 1,
  });

  tl.from(" #minicard2", {
    x: -60,
    // opacity: 0,
    duration: 1,
  });
}
section7();

function section8() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section8 ",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 40%",
      scrub: 2,
    },
  });
  tl.from(".section8", {
    y: 100,
    opacity: 0,
    // duration: 1,
    // scale: 1,
  });

  tl.to(".section8", {
    // z: 100,
    // opacity: 0,
    duration: 2,
    scale: 1,
  });
}
section8();
