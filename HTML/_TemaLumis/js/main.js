var body = document.querySelector('body');

function toggleOverlay() {
  if (document.querySelector('.overlay')) {
    var overlay = document.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);
  } else {
    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    body.appendChild(overlay);
  }
}

function openMenu() {
  toggleOverlay();
  body.classList.add('overflow');
  document.querySelector('.main-menu').style.left = 0;
  document.querySelector('.overlay').addEventListener('click', closeMenu);
}

function closeMenu() {
  toggleOverlay();
  body.classList.remove('overflow');
  document.querySelector('.main-menu').style.left = '-285px';
}

document.querySelector('.menu-close').addEventListener('click', closeMenu);
document.querySelector('.menu-toggle').addEventListener('click', openMenu);

function openSearch() {
  var elem = document.querySelector('.form-wrapper');
  elem.classList.add('open');
}

function closeSearch() {
  var elem = document.querySelector('.form-wrapper');
  elem.classList.remove('open');
}

document.querySelector('.search-toggle').addEventListener('click', openSearch);
document.querySelector('.form-close').addEventListener('click', closeSearch);

// Carousel - Galeria de Imagens
if(document.querySelector('.slider')) {
  var slider = tns({
    container: '.slider-content',
    items: 1,
    navAsThumbnails: true,
    navContainer: '.nav-wrapper',
    loop: false
  });
  document.querySelector('.total-slides').innerHTML = slider.getInfo().slideCount;
  document.querySelector('.tns-controls').addEventListener('click', function() {
    var currentSlide = slider.getInfo().index + 1;
    document.querySelector('.current-slide').innerHTML = currentSlide;
  });
  var navWrapper = document.querySelector('.nav-wrapper');
  var width = navWrapper.childElementCount * 91;
  navWrapper.setAttribute('style', 'width: ' + width + 'px');
}




// Share Widget

var shareBtn = document.querySelectorAll('.article__share');

shareBtn.forEach(function(element) {
  element.addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: pageTitle,
        url: window.location.href
      });
    } else {
      var socialFallback = element.nextElementSibling;
      socialFallback.style.display = 'flex';
      element.style.display = 'none';
    }
  });
})
