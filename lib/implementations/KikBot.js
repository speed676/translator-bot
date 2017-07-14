"use strict";
exports.__esModule = true;
var KikBot //implements Bot 
 = (function () {
    function KikBot(argument) {
        this.myjson = { "hola": "mundo" };
    }
    KikBot.prototype.translateToSystem = function (target) {
        return this.myjson;
    };
    KikBot.prototype.translateToBot = function (target) {
        // TODO
    };
    return KikBot;
}());
