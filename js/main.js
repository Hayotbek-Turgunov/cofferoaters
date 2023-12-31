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

// FORM-GROUP
var elsFormGroupToggler = document.querySelectorAll('.js-form-group-toggler');

if (elsFormGroupToggler.length > 0) {
  elsFormGroupToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function () {
      toggler.closest('.form-group').classList.toggle(modifiers.formGroupOpen);
    });
  });
}

