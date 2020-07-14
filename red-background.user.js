// ==UserScript==
// @name         Red Background
// @description  Turns website background to red
// @author       Ingy döt Net

// @namespace    https://github.com/
// @updateURL    https://github.com/goodweatherinseattle/tampermonkey/raw/master/red-background.user.js

// @match        http://ingy.net
// @require      http://coffeescript.org/browser-compiler/coffeescript.js

// @version      0.5
// ==/UserScript==
var user_script_coffee = (<><![CDATA[
#------------------------------------------------------------------------------

document.body.style.background = 'red'

#------------------------------------------------------------------------------
]]></>).toString(); eval(this.CoffeeScript.compile(user_script_coffee));
//# vim: set ft=coffee sw=2:
