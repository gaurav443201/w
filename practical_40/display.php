<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
<title>View Subject</title>
<style>body { font-family: Arial; text-align: center; margin-top: 50px; color: purple; }</style>
</head>
<body>
    <?php
    if (isset($_SESSION['subject'])) {
        echo "<h2>Your favorite subject is " . htmlspecialchars($_SESSION['subject']) . "</h2>";
    } else {
        echo "<h2>No subject saved yet.</h2>";
    }
    ?>
    <br><a href="index.php">Go Back</a>
</body>
</html>