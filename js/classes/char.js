'use strict';

class Character {
    constructor(species) {
        this.race = species;
        this.attributes = {
            base_hp: 0,
            base_mp: 0,
            base_str: 0,
            base_agi: 0,
            base_sta: 0,
            base_spi: 0,
            base_int: 0,
            base_armor: 0,
            plus_str: 0,
            plus_agi: 0,
            plus_sta: 0,
            plus_spi: 0,
            plus_int: 0,
            plus_armor: 0,
            mult_str: 1.0,
            mult_agi: 1.0,
            mult_sta: 1.0,
            mult_spi: 1.0,
            mult_int: 1.0,
            mult_hp: 1.0,
            mult_mp: 1.0,
            mult_armor: 1.0,
            bonus_armor: 0,
            hitR: 0,
            hit: 0,
            critR: 0,
            crit: 0,
            defR: 350,
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
            spcritR: 0,
            spcrit: 0,
            sphaste: 0,
            sphasteR: 0,
            heal: 0,
        };

        this.loadRace();
        this.calculateStats();

    };

    calculateStats () {
        // Net stats
        this.attributes.net_agi = this.attributes.base_agi + this.attributes.plus_agi;
        this.attributes.net_str = this.attributes.base_str + this.attributes.plus_str;
        this.attributes.net_sta = this.attributes.base_sta + this.attributes.plus_sta;
        this.attributes.net_spi = this.attributes.base_spi + this.attributes.plus_spi;
        this.attributes.net_int = this.attributes.base_int + this.attributes.plus_int;
        this.attributes.net_armor = this.attributes.base_armor + this.attributes.plus_armor;

        // Effective stats after multipliers
        this.attributes.eff_agi =  Math.floor(this.attributes.net_agi * this.attributes.mult_agi);
        this.attributes.eff_str =  Math.floor(this.attributes.net_str * this.attributes.mult_str);
        this.attributes.eff_sta =  Math.floor(this.attributes.net_sta * this.attributes.mult_sta);
        this.attributes.eff_spi =  Math.floor(this.attributes.net_spi * this.attributes.mult_spi);
        this.attributes.eff_int =  Math.floor(this.attributes.net_int * this.attributes.mult_int);
        this.attributes.eff_armor = Math.floor(this.attributes.net_armor * this.attributes.mult_armor);
        this.attributes.eff_armor += this.attributes.bonus_armor;
        this.attributes.eff_hp = Math.floor((this.base_hp + this.attributes.eff_sta * 10) * this.attributes.mult_hp);
        this.attributes.eff_mp = Math.floor((this.attributes.base_mp + this.attributes.eff_int * 15) * this.attributes.mult_mp);

        // Attributes from stats and rating
        this.attributes.eff_dodge += this.attributes.base_dodge
                                  + this.attributes.eff_agi / 14.7059
                                  + this.attributes.dodgeR / 18.92;
        this.attributes.eff_def += this.attributes.defR / 2.36;
        this.attributes.eff_armor += this.attributes.eff_agi * 2;
        this.attributes.eff_exp += this.attributes.expR / 3.94;
        this.attributes.eff_hit += this.attributes.hitR / 15.76;
        this.attributes.eff_crit += this.attributes.critR / 22.08;
        this.attributes.eff_haste += this.attributes.hasteR / 15.76;
        this.attributes.eff_sphit += this.attributes.sphitR / 12.62;
        this.attributes.eff_spcrit += this.attributes.spcritR / 22.08;
        this.attributes.eff_sphaste += this.attributes.sphasteR / 15.76;

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
