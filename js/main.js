var modifiers = {
    siteHeaderOpen: 'site-header--open',
    formGroupOpen: 'form-group--open'
  };


// SITE-HEADER
var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.js-site-header-toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeader.classList.toggle(modifiers.siteHeaderOpen);
  });
}
