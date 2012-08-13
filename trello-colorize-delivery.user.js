// ==UserScript==
// @name       Trello card colorizer for Delivery
// @namespace  http://github.com/grimradical/trello-colorize
// @version    0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description  Changes background color of Trello cards to match labels
// @match      https://trello.com/board/software-delivery/*
// @copyright  2012+, Deepak Giridharagopal
// ==/UserScript==

var colorize = function() {
    $(".list-card").css("background-color", "").css("border", "");
    // Blocked
    $(".red-label").css("background-color", "#ff9999");
    // Community
    $(".purple-label").css("background-color", "#cc99ff");
    // From Dev
    $(".green-label").css("background-color", "#99cc66");
    // Internal
    $(".yellow-label").css("background-color", "#ffff99");
    // ???
    $(".orange-label").css("background-color", "#ff9966");
    // ???
    $(".blue-label").css("background-color", "#99ccff");
    // Special visual marker for blocked cards
    $(".red-label").filter(".list-card").css("border", "7px solid red")
};

setInterval(colorize, 1000);
