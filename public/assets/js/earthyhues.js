// $.noConflict();


$(document).ready(function () {
  $(document).on('click', '.mobile-nav__toggler', function (e) {
   
    $('.mobile-nav__container').empty();
    e.preventDefault();
    $(".mobile-nav__wrapper").toggleClass("expanded");
    $("body").toggleClass("locked");

    if ($(".main-menu").length && $(".mobile-nav__container").length) {
      let navContent = document.querySelector(".main-menu").innerHTML;

      let mobileNavContainer = document.querySelector(".mobile-nav__container");
      
      $('.mobile-nav__container').append(navContent);
    }
    if ($(".mobile-nav__container .main-menu__list").length) {
      let dropdownAnchor = $(
        ".mobile-nav__container .main-menu__list .dropdown > a"
      );
      dropdownAnchor.each(function () {
        let self = $(this);
        let toggleBtn = document.createElement("BUTTON");
        toggleBtn.setAttribute("aria-label", "dropdown toggler");
        toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
        self.append(function () {
          return toggleBtn;
        });
        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("expanded");
          self.parent().toggleClass("expanded");
          self.parent().parent().children("ul").slideToggle();
        });
      });
    }


  });


});

function activateMenu(){
  alert('ddd');
}