/**
 * Self executing anonymous function to keep everything out of the global
 * scope.
 *
 * @author JohnG <john.gieselmann@gmail.com>
 */
 (function(window, document, undefined, $) {

    // keep track of some common jq objects
    $win = $(window);
    $body = $("body");

    $(".js-nav-toggle").on("click", function(e) {
      e.stopPropagation();

      $toggle = $(this);
      $nav = $(".js-nav");

      function showNav() {
        $nav.addClass("active");
        $toggle.addClass("active");
      }

      function hideNav() {
        $nav.removeClass("active");
        $toggle.removeClass("active");
      }

      if ($toggle.hasClass("active")) {
        $body.off("click", hideNav);
        hideNav();
      } else {
        $body.on("click", hideNav);
        showNav();
      }
    });

})(window, document, undefined, jQuery);
