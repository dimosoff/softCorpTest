export function addClassOnClick(itemClick, classToItem, nameOfClass) {
  document.querySelector(itemClick).addEventListener('click', () => {
    document.querySelectorAll(classToItem).forEach((item) => {
      item.classList.toggle(nameOfClass);
    });
  });
}

export function addClassOnScroll(item, topOffset, nameOfClass) {
  window.addEventListener('scroll', function () {
    if (scrollY > topOffset) {
      document.querySelector(item).classList.add(nameOfClass);
    } else {
      document.querySelector(item).classList.remove(nameOfClass);
    }
  });
  if (scrollY > topOffset) {
    document.querySelector(item).classList.add(nameOfClass);
  }
}

export function linksPreventDefault() {
  document.querySelectorAll("a[href='#']").forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}

export function scrollToTop() {
  let $scrollTopElement = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function () {
    let hasClass = $scrollTopElement.classList.contains('_active'),
      isScrolled = scrollY > 35;
    if (isScrolled && !hasClass) {
      $scrollTopElement.classList.add('_active');
    } else if (!isScrolled && hasClass) {
      $scrollTopElement.classList.remove('_active');
    }
  });
  $scrollTopElement.addEventListener('click', () => {
    let currentScrollTop = window.scrollY;
    animate({
      duration: 300,
      timing: linear,
      draw: function (progress) {
        window.scrollTo(0, currentScrollTop - currentScrollTop * progress);
      }
    });
  });
  if (scrollY > 35 && !$scrollTopElement.classList.contains('_active')) {
    $scrollTopElement.classList.add('_active');
  }
}