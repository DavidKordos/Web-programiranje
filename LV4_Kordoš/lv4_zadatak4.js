"use strict";
class Macka {
    constructor(ime, boja, dob, spol) {
        this.ime = ime;
        this.boja = boja;
        this.dob = dob;
        this.spol = spol;
    }
    opis() { return `Ime: ${this.ime}, boja: ${this.boja}, dob: ${this.dob}, spol: ${this.spol}.`; }
    promijeniDob(novaDob) { this.dob = novaDob; }
}
const tigar = new Macka("Tigar", "narančasta", 4, "muški");
const micika = new Macka("Micika", "bijela", 2, "ženski");
const ispisMacke = document.getElementById("macke");
const prviRed = document.createElement("p");
prviRed.textContent = tigar.opis();
ispisMacke.appendChild(prviRed);
micika.promijeniDob(3);
const drugiRed = document.createElement("p");
drugiRed.textContent = `Nova dob Micike: ${micika.dob}`;
ispisMacke.appendChild(drugiRed);
document.getElementById("izmjena").textContent = `Dokument je posljednji put izmijenjen: ${document.lastModified}`;
console.log("Mačka kao JSON:", JSON.stringify(tigar));
