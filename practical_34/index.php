<!DOCTYPE html>
<html>
<head>
<title>Student Result</title>
<style>table { border-collapse: collapse; width: 50%; } th, td { border: 1px solid black; padding: 10px; text-align: center; }</style>
</head>
<body>
    <?php
    $marks = array(70, 80, 65);
    $total = array_sum($marks);
    $percentage = ($total / 300) * 100;
    ?>
    <table>
        <tr><th>Subject 1</th><th>Subject 2</th><th>Subject 3</th><th>Total</th><th>Percentage</th></tr>
        <tr><td><?php echo $marks[0]; ?></td><td><?php echo $marks[1]; ?></td><td><?php echo $marks[2]; ?></td><td><?php echo $total; ?></td><td><?php echo round($percentage, 2); ?>%</td></tr>
    </table>
</body>
</html>