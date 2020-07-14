// ==UserScript==
// @name         Red Background
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  SquareUp improvements for Good Weather
// @author       Ingy döt Net
// @require      http://coffeescript.org/browser-compiler/coffeescript.js
// @match        http://ingy.net
// @match        https://www.goodweatherinseattle.com/
// ==/UserScript==
var user_script_coffee = (<><![CDATA[
//#----------------------------------------------------------------------------

alert 'OK'

//#----------------------------------------------------------------------------
]]></>).toString(); eval(this.CoffeeScript.compile(user_script_coffee));
//# vim: set ft=coffee sw=2:
