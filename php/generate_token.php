<?php
include 'jwt.php';

// Generar el token
$user_id = 1; // Ejemplo de ID de usuario
$token = generateToken($user_id);
echo "Token JWT: " . $token;
