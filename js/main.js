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


    var skills = {
      "Dev" : {
        "PHP"           : 5,
        "HTML"          : 5,
        "CSS"           : 5,
        "Laravel"       : 4,
        "MySQL"         : 4,
        "MongoDB"       : 4,
        "JavaScript"    : 4,
        "jQuery"        : 4,
        "Sass / Less"   : 4,
        "React.js"      : 3,
        "Angular.js"    : 3,
        "Redis"         : 3,
        "Elasticsearch" : 3,
        "Swift"         : 2,
      }
    };

    function setSkills() {
      var $skills = '';

      // loop through all the skill groups and create the HTML
      for (var group in skills) {

        var $groupSkills = '';
        for (var name in skills[group]) {

          // create the individual skill
          var level = skills[group][name];
          var $skill = '<div class="skill-set">';

          $skill += '<div class="skill">' + name + '</div>';

          $skill += '<div class="level">';
          for (var i = 1; i <= 5; i++) {
            if (i <= level) {
              $skill += '<i class="fa fa-circle"></i>';
            } else {
              $skill += '<i class="fa fa-circle-o"></i>';
            }
          }
          $skill += "</div>";

          $skill += "</div>";

          // append the individual skill to the group
          $groupSkills += $skill;
        }

        $skills += '<div class="skill-group">'
          + '<h4>' + group + '</h4>'
          + $groupSkills
          + '</div>';
      }
      console.log($skills);

      $(".js-skills").html($skills);

    }
    setSkills();

})(window, document, undefined, jQuery);
