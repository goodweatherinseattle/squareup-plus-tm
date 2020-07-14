// ==UserScript==
// @name         Red Background
// @namespace    http://tampermonkey.net/
// @description  SquareUp improvements for Good Weather
// @author       Ingy döt Net
// @require      http://coffeescript.org/browser-compiler/coffeescript.js
// @match        https://www.goodweatherinseattle.com/
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
