<!DOCTYPE html>
<html>
<head>
<title>Vowel Counter</title>
<style>.result { color: blue; font-size: 20px; }</style>
</head>
<body>
    <form method="POST">
        Sentence: <input type="text" name="text" required>
        <input type="submit" value="Count Vowels">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $text = strtolower($_POST['text']);
        $count = 0;
        $vowels = ['a', 'e', 'i', 'o', 'u'];
        for ($i = 0; $i < strlen($text); $i++) {
            if (in_array($text[$i], $vowels)) $count++;
        }
        echo "<p class='result'>Number of vowels: $count</p>";
    }
    ?>
</body>
</html>