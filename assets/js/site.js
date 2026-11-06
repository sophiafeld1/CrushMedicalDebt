document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  initTestimonialGallery();
});

function initTestimonialGallery() {
  var gallery = document.querySelector("[data-testimonial-gallery]");
  if (!gallery) return;

  var track = gallery.querySelector(".gallery-track");
  var viewport = gallery.querySelector(".gallery-viewport");
  var prev = gallery.querySelector(".gallery-btn.prev");
  var next = gallery.querySelector(".gallery-btn.next");
  var dotsWrap = gallery.querySelector(".gallery-dots");
  var slides = Array.prototype.slice.call(track.querySelectorAll(".quote"));
  if (!slides.length) return;

  var page = 0;
  var startX = 0;
  var dragging = false;
  var dragOffset = 0;
  var gap = 16;

  function perView() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function pageCount() {
    return Math.max(1, Math.ceil(slides.length / perView()));
  }

  function maxPage() {
    return pageCount() - 1;
  }

  function layoutSlides() {
    var n = perView();
    var width = viewport.clientWidth;
    var slideW = Math.max(180, (width - gap * (n - 1)) / n);
    slides.forEach(function (slide) {
      slide.style.flex = "0 0 " + slideW + "px";
      slide.style.width = slideW + "px";
    });
  }

  function pageOffset(p) {
    var first = slides[p * perView()];
    if (!first) return 0;
    var max = Math.max(0, track.scrollWidth - viewport.clientWidth);
    return Math.min(first.offsetLeft, max);
  }

  function goTo(nextPage, animate) {
    page = Math.max(0, Math.min(maxPage(), nextPage));
    if (animate === false) track.classList.add("is-dragging");
    else track.classList.remove("is-dragging");
    track.style.transform = "translateX(-" + pageOffset(page) + "px)";
    if (prev) prev.disabled = page === 0;
    if (next) next.disabled = page === maxPage();
    Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
      dot.classList.toggle("is-active", i === page);
      dot.setAttribute("aria-selected", i === page ? "true" : "false");
    });
  }

  function renderDots() {
    dotsWrap.innerHTML = "";
    var count = pageCount();
    for (var i = 0; i < count; i++) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-dot";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-label", "Show testimonials page " + (i + 1));
      btn.addEventListener("click", function (index) {
        return function () { goTo(index); };
      }(i));
      dotsWrap.appendChild(btn);
    }
  }

  function refresh(animate) {
    layoutSlides();
    renderDots();
    goTo(Math.min(page, maxPage()), animate);
  }

  if (prev) prev.addEventListener("click", function () { goTo(page - 1); });
  if (next) next.addEventListener("click", function () { goTo(page + 1); });

  viewport.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging = true;
    startX = e.clientX;
    dragOffset = 0;
    track.classList.add("is-dragging");
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    dragOffset = e.clientX - startX;
    track.style.transform = "translateX(" + (-pageOffset(page) + dragOffset) + "px)";
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    track.classList.remove("is-dragging");
    var width = viewport.clientWidth;
    if (dragOffset < -width * 0.18) goTo(page + 1);
    else if (dragOffset > width * 0.18) goTo(page - 1);
    else goTo(page);
  }

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  window.addEventListener("resize", function () { refresh(false); });

  gallery.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") goTo(page + 1);
    if (e.key === "ArrowLeft") goTo(page - 1);
  });

  refresh(false);
}
