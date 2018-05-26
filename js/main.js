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

//    /**
//     * Object literal class.
//     *
//     * @author JohnG <john.gieselmann@gmail.com>
//     */
//    var app = {
//        init: function() {
//
//        }
//    };
//
//    app.init();

//    /**
//     * Function class.
//     *
//     * @author JohnG <john.gieselmann@gmail.com>
//     */
//    function AppClass() {
//        var self = this;
//        
//        this.init = function() {
//
//        };
//    }
//
//    // instantiate and initialize the class
//    var app = new AppClass();
//    app.init();

 })(window, document, undefined, jQuery);
