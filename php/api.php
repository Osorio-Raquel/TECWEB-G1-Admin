<?php
include 'db.php';
include 'jwt.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];
$headers = apache_request_headers();

if (!isset($headers['Authorization'])) {
    echo json_encode(['error' => 'No token provided']);
    exit();
}

$authHeader = $headers['Authorization'];
list($type, $token) = explode(' ', $authHeader);

if (strcasecmp($type, 'Bearer') != 0) {
    echo json_encode(['error' => 'Invalid token type']);
    exit();
}

$verification = verifyToken($token);

if (!$verification['success']) {
    echo json_encode(['error' => 'Invalid token']);
    exit();
}

switch ($method) {
    case 'GET':
        handleGet($mysqli);
        break;
    case 'POST':
        handlePost($mysqli);
        break;
    case 'PATCH':
        handlePatch($mysqli);
        break;
    case 'DELETE':
        handleDelete($mysqli);
        break;
    default:
        echo json_encode(['message' => 'Metodo no soportado']);
        break;
}

function handleGet($mysqli)
{
    $table = isset($_GET['table']) ? $_GET['table'] : null;
    $id = isset($_GET['id']) ? intval($_GET['id']) : null;

    if ($table && $id) {
        $stmt = $mysqli->prepare("SELECT * FROM $table WHERE ID_{$table} = ?");
        $stmt->bind_param("i", $id);
    } else {
        $stmt = $mysqli->prepare("SELECT * FROM $table");
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $records = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($records);
}

function handlePost($mysqli)
{
    $data = json_decode(file_get_contents("php://input"), true);
    $table = isset($_GET['table']) ? $_GET['table'] : null;

    if ($table) {
        switch ($table) {
            case 'Alumnos':
                $stmt = $mysqli->prepare("INSERT INTO Alumnos (ID_Persona, Semestre, MateriasVencidas, Puntaje) VALUES (?, ?, ?, ?)");
                $stmt->bind_param("iiii", $data['ID_Persona'], $data['Semestre'], $data['MateriasVencidas'], $data['Puntaje']);
                break;
            // Repite esto para cada tabla relevante.
        }

        if ($stmt->execute()) {
            echo json_encode(["message" => "$table creado exitosamente"]);
        } else {
            echo json_encode(["message" => "Error al crear en $table"]);
        }
    } else {
        echo json_encode(["message" => "Tabla no proporcionada"]);
    }
}

function handlePatch($mysqli)
{
    $data = json_decode(file_get_contents("php://input"), true);
    $table = isset($_GET['table']) ? $_GET['table'] : null;

    if ($table && !empty($data['id'])) {
        $stmt = $mysqli->prepare("UPDATE $table SET name = ? WHERE ID_{$table} = ?");
        $stmt->bind_param("si", $data['name'], $data['id']);

        if ($stmt->execute()) {
            echo json_encode(["message" => "$table actualizado exitosamente"]);
        } else {
            echo json_encode(["message" => "Error al actualizar en $table"]);
        }
    } else {
        echo json_encode(["message" => "Datos incompletos"]);
    }
}

function handleDelete($mysqli)
{
    $data = json_decode(file_get_contents("php://input"), true);
    $table = isset($_GET['table']) ? $_GET['table'] : null;

    if ($table && !empty($data['id'])) {
        $stmt = $mysqli->prepare("DELETE FROM $table WHERE ID_{$table} = ?");
        $stmt->bind_param("i", $data['id']);

        if ($stmt->execute()) {
            echo json_encode(["message" => "$table eliminado exitosamente"]);
        } else {
            echo json_encode(["message" => "Error al eliminar en $table"]);
        }
    } else {
        echo json_encode(["message" => "ID no proporcionado"]);
    }
}
?>
