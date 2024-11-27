<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de la Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .result {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }
        a {
            display: block;
            text-align: center;
            text-decoration: none;
            color: #4CAF50;
            font-size: 16px;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        if (isset($_POST['valor1'], $_POST['valor2'], $_POST['operacion'])) {
            $valor1 = floatval($_POST['valor1']);
            $valor2 = floatval($_POST['valor2']);
            $operacion = $_POST['operacion'];

            switch ($operacion) {
                case "suma":
                    $resultado = $valor1 + $valor2;
                    echo "<div class='result'>La suma es: $resultado</div>";
                    break;
                case "resta":
                    $resultado = $valor1 - $valor2;
                    echo "<div class='result'>La resta es: $resultado</div>";
                    break;
                case "multiplicacion":
                    $resultado = $valor1 * $valor2;
                    echo "<div class='result'>La multiplicación es: $resultado</div>";
                    break;
                case "division":
                    if ($valor2 != 0) {
                        $resultado = $valor1 / $valor2;
                        echo "<div class='result'>La división es: $resultado</div>";
                    } else {
                        echo "<div class='result'>No se puede dividir entre 0.</div>";
                    }
                    break;
                default:
                    echo "<div class='result'>Operación no válida.</div>";
            }
        }
        ?>
        <a href="index.html">Volver al inicio</a>
    </div>
</body>
</html>
