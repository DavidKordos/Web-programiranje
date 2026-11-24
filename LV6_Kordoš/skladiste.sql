CREATE DATABASE IF NOT EXISTS skladiste CHARACTER SET utf8mb4 COLLATE utf8mb4_croatian_ci;
USE skladiste;
CREATE TABLE korisnici (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 ime VARCHAR(50) NOT NULL,
 prezime VARCHAR(50) NOT NULL,
 email VARCHAR(100) NOT NULL UNIQUE,
 k_ime VARCHAR(30) NOT NULL UNIQUE,
 lozinka VARCHAR(255) NOT NULL,
 uloga VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_croatian_ci;
CREATE TABLE proizvodi (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 proizvod VARCHAR(100) NOT NULL,
 opis TEXT NULL,
 kolicina INT UNSIGNED NOT NULL DEFAULT 0,
 cijena DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_croatian_ci;
INSERT INTO proizvodi (proizvod, opis, kolicina, cijena) VALUES
 ('kruh', 'Krušni proizvod', 1, 1.20),
 ('Mlijeko', 'Trajno mlijeko 1 L', 25, 1.29),
 ('Jaja', 'Pakiranje od 10 komada', 15, 2.99);
INSERT INTO korisnici (ime, prezime, email, k_ime, lozinka, uloga) VALUES
 ('David', 'Kordoš', 'admin@example.com', 'admin', '$2y$12$EBoC0pCbP7mitcdOus.23OFS56chfsMa5x7ZDpTupzmOPA0tQFHEi', 'administrator'),
 ('Pero', 'Peric', 'pero@example.com', 'pero', '$2y$12$b3iiqauYzCAQSIrQA8qCP.JjlYCpYgl.TTWFlphxKyprefS.xW4wm', 'korisnik');
