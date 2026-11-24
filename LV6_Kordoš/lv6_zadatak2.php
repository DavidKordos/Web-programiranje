<?php
$putanja = __DIR__ . '/tekst.txt';
$datoteka = fopen($putanja, 'r');
$str_tekst = fread($datoteka, filesize($putanja));
fclose($datoteka);
$rijeci = explode(' ', $str_tekst);
$datoteka = fopen(__DIR__ . '/rijeci.txt', 'w');
fwrite($datoteka, implode(PHP_EOL, $rijeci));
fclose($datoteka);
$pozicija = mb_strpos($str_tekst, 'k', 0, 'UTF-8');
$broj = mb_substr_count($str_tekst, 'k', 'UTF-8');
?>
<!DOCTYPE html>
<html lang="hr"><head><meta charset="UTF-8"><title>Zadatak 2</title></head>
<body>
<h1>Analiza datoteke tekst.txt</h1>
<p><?= htmlspecialchars($str_tekst, ENT_QUOTES, 'UTF-8') ?></p>
<p><?php if ($pozicija === false): ?>Slovo k se ne pojavljuje.
<?php else: ?>Prvi put se slovo k pojavljuje na <?= $pozicija + 1 ?>. mjestu i ukupno se pojavljuje <?= $broj ?> puta.<?php endif; ?></p>
<p><a href="index.php">Početna</a></p>
</body></html>
