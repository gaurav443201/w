<!DOCTYPE html>
<html>
<body>
    <form method="POST">
        Word: <input type="text" name="word">
        <input type="submit" value="Get Length">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Length: " . strlen($_POST['word']);
    }
    ?>
</body>
</html>