<?php
$student = ["David", "Kordoš", "Računarstvo", "12345", "3"];
$auto = [
    "Citroen" => ["model" => "C4", "obujam_motora" => "1600 cm³", "boja" => "siva", "godina_proizvodnje" => 2018, "gorivo" => "dizel"],
    "Mercedes" => ["model" => "A 180", "obujam_motora" => "1332 cm³", "boja" => "crna", "godina_proizvodnje" => 2020, "gorivo" => "benzin"]
];
function kvadrat($broj) { return $broj * $broj; }
class Kupac {
    private $ime;
    private $prezime;
    public function postaviIme($ime) { $this->ime = $ime; }
    public function postaviPrezime($prezime) { $this->prezime = $prezime; }
    public function opis() { return "Kupac je: " . $this->ime . " " . $this->prezime; }
}
$kupacOPG = new Kupac();
$kupacOPG->postaviIme("Ana");
$kupacOPG->postaviPrezime("Marić");
?>
<!DOCTYPE html>
<html lang="hr"><head><meta charset="UTF-8"><title>Zadatak 1</title></head>
<body>
<h1>Nizovi, funkcije i klase</h1>
<h2>Student</h2><ul>
<?php foreach ($student as $vrijednost): ?>
<li><?= htmlspecialchars($vrijednost) ?></li>
<?php endforeach; ?>
</ul>
<h2>Citroen</h2><ul>
<?php foreach ($auto["Citroen"] as $kljuc => $vrijednost): ?>
<li><?= $kljuc ?>: <?= $vrijednost ?></li>
<?php endforeach; ?>
</ul>
<h2>Mercedes</h2><ul>
<li>Model: <?= $auto["Mercedes"]["model"] ?></li>
<li>Obujam motora: <?= $auto["Mercedes"]["obujam_motora"] ?></li>
<li>Boja: <?= $auto["Mercedes"]["boja"] ?></li>
<li>Godina proizvodnje: <?= $auto["Mercedes"]["godina_proizvodnje"] ?></li>
<li>Gorivo: <?= $auto["Mercedes"]["gorivo"] ?></li>
</ul>
<h2>Funkcija</h2><p>Kvadrat broja 5 je <?= kvadrat(5) ?>.</p>
<h2>Klasa Kupac</h2><p><?= htmlspecialchars($kupacOPG->opis()) ?></p>
<p><a href="index.php">Početna</a></p>
</body></html>
