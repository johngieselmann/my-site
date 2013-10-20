/**
 * Self executing function on page load.
 */
(function(window, document, $, undefined){

    var wind = $(window);
    var doc = $(document);
    var bod = $('body');

    //adjust some things while scrolling
    var scrolling = {

        midLine: function() {
            return parseInt(wind.height() / 2);
        }

        ,changeColor: function() {
            var midLine = scrolling.midLine();

            
        }
    };

    var nav = {
        items: null

        ,init: function() {
            nav.items = $(".js-nav");
            nav.items.on("click", nav.goTo);
        }
        
        ,goTo: function(e, el) {
            if (typeof el == "undefined") {
                el = $(this);
            }

            var rel = el.attr("rel");
            var section = $("." + rel + "-section");
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
                    var egg = $(eggs[i]["selector"]);
                    egg.attr("animate", true);
                    animating = true;

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
                            animating = false;
                            strokes = [];
                        }, 1000);

                    }, 3200);
                }
            }
        }, true);
    }


})(window, document, $, undefined);
