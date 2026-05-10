<!DOCTYPE html>
<html>
<head>
<title>Even Odd Checker</title>
<style>.even { background-color: lightgreen; padding: 10px; } .odd { background-color: lightcoral; padding: 10px; }</style>
</head>
<body>
    <form method="POST">
        Number: <input type="number" name="num" required>
        <input type="submit" name="submit" value="Check">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $num = $_POST['num'];
        if ($num % 2 == 0) echo "<p class='even'>$num is Even</p>";
        else echo "<p class='odd'>$num is Odd</p>";
    }
    ?>
</body>
</html>