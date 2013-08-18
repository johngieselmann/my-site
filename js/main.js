/**
 * Self executing function on page load.
 */
(function(window, document, $, undefined){

    var wind = $(window);
    var doc = $(document);

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

            $('body').animate({
                scrollTop: top
            });
        }
    };
    nav.init();

})(window, document, $, undefined);
