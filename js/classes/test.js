'use strict';


function calcHP() {
    let stam = document.getElementById('inpStam').value;
    let hp = stam * 10;
    let out = new String(`HP: ${hp}`);
    health.innerHTML = out;
}

