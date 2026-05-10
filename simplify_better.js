const fs = require('fs');
const path = require('path');

const compromisePracticals = {
    1: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
    <title>Personal Introduction Card (Compromise)</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; padding-top: 50px; }
        .card { background-color: lightblue; padding: 20px; width: 300px; margin: 0 auto; border: 2px solid darkblue; border-radius: 10px; }
        h2 { color: darkblue; }
        p { font-size: 18px; }
    </style>
</head>
<body>
    <div class="card">
        <h2><b>Gaurav Navghare</b></h2>
        <hr>
        <p><i>Branch: Computer Engineering (SE)</i></p>
        <p><u>Hobbies: Coding, Reading, Gaming</u></p>
    </div>
</body>
</html>`
    },
    2: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>College Name Display Page (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .header-box { border: 2px solid blue; padding: 30px; margin: 0 auto; width: 60%; background-color: #e6f7ff; }
    h1 { color: blue; }
</style>
</head>
<body>
    <div class="header-box">
        <h1>MET's Institute of Engineering<sup>[Ref: 101]</sup></h1>
        <p>Academic Year: 2025<sub>th</sub> - 2026</p>
        <p><i>Department of Computer Engineering</i></p>
    </div>
</body>
</html>`
    },
    3: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Image with Caption and Link (Compromise)</title>
<style>
    body { text-align: center; margin-top: 50px; font-family: Arial, sans-serif; }
    img { border: 3px solid black; }
    a { display: block; margin-top: 15px; font-size: 18px; color: blue; }
</style>
</head>
<body>
    <div>
        <h3>My Favorite Animal</h3>
        <img src="https://via.placeholder.com/250x200" width="250" alt="Lion Image">
        <a href="https://en.wikipedia.org/wiki/Lion" target="_blank">Click here to know more</a>
    </div>
</body>
</html>`
    },
    4: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Simple Time Table (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; }
    table { border-collapse: collapse; width: 60%; margin: 20px auto; background-color: white; border: 2px solid black; }
    th { background-color: blue; color: white; padding: 10px; }
    td { padding: 10px; border: 1px solid black; }
    .day { font-weight: bold; background-color: lightgray; }
</style>
</head>
<body>
    <h2>Weekly Time Table</h2>
    <table>
        <tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th></tr>
        <tr><td class="day">Monday</td><td>Math</td><td>Physics</td><td>Chemistry</td></tr>
        <tr><td class="day">Tuesday</td><td>Biology</td><td>English</td><td>History</td></tr>
        <tr><td class="day">Wednesday</td><td>Computer</td><td>Art</td><td>PE</td></tr>
    </table>
</body>
</html>`
    },
    6: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Registration Form (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; background-color: #f9f9f9; text-align: center; }
    form { background-color: white; padding: 20px; border: 1px solid black; width: 300px; margin: 50px auto; text-align: left; }
    h2 { text-align: center; }
    input[type="text"] { width: 90%; padding: 5px; margin-bottom: 15px; }
    input[type="submit"] { background-color: green; color: white; padding: 10px; border: none; cursor: pointer; width: 95%; }
</style>
</head>
<body>
    <form>
        <h2>Student Registration</h2>
        <label>Full Name:</label>
        <input type="text" name="name" value="Gaurav Navghare">
        
        <label>Roll Number:</label>
        <input type="text" name="roll" placeholder="Enter Roll No">
        
        <label>Branch:</label>
        <input type="text" name="branch" value="Computer Engineering">
        
        <input type="submit" value="Register Now">
    </form>
</body>
</html>`
    },
    7: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>About Me (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #fdfbfb; }
    .about-card { border: 2px solid purple; padding: 20px; width: 350px; margin: 50px auto; background-color: #f4e6f4; }
    h1 { color: purple; margin-bottom: 5px; }
    img { border: 2px solid black; width: 100px; }
    ul { text-align: left; margin-left: 50px; font-size: 18px; }
    p { font-size: 18px; }
</style>
</head>
<body>
    <div class="about-card">
        <h1>Gaurav Navghare</h1>
        <img src="https://via.placeholder.com/150" alt="Gaurav Photo">
        <p>Computer Engineering Student</p>
        
        <h3>My Hobbies</h3>
        <ul>
            <li>Web Development</li>
            <li>Playing Cricket</li>
            <li>Listening to Music</li>
        </ul>
    </div>
</body>
</html>`
    },
    13: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Form Validation (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #e0e0e0; }
    .login-box { border: 1px solid black; padding: 20px; width: 250px; margin: 0 auto; background-color: white; }
    input { margin-bottom: 10px; padding: 5px; width: 90%; }
    input[type="submit"] { background-color: red; color: white; border: none; padding: 8px; cursor: pointer; }
</style>
</head>
<body>
    <div class="login-box">
        <h2>Student Login</h2>
        <form onsubmit="return validateForm()">
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    </div>
    <script>
        function validateForm() {
            let u = document.getElementById("username").value;
            let p = document.getElementById("password").value;
            if (u == "" || p == "") {
                alert("Fields cannot be empty!");
                return false;
            }
            alert("Login success!");
            return true;
        }
    </script>
</body>
</html>`
    },
    14: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Greeting Message (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; padding-top: 100px; }
    h1 { color: darkblue; }
    .box { border: 2px solid darkblue; padding: 20px; width: 400px; margin: 0 auto; background-color: lightyellow; }
</style>
</head>
<body>
    <div class="box">
        <h1 id="greeting"></h1>
        <p>Welcome to Web Dev Practicals, Gaurav!</p>
    </div>
    <script>
        let hour = new Date().getHours();
        let msg = "";
        
        if (hour < 12) {
            msg = "Good Morning!";
        } else if (hour < 17) {
            msg = "Good Afternoon!";
        } else {
            msg = "Good Evening!";
        }
        
        document.getElementById("greeting").innerText = msg;
    </script>
</body>
</html>`
    },
    17: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Addition Calculator (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .calc-box { border: 1px solid gray; padding: 20px; width: 300px; margin: 0 auto; background-color: #e6ffe6; }
    input { padding: 5px; margin: 5px; width: 80%; }
    button { background-color: green; color: white; padding: 10px; cursor: pointer; border: none; margin-top: 10px; }
</style>
</head>
<body>
    <div class="calc-box">
        <h2>Simple Adder</h2>
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number">
        <button onclick="calculate()">Calculate Sum</button>
        <p id="result">Result will appear here</p>
    </div>
    <script>
        function calculate() {
            let n1 = document.getElementById("num1").value;
            let n2 = document.getElementById("num2").value;
            
            // convert string to number
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            
            document.getElementById("result").innerText = "Result: " + (n1 + n2);
        }
    </script>
</body>
</html>`
    },
    33: {
        'index_better.php': `<!DOCTYPE html>
<html>
<head>
<title>Simple Interest (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .form-box { border: 1px solid black; padding: 20px; width: 300px; margin: 0 auto; background-color: #f0f8ff; text-align: left; }
    input { width: 90%; margin-bottom: 10px; padding: 5px; }
    input[type="submit"] { background-color: blue; color: white; border: none; padding: 10px; cursor: pointer; }
    .result { margin-top: 15px; padding: 10px; background-color: lightgreen; border: 1px solid green; font-weight: bold; }
</style>
</head>
<body>
    <h2>Interest Calculator</h2>
    <div class="form-box">
        <form method="POST">
            <label>Principal Amount:</label>
            <input type="number" name="p" required>
            <label>Rate of Interest:</label>
            <input type="number" name="r" required>
            <label>Time (Years):</label>
            <input type="number" name="t" required>
            <input type="submit" name="submit" value="Calculate">
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $p = $_POST['p'];
            $r = $_POST['r'];
            $t = $_POST['t'];
            
            $si = ($p * $r * $t) / 100;
            echo "<div class='result'>Simple Interest: ₹ " . $si . "</div>";
        }
        ?>
    </div>
</body>
</html>`
    },
    39: {
        'index_better.php': `<!DOCTYPE html>
<html>
<head>
<title>Marksheet (Compromise)</title>
<style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .container { border: 2px solid black; padding: 20px; width: 350px; margin: 0 auto; background-color: #f9f9f9; }
    input { margin-bottom: 10px; padding: 5px; width: 80%; }
    button { background-color: green; color: white; padding: 10px; border: none; cursor: pointer; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid black; padding: 10px; }
    th { background-color: lightgray; }
</style>
</head>
<body>
    <div class="container">
        <h2>Gaurav's Marksheet</h2>
        <form method="POST">
            <input type="number" name="m1" placeholder="Subject 1 Marks" required>
            <input type="number" name="m2" placeholder="Subject 2 Marks" required>
            <input type="number" name="m3" placeholder="Subject 3 Marks" required>
            <button type="submit" name="submit">Generate Marksheet</button>
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $m1 = $_POST['m1']; 
            $m2 = $_POST['m2']; 
            $m3 = $_POST['m3'];
            
            $total = $m1 + $m2 + $m3;
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

            echo "<table>
                    <tr><th>Total</th><th>Percentage</th><th>Grade</th></tr>
                    <tr><td>$total</td><td>" . round($percentage, 2) . "%</td><td>$grade</td></tr>
                  </table>";
        }
        ?>
    </div>
</body>
</html>`
    }
};

for (const [num, files] of Object.entries(compromisePracticals)) {
    const dir = path.join(__dirname, "practical_" + num);
    if (fs.existsSync(dir)) {
        for (const [filename, content] of Object.entries(files)) {
            fs.writeFileSync(path.join(dir, filename), content);
        }
    }
}
console.log('Compromise better versions updated!');
