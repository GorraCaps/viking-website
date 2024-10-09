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

/* send email */
function sendEmail() {
    if (document.getElementById("navnInput").value == "" || document.getElementById("lastNameInput").value == "" || document.getElementById("cityInput").value == "" || document.getElementById("countryInput").value == "" || document.getElementById("birthInput").value == "") {
      alert("Please fill in all fields");
      return;
    } else {
        var navn = document.getElementById("navnInput").value;
        var lastName = document.getElementById("lastNameInput").value;
        var city = document.getElementById("cityInput").value;
        var country = document.getElementById("countryInput").value;
        var birth = document.getElementById("birthInput").value;
        var emailLink = document.getElementById("emailLink");
        window.location.href = `mailto:example@vikingclan.com?subject=Joining%20the%20Viking%20Clan&body=Greetings%20Viking%20Clan%20Chief,%0D%0A%0D%0AI%20am%20interested%20in%20joining%20your%20Viking%20clan.%20Here%20is%20a%20little%20about%20me:%0D%0A%0D%0A-%20Name: ${navn + " " + lastName}%0D%0A-%20City: ${city} %0D%0A-%20Country: ${country}%0D%0A-%20Date of birth: ${birth}%0D%0A-%20Skills%20or%20Experience%20with%20Viking%20Traditions:%0D%0A%0D%0AWhy%20I%20want%20to%20join:%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request!%0D%0A%0D%0ASincerely,%0D%0A${navn + " " + lastName}`;
        emailLink.click();
    }
    
  }
