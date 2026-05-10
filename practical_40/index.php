<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
<title>Favorite Subject</title>
<style>body { font-family: Arial; text-align: center; margin-top: 50px; }</style>
</head>
<body>
    <form method="POST">
        Favorite Subject: <input type="text" name="subject" required>
        <input type="submit" name="submit" value="Save">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $_SESSION['subject'] = $_POST['subject'];
        echo "<p>Your favorite subject is saved!</p>";
        echo "<a href='display.php'>View Subject</a>";
    }
    ?>
</body>
</html>