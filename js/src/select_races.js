'use strict';

function populateRacesDropdown(){
    var select_race = document.getElementById('char_race');
    for (let r in classes.druid.races) {
        select_race.add(new Option(classes.druid.races[r]));
    };
};

populateRacesDropdown()