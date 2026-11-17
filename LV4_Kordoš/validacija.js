"use strict";
const kolegiji = [
    "Web programiranje", "Baze podataka", "Računalne mreže", "Programiranje 2",
    "Operacijski sustavi", "Informacijski sustavi", "Multimedijski sustavi", "Umjetna inteligencija"
];
const ECTS = 5;
const obrazac = document.getElementById("prijava");
const rezultat = document.getElementById("rezultat");
const popis = document.getElementById("popis");
const poljeBroj = document.getElementById("brojKolegija");

function poruka(tekst, greska = false) {
    rezultat.textContent = tekst;
    rezultat.classList.toggle("greska", greska);
}
function procitajImePrezime() {
    const dijelovi = document.getElementById("ime").value.trim().split(/\s+/);
    if (dijelovi.length < 2 || dijelovi.some((dio) => dio.length === 0)) return null;
    return { ime: dijelovi[0], prezime: dijelovi.slice(1).join(" ") };
}
function procitajBroj() {
    const tekst = poljeBroj.value.trim();
    if (tekst === "") return null;
    const broj = Number(tekst);
    return Number.isInteger(broj) && broj >= 1 && broj <= 8 ? broj : null;
}
function provjeriEmail(email) {
    const prviAt = email.indexOf("@");
    if (prviAt === -1) return "E-mail adresa mora sadržavati znak @.";
    if (prviAt !== email.lastIndexOf("@")) return "E-mail adresa smije sadržavati samo jedan znak @.";
    if (prviAt < 2) return "Prije znaka @ moraju biti barem 2 znaka.";
    const domena = email.slice(prviAt + 1);
    if (domena.length < 2) return "Nakon znaka @ moraju biti barem 2 znaka.";
    const zadnjaTocka = domena.lastIndexOf(".");
    if (zadnjaTocka === -1) return "Nakon znaka @ mora postojati točka.";
    if (domena.slice(zadnjaTocka + 1).length < 2) return "Nakon zadnje točke moraju biti barem 2 znaka.";
    return "";
}

document.getElementById("pozdrav").addEventListener("dblclick", () => {
    const osoba = procitajImePrezime();
    alert(osoba ? `Dobro došli, ${osoba.ime} ${osoba.prezime}!` : "Unesite ime i prezime (barem dvije riječi).");
});
const pomoc = document.getElementById("pomoc");
pomoc.addEventListener("mouseover", () => poruka("Broj kolegija mora biti između 1 i 8."));
pomoc.addEventListener("mouseout", () => poruka(""));
pomoc.addEventListener("focus", () => poruka("Broj kolegija mora biti između 1 i 8."));
pomoc.addEventListener("blur", () => poruka(""));

document.getElementById("kolegiji").addEventListener("mouseup", () => {
    const broj = procitajBroj();
    if (broj === null) { popis.value = ""; poruka("Broj kolegija mora biti između 1 i 8.", true); return; }
    popis.value = kolegiji.slice(0, broj).map((naziv, i) => `Kolegij ${i + 1}: ${naziv}`).join("\n");
    poruka(`Ukupan broj ECTS bodova: ${broj * ECTS}.`);
});
document.getElementById("obrisi").addEventListener("click", () => {
    if (confirm("Želite li obrisati odabrane kolegije?")) { popis.value = ""; poruka(""); }
});
// Ako se broj naknadno promijeni, popis se mora ponovno generirati.
poljeBroj.addEventListener("input", () => { popis.value = ""; poruka(""); });

document.getElementById("prijavi").addEventListener("click", () => {
    const osoba = procitajImePrezime();
    if (osoba === null) { alert("Unesite ispravno ime i prezime (barem dvije riječi)."); return; }
    const email = document.getElementById("email").value.trim();
    const pogreska = provjeriEmail(email);
    if (pogreska) { alert(pogreska); return; }
    const broj = procitajBroj();
    if (broj === null) { alert("Broj kolegija mora biti cijeli broj između 1 i 8."); return; }
    if (popis.value.trim() === "") { alert("Prvo kliknite na gumb Kolegiji kako biste odabrali kolegije."); return; }
    const potvrda = confirm(`Vaše ime je ${osoba.ime}, vaše prezime ${osoba.prezime}, vaša e-mail adresa ${email}. Broj kolegija: ${broj} (${broj * ECTS} ECTS). Potvrđujete li prijavu?`);
    obrazac.reset();
    popis.value = "";
    poruka(potvrda ? "Prijava je zaprimljena." : "Prijava je otkazana.");
});
