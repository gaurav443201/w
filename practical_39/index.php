<!DOCTYPE html>
<html>
<head>
<title>Simple Marksheet</title>
<style>table { border-collapse: collapse; width: 50%; margin-top: 20px; } th, td { border: 1px solid black; padding: 10px; text-align: center; } th { background-color: #ddd; }</style>
</head>
<body>
    <form method="POST">
        Subject 1: <input type="number" name="m1" required><br>
        Subject 2: <input type="number" name="m2" required><br>
        Subject 3: <input type="number" name="m3" required><br>
        <input type="submit" name="submit" value="Generate Marksheet">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $total = $_POST['m1'] + $_POST['m2'] + $_POST['m3'];
        $percentage = ($total / 300) * 100;
        
        $grade = "F";
        if ($percentage >= 75) {
            $grade = "A";
        } elseif ($percentage >= 60) {
            $grade = "B";
        } elseif ($percentage >= 45) {
            $grade = "C";
        } elseif ($percentage >= 35) {
            $grade = "D";
        } else {
            $grade = "F";
        }
        
        echo "<table><tr><th>Total</th><th>Percentage</th><th>Grade</th></tr><tr><td>$total</td><td>" . round($percentage, 2) . "%</td><td>$grade</td></tr></table>";
    }
    ?>
</body>
</html>