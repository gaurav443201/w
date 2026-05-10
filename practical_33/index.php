<!DOCTYPE html>
<html>
<head>
<title>Simple Interest Calculator</title>
<style>form { border: 1px solid #000; padding: 20px; width: 300px; } input { margin-bottom: 10px; width: 90%; }</style>
</head>
<body>
    <form method="POST">
        Principal: <input type="number" name="p" required>
        Rate: <input type="number" name="r" required>
        Time: <input type="number" name="t" required>
        <input type="submit" name="submit" value="Calculate">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $si = ($_POST['p'] * $_POST['r'] * $_POST['t']) / 100;
        echo "<p>Simple Interest: $si</p>";
    }
    ?>
</body>
</html>