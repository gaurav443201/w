<!DOCTYPE html>
<html>
<head>
<title>Simple Interest (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .form-box { border: 1px solid black; padding: 20px; width: 300px; margin: 0 auto; background-color: #f0f8ff; text-align: left; }
    input { width: 90%; margin-bottom: 10px; padding: 5px; }
    input[type="submit"] { background-color: blue; color: white; border: none; padding: 10px; cursor: pointer; }
    .result { margin-top: 15px; padding: 10px; background-color: lightgreen; border: 1px solid green; font-weight: bold; }
</style>
</head>
<body>
    <h2>Interest Calculator</h2>
    <div class="form-box">
        <form method="POST">
            <label>Principal Amount:</label>
            <input type="number" name="p" required>
            <label>Rate of Interest:</label>
            <input type="number" name="r" required>
            <label>Time (Years):</label>
            <input type="number" name="t" required>
            <input type="submit" name="submit" value="Calculate">
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $p = $_POST['p'];
            $r = $_POST['r'];
            $t = $_POST['t'];
            
            $si = ($p * $r * $t) / 100;
            echo "<div class='result'>Simple Interest: ₹ " . $si . "</div>";
        }
        ?>
    </div>
</body>
</html>