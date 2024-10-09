// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 1) {
      $(".navbar").addClass("solid-nav");
      console.log("solid-nav");
    } else {
      $(".navbar").removeClass("solid-nav");
      console.log("no-solid-nav");
    }
  });
});
