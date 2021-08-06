// javascript provided by bootstrap 5 documentation for tooltips to be enabled in the document used on Hololive.html
// documentation link: https://getbootstrap.com/docs/5.0/components/tooltips/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
