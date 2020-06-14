'use strict';

// var PLAYER = PLAYER || {}

// PLAYER.STATS = {

//     init: function () {
//         var view = this;
//         view.events();
//     },

//     events: function () {
//         var view = this;
//         view.calculateStats();

//     },

//     calculateStats: function () {
//         let view = this;

//         let player = new Character()
//     }
// }

function loadCharacter(species) {
    console.log(species.value)
    let player = new Character(species.value);

    stat_str.innerHTML = player.attributes.str;
    stat_sta.innerHTML = player.attributes.sta;
    stat_agi.innerHTML = player.attributes.agi;
    stat_int.innerHTML = player.attributes.int;
    stat_spi.innerHTML = player.attributes.spi;
};