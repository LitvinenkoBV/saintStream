export default function showCarousel(wrapper, wrp, prevBtn, nextBtn) {
  let offset = 0;
  const wrapperWidth = 2850;

  document.querySelector(nextBtn).addEventListener("click", function () {
    offset = offset + 280;

    if (offset > wrapperWidth - wrp.offsetWidth) {
      offset = 0;
    }
    wrapper.style.left = -offset + "px";
  });

  document.querySelector(prevBtn).addEventListener("click", function () {
    offset = offset - 280;
    if (offset < 0) {
      offset = wrapperWidth - wrp.offsetWidth;
    }
    wrapper.style.left = -offset + "px";
  });
}
