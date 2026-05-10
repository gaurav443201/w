<!DOCTYPE html>
<html>
<head>
<title>Reverse String</title>
<style>form { background: #eee; padding: 20px; display: inline-block; }</style>
</head>
<body>
    <form method="POST">
        Word: <input type="text" name="word" required>
        <input type="submit" value="Reverse">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "<p>Reversed: " . strrev($_POST['word']) . "</p>";
    }
    ?>
</body>
</html>