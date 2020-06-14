'use strict';

class Character {
    constructor(species) {
        this.race = species;
        this.attributes = {
            str: 0,
            agi: 0,
            sta: 0,
            spi: 0,
            int: 0,
            mult_str: 1.0,
            mult_agi: 1.0,
            mult_sta: 1.0,
            mult_spi: 1.0,
            mult_int: 1.0,
            armor: 0,
            mult_armor: 1.0,
            hitR: 0,
            hit: 0,
            critR: 0,
            crit: 0,
            defR: 0,
            def: 0,
            hasteR: 0,
            haste: 0,
            dodgeR: 0,
            dodge: 0,
            expR: 0,
            exp: 0,
            ap: 0,
            sp: 0,
            sphitR: 0,
            sphit: 0,
            heal: 0,
        };

        this.loadRace();

    };

    loadRace() {
        for (let race of races) {
            if (this.race == race.name) {
                for (let [key1, value1] of Object.entries(this.attributes)) {
                    for (let [key2, value2] of Object.entries(race)) {
                        if (key1 == key2) {
                            if (key1 == 'mult_armor') {
                                this.attributes[key1] = value1 * value2;
                            } else {
                                this.attributes[key1] += value2;
                            };
                        };
                    };
                };
            };
        };
    };
};
