[HTML5 Boilerplate homepage](http://html5boilerplate.com) | [Documentation
table of contents](TOC.md)

# The JavaScript

Information about the default JavaScript included in the project.

## util.js

This file assigns a utility class to the window so it can be accessed in
the main.js file or others you choose to add. It contains some common checks
and actions.

## main.js

This file sets up a self-executing, anonymous function that contains two 
flavors of empty JavaScript classes that are commented out:

* Object-literal
* Function

## plugins.js

This file can be used to contain all your plugins, such as jQuery plugins and
other 3rd party scripts.

One approach is to put jQuery plugins inside of a `(function($){ ...
})(jQuery);` closure to make sure they're in the jQuery namespace safety
blanket. Read more about [jQuery plugin
authoring](http://docs.jquery.com/Plugins/Authoring#Getting_Started)

## vendor

This directory can be used to contain all 3rd party library code.

Minified versions of the latest jQuery and Modernizr libraries are included by
default. You may wish to create your own [custom Modernizr
build](http://www.modernizr.com/download/).
