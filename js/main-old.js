(function(window, document, $, undefined){

  /**
   * The singleton nav menu class.
   */
  var nav = {
    // nav menu state
    active : false,

    // nav elements
    $moveEls : null,
    $toggle : null,
    $gotoEls : null,

    /**
     * Initialize the navigation.
     *
     * @return void
     */
    init : function() {
      // find some elements
      nav.$moveEls = $(".js-nav-move");
      nav.$toggle = $(".js-nav-toggle");
      nav.$gotoEls = $(".js-nav-goto");

      // bind some events
      nav.$toggle.on("click", nav.toggle);
      nav.$gotoEls.on("click", nav.gotoSection);

      $(window).on("scroll", nav.setActiveMenu);
      nav.setActiveMenu(null);
    },

    /**
     * Toggle the nav menu state. We can also force the menu to inactive
     * (hide it) by passing in true to the inactive param.
     *
     * @param Event e
     * @param bool inactive
     * @return void
     */
    toggle : function(e, inactive) {
      inactive = inactive || false;

      if (nav.active || inactive === true) {
        nav.$moveEls.removeClass("nav-active");
        $(".js-overlay").removeClass("active");
        nav.active = false;
      } else {
        nav.$moveEls.addClass("nav-active");
        $(".js-overlay").addClass("active");
        nav.active = true;
      }
    },

    /**
     * Get the section related to the link.
     *
     * @param jQuery $el
     * @return jQuery
     */
    getSection : function($el) {
      var name = $el.attr("data-rel");
      return $("[data-section='" + name + "']");
    },

    /**
     * Go to a section of the site.
     *
     * @param Event e
     * @param obj el
     * @return void
     */
    gotoSection : function(e, el) {

      var $el = el || $(this);
//      nav.$gotoEls.removeClass("active");
//      $el.addClass("active");

      var $section = nav.getSection($el);
      var sectionTop = $section.offset().top;

      // since we have to hide the nav menu, let that happen before
      // we navigate to the section
      setTimeout(function() {
        $("html, body").animate({
          scrollTop : sectionTop
        }, 300);
      }, 250);

      // hide the menu
      nav.toggle(null, true);

//      setTimeout(nav.setActiveMenu, 500);
      e.preventDefault();
    },

    /**
     * Set the active menu item based on our scroll location on the page.
     * I realize this is probably not the most optimized, but it is quick
     * and dirty for a website that no one even visits so fuck 'em. Wow,
     * terrible attitude, I apologize.
     *
     * @param Event e
     * @return void
     */
    setActiveMenu : function(e) {

      // first see if we are at the bottom of the page so we can just
      // set the last item, otherwise we will check all the others
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        nav.$gotoEls.removeClass("active");
        nav.$gotoEls.last().addClass("active");
        return;
      }

      // get the current scroll position
      var scrollPos = $(document).scrollTop();

      // check if we are at the top to avoid some more looping
      if (scrollPos <= 0) {
        nav.$gotoEls.removeClass("active");
        nav.$gotoEls.first().addClass("active");
        return;
      }

      // check all the sections of the nav links to see how we are
      // in relation to the scroll position
      nav.$gotoEls.each(function () {
        var $link = $(this);
        var $section = nav.getSection($link);

        // if the top of the section is above the top of the document
        // and the bottom of the section is below the scrollPos
        if (  $section.position().top <= scrollPos
          && ($section.position().top + $section.height()) > scrollPos
        ) {
          nav.$gotoEls.removeClass("active");
          $link.addClass("active");
        }
      });
    }
  };

  /**
   * The site singleton class.
   */
  var site = {

    // some templates for using later
//    temp : {
//      $skillName : $("<div></div>").addClass("skill-name"),
//      $skillVal : $("<div></div>").addClass("skill-value"),
//      $skillInd : $("<span></span>").addClass("skill-indicator")
//    },

    /**
     * Initialize the site.
     *
     * @return void
     */
    init : function() {
      site.scale();
      site.createSkillsList();

      $(window).on("resize", site.scale);
    },

    /**
     * Scale the site.
     *
     * @return void
     */
    scale : function() {
      var $main = $("main");
      $main.css({
        "min-height" : $(window).outerHeight()
      });
    },

    /**
     * Create the list of skills from the skills object.
     *
     * @return void
     */
    createSkillsList : function() {
      var $list = $(".js-skill-list");

      for (var i in skills) {
        var group = skills[i];

        // create a group for these skills
        var $groupName = $("<h3></h3>")
          .text(i);
        var $skillGroup = $("<div></div>")
          .addClass("skill-group")
          .addClass("column-item")
          .append($groupName);
        var $skillItems = $("<div></div>")
          .addClass("skill-items");

        // create all the line items for this group
        for (var name in group) {
          $skillItems.append(site.createSkillItem(name, group[name]));
        }

        $skillGroup.append($skillItems);

        // add the group to the list
        $list.append($skillGroup);
      }
    },

    /**
     * Create an item for the skill list.
     *
     * @param str name
     * @param int value
     * @return jquery
     */
    createSkillItem : function(name, value) {
      // make sure the value is an integer
      value = parseInt(value);

      var $item = $("<div></div>")
        .addClass("skill-item");

      // add the name to the item
      var $name = $("<div></div>")
        .addClass("skill-name")
        .text(name);
      $item.append(name);

//      var $value = $("<div></div>")
//        .addClass("skill-value");
//
//      // create an indicator for each possible value
//      var maxVal = 5;
//      for (var i = 1; i <= maxVal; i++) {
//        var $ind = $("<span></span>")
//          .addClass("skill-indicator");
//
//        // flag this indicator as having the value
//        if (i <= value) {
//          $ind.addClass("fa fa-circle")
//            .addClass("full");
//        } else {
//          $ind.addClass("fa fa-circle-o")
//            .addClass("empty");
//        }
//
//        // add the indicator to the value element
//        $value.append($ind);
//      }
//
//      // add the value bar to the item
//      $item.append($value);

      return $item;
    }
  };

  /**
   * My skills as an object. The numbers should be my perceived skill level
   * where 1 = minimal and 5 = max. These get rendered into the view via
   * the site class so I don't have to write that HTML repeatedly.
   */
   //jam
  var skills = {
    "Languages" : {
      "PHP"         : 3,
      "Python"      : 3,
      "JavaScript"  : 3,
      "HTML"        : 3,
      "CSS"         : 3,
      "Ruby"        : 3,
      "Java"        : 3,
      "Objective-C" : 3,
    },
    "Frameworks"  : {
      "REST"        : 3,
      "Laravel"     : 3,
      "Zend"        : 3,
      "React"       : 3,
      "Vue"         : 3,
      "Angular"     : 3,
      "jQuery"      : 3,
      "Node"        : 3,
      "Rails"       : 3,
      "Sass"        : 3,
      "WordPress"   : 3,
    },
    "Data"  : {
      "MySQL"         : 3,
      "MongoDB"       : 3,
      "DynamoDB"      : 3,
      "Redis"         : 3,
      "Elasticsearch" : 3,
    },
    "Infrastructure"  : {
      "AWS"           : 3,
      "GCP"           : 3,
      "Vagrant"       : 3,
      "Docker"        : 3,
      "Kubernetes"    : 3,
      "Chef"          : 3,
    },
    "Tools" : {
      "Vim"         : 3,
      "Git"         : 3,
      "Slack"       : 3,
      "Jira"        : 3,
      "Confluence"  : 3,
      "Adobe Suite" : 3,
      "Stripe"      : 3,
      "Segment"     : 3,
      "DataDog"     : 3,
      "Postman"     : 3,
    }
  };

  //easter has come early (unless it's actually easter)
  //in that case, it's right on time.
  if (window.addEventListener) {
    var strokes = [];
    var animating = false;
    var eggs = {
      "scorpion" : {
        "selector" : ".js-scorpion",
        "audio"  : ".js-scorpion-audio",
        "keys"   : "37,37,66"
      },
      "raiden"  : {
        "selector" : ".js-raiden",
        "keys"   : "1,2,3"
      }
    };

    window.addEventListener("keydown", function(e){
      //don't listen if we are currently animating
      if (animating) {
        return true;
      }

      //track this keystroke
      strokes.push( e.keyCode );

      //now check our eggs for a match
      for (var i in eggs) {

        var keys = eggs[i]["keys"];
        if (strokes.toString().indexOf(keys) >= 0) {
          
          //animate the egg
          var container = $(".js-eggs").show();
          var egg = $(eggs[i]["selector"]);
          setTimeout(function() {
            egg.attr("animate", true);
            animating = true;
          }, 0);

          //play the audio if we have it
          var audio = $(eggs[i]["audio"]);
          if (audio.length) {
            setTimeout(function() {
              audio[0].play();
            }, 800);
          }

          //deanimate the egg
          setTimeout(function() {
            egg.attr("deanimate", true);

            //now clear the animation attributes
            setTimeout(function() {
              egg.removeAttr("animate").removeAttr("deanimate");
              container.hide();
              animating = false;
              strokes = [];
            }, 1000);

          }, 3200);
        }
      }
    }, true);
  }

  $(document).ready(function() {
    nav.init();
    site.init();
  });


})(window, document, $, undefined);
