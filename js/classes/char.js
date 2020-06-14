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

        this.attributes.eff_agi =  Math.floor(this.attributes.agi * this.attributes.mult_agi);
        this.attributes.eff_str =  Math.floor(this.attributes.str * this.attributes.mult_str);
        this.attributes.eff_sta =  Math.floor(this.attributes.sta * this.attributes.mult_sta);
        this.attributes.eff_spi =  Math.floor(this.attributes.spi * this.attributes.mult_spi);
        this.attributes.eff_int =  Math.floor(this.attributes.int * this.attributes.mult_int);
        this.attributes.eff_armor = Math.floor(this.attributes.armor * this.attributes.mult_armor);

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
