<?php
$ime = is_string($_GET['ime'] ?? null) ? trim($_GET['ime']) : '';
$prezime = is_string($_GET['prezime'] ?? null) ? trim($_GET['prezime']) : '';
?>
<!DOCTYPE html>
<html lang="hr"><head><meta charset="UTF-8"><title>Rezultati</title></head>
<body>
<?php if ($ime !== '' && $prezime !== ''): ?>
<h1><?= htmlspecialchars($ime . ' ' . $prezime, ENT_QUOTES, 'UTF-8') ?></h1>
<?php else: ?>
<h1>Dogodila se pogreška.</h1>
<?php endif; ?>
<p><a href="lv6_zadatak3_obrazac.php">Natrag na obrazac</a></p>
<p><a href="index.php">Početna</a></p>
</body></html>
