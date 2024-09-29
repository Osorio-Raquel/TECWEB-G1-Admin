<?php
$host = 'localhost';  // Cambia a la dirección de tu servidor MySQL si es necesario
$db = 'AdminPortalWeb';  // Cambia al nombre de tu base de datos real
$user = 'root';  // Cambia a tu nombre de usuario de MySQL
$pass = '';  // Cambia a tu contraseña de MySQL

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die("Fallo la conexión: " . $mysqli->connect_error);
}
?>
