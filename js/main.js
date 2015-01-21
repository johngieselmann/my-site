(function(window, document, $, undefined){

    var nav = {
        items : null,

        active : false,

        // nav elements
        $moveEls : null,
        $toggle  : null,

        /**
         * Initialize the navigation.
         *
         * @return void
         */
        init : function() {
            nav.$moveEls = $(".js-nav-move");
            nav.$toggle = $(".js-nav-toggle");

//            nav.items = $(".js-nav");
//            nav.items.on("click", nav.goTo);

            nav.$toggle.on("click", nav.toggle);
        },

        /**
         * Toggle the nav menu state.
         *
         * @param obj e
         * @return void
         */
        toggle : function(e) {
            if (nav.active) {
                nav.$moveEls.removeClass("nav-active");
                nav.active = false;
            } else {
                nav.$moveEls.addClass("nav-active");
                nav.active = true;
            }
        },

        goTo: function(e, el) {
            if (typeof el == "undefined") {
                el = $(this);
            }

            var rel = el.attr("rel");
            var section = $(".js-" + rel + "-section");
            var top = section.offset().top;

            bod.animate({
                scrollTop: top
            });
        }
    };
    nav.init();

    //easter has come early (unless it's actually easter)
    //in that case, it's right on time.
    if (window.addEventListener) {
        var strokes = [];
        var animating = false;
        var eggs = {
            "scorpion" : {
                "selector" : ".js-scorpion",
                "audio"    : ".js-scorpion-audio",
                "keys"     : "37,37,66"
            },
            "raiden"   : {
                "selector" : ".js-raiden",
                "keys"     : "1,2,3"
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


})(window, document, $, undefined);
