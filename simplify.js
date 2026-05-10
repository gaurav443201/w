const fs = require('fs');
const path = require('path');

// Practical 14: Simplify ternary to if/else
const p14Path = path.join(__dirname, 'practical_14', 'index.html');
if (fs.existsSync(p14Path)) {
    fs.writeFileSync(p14Path, `<!DOCTYPE html>
<html>
<head><title>Greeting Message</title></head>
<body>
    <h1 id="greeting"></h1>
    <script>
        let hour = new Date().getHours();
        let msg = "";
        
        if (hour < 12) {
            msg = "Good Morning";
        } else if (hour < 17) {
            msg = "Good Afternoon";
        } else {
            msg = "Good Evening";
        }
        
        document.getElementById("greeting").innerText = msg;
    </script>
</body>
</html>`);
}

// Practical 20: Simplify ternary to if/else
const p20Path = path.join(__dirname, 'practical_20', 'index.html');
if (fs.existsSync(p20Path)) {
    fs.writeFileSync(p20Path, `<!DOCTYPE html>
<html>
<head><title>Simple Age Check</title></head>
<body>
    <input type="number" id="age" placeholder="Enter age">
    <button onclick="checkAge()">Check</button>
    <p id="result"></p>
    <script>
        function checkAge() {
            let age = document.getElementById("age").value;
            
            if (age >= 18) {
                document.getElementById("result").innerText = "Eligible to vote";
            } else {
                document.getElementById("result").innerText = "Not eligible";
            }
        }
    </script>
</body>
</html>`);
}

// Practical 21: Simplify ternary to if/else
const p21Path = path.join(__dirname, 'practical_21', 'index.html');
if (fs.existsSync(p21Path)) {
    fs.writeFileSync(p21Path, `<!DOCTYPE html>
<html>
<head><title>Show/Hide Paragraph</title></head>
<body>
    <button onclick="toggle()">Toggle Paragraph</button>
    <p id="text">This is a paragraph that can be hidden and shown.</p>
    <script>
        function toggle() {
            let p = document.getElementById("text");
            
            if (p.style.display === "none") {
                p.style.display = "block";
            } else {
                p.style.display = "none";
            }
        }
    </script>
</body>
</html>`);
}

// Practical 39: Simplify ternary to if/else
const p39Path = path.join(__dirname, 'practical_39', 'index.php');
if (fs.existsSync(p39Path)) {
    fs.writeFileSync(p39Path, `<!DOCTYPE html>
<html>
<head>
<title>Simple Marksheet</title>
<style>table { border-collapse: collapse; width: 50%; margin-top: 20px; } th, td { border: 1px solid black; padding: 10px; text-align: center; } th { background-color: #ddd; }</style>
</head>
<body>
    <form method="POST">
        Subject 1: <input type="number" name="m1" required><br>
        Subject 2: <input type="number" name="m2" required><br>
        Subject 3: <input type="number" name="m3" required><br>
        <input type="submit" name="submit" value="Generate Marksheet">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $total = $_POST['m1'] + $_POST['m2'] + $_POST['m3'];
        $percentage = ($total / 300) * 100;
        
        $grade = "F";
        if ($percentage >= 75) {
            $grade = "A";
        } elseif ($percentage >= 60) {
            $grade = "B";
        } elseif ($percentage >= 45) {
            $grade = "C";
        } elseif ($percentage >= 35) {
            $grade = "D";
        } else {
            $grade = "F";
        }
        
        echo "<table><tr><th>Total</th><th>Percentage</th><th>Grade</th></tr><tr><td>$total</td><td>" . round($percentage, 2) . "%</td><td>$grade</td></tr></table>";
    }
    ?>
</body>
</html>`);
}

console.log('Simplification complete!');
