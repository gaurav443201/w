<!DOCTYPE html>
<html>
<head>
<title>Marksheet (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .container { border: 2px solid black; padding: 20px; width: 350px; margin: 0 auto; background-color: #f9f9f9; }
    input { margin-bottom: 10px; padding: 5px; width: 80%; }
    button { background-color: green; color: white; padding: 10px; border: none; cursor: pointer; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid black; padding: 10px; }
    th { background-color: lightgray; }
</style>
</head>
<body>
    <div class="container">
        <h2>Gaurav's Marksheet</h2>
        <form method="POST">
            <input type="number" name="m1" placeholder="Subject 1 Marks" required>
            <input type="number" name="m2" placeholder="Subject 2 Marks" required>
            <input type="number" name="m3" placeholder="Subject 3 Marks" required>
            <button type="submit" name="submit">Generate Marksheet</button>
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $m1 = $_POST['m1']; 
            $m2 = $_POST['m2']; 
            $m3 = $_POST['m3'];
            
            $total = $m1 + $m2 + $m3;
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

            echo "<table>
                    <tr><th>Total</th><th>Percentage</th><th>Grade</th></tr>
                    <tr><td>$total</td><td>" . round($percentage, 2) . "%</td><td>$grade</td></tr>
                  </table>";
        }
        ?>
    </div>
</body>
</html>