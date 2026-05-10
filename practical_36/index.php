<!DOCTYPE html>
<html>
<head>
<title>Simple Login</title>
<style>.success { color: green; font-weight: bold; } .error { color: red; font-weight: bold; }</style>
</head>
<body>
    <form method="POST">
        Username: <input type="text" name="user" required><br><br>
        Password: <input type="password" name="pass" required><br><br>
        <input type="submit" name="submit" value="Login">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        if ($_POST['user'] == "admin" && $_POST['pass'] == "12345") echo "<p class='success'>Login Successful!</p>";
        else echo "<p class='error'>Invalid Credentials!</p>";
    }
    ?>
</body>
</html>