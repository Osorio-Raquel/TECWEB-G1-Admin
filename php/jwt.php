<?php
require_once __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function generateToken($user_id)
{
    // Llave secreta para firmar el token, puedes almacenarla de manera segura en un entorno de producción
    $key = 'secret_key';  

    // Carga útil del token, incluye el identificador del usuario y el tiempo de expiración
    $payload = array(
        'iss' => 'localhost',  // Emisor del token
        'sub' => $user_id,     // ID del usuario
        'iat' => time(),       // Tiempo de emisión
        'exp' => time() + (60 * 60 * 24)  // Expiración del token (1 día)
    );

    // Genera y devuelve el token JWT
    return JWT::encode($payload, $key, 'HS256');
}

function verifyToken($token)
{
    // Llave secreta usada para verificar la firma del token
    $key = 'secret_key'; 

    try {
        // Decodifica el token usando la llave secreta y el algoritmo HS256
        $decoded = JWT::decode($token, new Key($key, 'HS256'));

        // Si el token es válido, devuelve el ID del usuario decodificado
        return array('success' => true, 'user_id' => $decoded->sub);
    } catch (Exception $e) {
        // Si hay un error (token inválido o expirado), devuelve el error
        return array('success' => false, 'error' => $e->getMessage());
    }
}
?>
