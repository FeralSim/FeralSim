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
    let player = new Character(species.value);

    stat_str.innerHTML = player.attributes.eff_str;
    stat_sta.innerHTML = player.attributes.eff_sta;
    stat_agi.innerHTML = player.attributes.eff_agi;
    stat_int.innerHTML = player.attributes.eff_int;
    stat_spi.innerHTML = player.attributes.eff_spi;
};