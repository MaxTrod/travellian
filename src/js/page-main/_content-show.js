function showContent() {
  const titleLink = document.querySelectorAll('.slide-trip__title-link');
  titleLink.forEach(link => {
    link.addEventListener('focusin', function() {
      this.closest('.slide-trip__card').classList.add('open-content');
    })
    link.addEventListener('focusout', function() {
      this.closest('.slide-trip__card').classList.remove('open-content');
    })
  })

}
showContent();