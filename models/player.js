/*jslint node: true */
'use strict';

var Player = function (name) {
	this.name 	= name;
	this.gold 	= 6;
	this.army 	= 0;
	this.hand 	= [];
	this.desk 	= [];
	this.leader = [];
};

Player.prototype.count = function() {
	// body...
};

module.exports = Player;