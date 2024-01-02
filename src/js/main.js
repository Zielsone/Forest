const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  if (nav.classList.contains("nav--active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      document.body.style.overflow = "visible";
    });
  });

  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerHTML = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
