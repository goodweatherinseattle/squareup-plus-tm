// ==UserScript==
// @name         Red Background
// @description  SquareUp improvements for Good Weather
// @author       Ingy döt Net

// @namespace    https://github.com/
// @updateURL    https://github.com/goodweatherinseattle/tampermonkey/raw/master/squareup-plus.user.js

// @match        https://www.goodweatherinseattle.com/
// @require      http://coffeescript.org/browser-compiler/coffeescript.js

// @grant        unsafeWindow

// @version      0.1
// ==/UserScript==
var user_script_coffee = (<><![CDATA[
//#----------------------------------------------------------------------------

window.w = window.unsafeWindow = unsafeWindow

document.title = 'Hacked 1'

//#----------------------------------------------------------------------------
]]></>).toString(); eval(this.CoffeeScript.compile(user_script_coffee));
//# vim: set ft=coffee sw=2:
