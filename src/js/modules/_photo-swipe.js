import PhotoSwipeLightbox from 'photoswipe/lightbox';

export function initGallery() {
  document.querySelectorAll('.popup-gallery__item').forEach(function(e) {
    let img = new Image(), hrefURL = e.getAttribute('href')
    img.onload = function() {
      e.dataset.pswpWidth = this.width
      e.dataset.pswpHeight = this.height
    }
    img.src = hrefURL
  })
  
  
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.popup-gallery',
    children: '.popup-gallery__item',
    pswpModule: () => import('photoswipe')
  });
  
  lightbox.init();
}


