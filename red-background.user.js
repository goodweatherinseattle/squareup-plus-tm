// ==UserScript==
// @name         Red Background
// @namespace    https://github.com/
// @updateURL    https://github.com/goodweatherinseattle/tampermonkey/raw/master/red-background.user.js
// @version      0.2
// @description  Turns website background to red
// @author       Ingy döt Net
// @require      http://coffeescript.org/browser-compiler/coffeescript.js
// @match        http://ingy.net
// @match        https://www.goodweatherinseattle.com/
// ==/UserScript==

var user_script_coffee = (<><![CDATA[
#------------------------------------------------------------------------------

document.body.style.background = 'green'

#------------------------------------------------------------------------------
]]></>).toString(); eval(this.CoffeeScript.compile(user_script_coffee));
//# vim: set ft=coffee sw=2:
