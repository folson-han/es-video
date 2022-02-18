"use strict";
function setStyle(elem, obj) {
    for (var i in obj) {
        elem.style[i] = obj[i];
    }
}
var PlayerAdapter = /** @class */ (function () {
    function PlayerAdapter(props) {
        this.video = window.document.createElement("video");
        setStyle(this.video, {
            width: "100px",
            height: "100px",
        });
    }
    return PlayerAdapter;
}());
var Player = /** @class */ (function () {
    function Player(props) {
        this.player = window.document.createElement("div");
    }
    Player.prototype.videoEventInit = function () {
    };
    return Player;
}());
