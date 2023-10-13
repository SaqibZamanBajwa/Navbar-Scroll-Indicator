window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;

  indicatorBar.style.width = scrollValue + "%";
});