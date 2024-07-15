// Animations

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".hero-img",
  { opacity: 0 },
  { duration: 1, x: 0, opacity: 1, ease: "power1.in" }
);
gsap.fromTo(
  ".title2 p",
  { opacity: 0 },
  { duration: 1, x: 0, opacity: 1, stagger: 0.3, ease: "power1.in" }
);
gsap.utils.toArray(".section-3-row").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".row-img img"),
    { opacity: 0 },
    {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});

gsap.utils.toArray(".section-3-row").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".title1"),
    { opacity: 0, x: -100 },
    {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});
gsap.utils.toArray(".section-4-text").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".section-4-text p"),
    { opacity: 0, x: -100 },
    {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});
gsap.utils.toArray(".section-5").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".section-5-img"),
    { opacity: 0 },
    {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});
gsap.utils.toArray(".section-5-text").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".section-5-text-row .title1"),
    { opacity: 0, x: -100 },
    {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});
gsap.utils.toArray(".faq").forEach((row) => {
  gsap.fromTo(
    row.querySelectorAll(".q-row .title1"),
    { opacity: 0, x: -100 },
    {
      duration: 0.7,
      x: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
});
