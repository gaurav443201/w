<!DOCTYPE html>
<html>
<body>
    <form method="POST">
        Name: <input type="text" name="name">
        <input type="submit" value="Submit">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Hello " . htmlspecialchars($_POST['name']);
    }
    ?>
</body>
</html>