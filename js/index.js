$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
      $(".navbar .navbar-brand").addClass("scrolled");
      $(".navbar #navbarNav ul li a").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
      $(".navbar .navbar-brand").removeClass("scrolled");
      $(".navbar #navbarNav ul li a").removeClass("scrolled");
    }
  });
});
