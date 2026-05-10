const fs = require('fs');
const path = require('path');

const practicals = {
    1: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Personal Introduction Card</title></head>
<body>
    <div style="background: lightblue; padding: 20px; width: 300px; border: 1px solid #000;">
        <h2><b>My Name is John Doe</b></h2>
        <p><i>Branch: Computer Engineering</i></p>
        <p><u>Hobbies: Reading, Coding, Cricket</u></p>
    </div>
</body>
</html>`
    },
    2: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>College Name Display Page</title>
<style>
    h1 { text-align: center; color: darkblue; }
</style>
</head>
<body>
    <h1>MET's Institute of Engineering<sup>1</sup></h1>
    <p style="text-align: center;">Year: 2025<sub>th</sub></p>
</body>
</html>`
    },
    3: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Image with Caption and Link</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="https://via.placeholder.com/200" width="200" alt="Favorite Animal">
    <br>
    <a href="#">Click here to know more</a>
</body>
</html>`,
        'style.css': `img { border: 5px solid black; }
a { color: red; text-decoration: none; }
a:hover { color: blue; }`
    },
    4: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Simple Time Table</title>
<style>
    .day { background-color: lightgray; }
    table { border-collapse: collapse; width: 50%; text-align: center; }
    th, td { padding: 10px; }
</style>
</head>
<body>
    <table border="1">
        <tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th></tr>
        <tr class="day"><td>Monday</td><td>Math</td><td>Physics</td><td>Chemistry</td></tr>
        <tr><td>Tuesday</td><td>Biology</td><td>English</td><td>History</td></tr>
        <tr class="day"><td>Wednesday</td><td>Computer</td><td>Art</td><td>PE</td></tr>
    </table>
</body>
</html>`
    },
    5: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Subject List with Nested Table</title></head>
<body>
    <h2>Computer Engineering Subjects</h2>
    <ul>
        <li>Data Structures</li>
        <li>Database Management Systems
            <table border="1">
                <tr><th>Theory</th><th>Practical</th></tr>
                <tr><td>70</td><td>30</td></tr>
            </table>
        </li>
        <li>Operating Systems</li>
    </ul>
</body>
</html>`
    },
    6: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Simple Registration Form</title>
<style>
    form { margin: 20px; padding: 20px; border: 1px solid #ccc; width: 300px; }
    input { margin-bottom: 10px; padding: 5px; width: 90%; }
</style>
</head>
<body>
    <form>
        <label>Name:</label><br><input type="text" name="name"><br>
        <label>Roll Number:</label><br><input type="text" name="roll"><br>
        <label>Branch:</label><br><input type="text" name="branch"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`
    },
    7: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>About Me</title>
<style>
    h1 { color: blue; }
    p, li { font-size: 18px; }
</style>
</head>
<body>
    <h1>About Me</h1>
    <img src="https://via.placeholder.com/150" alt="My Photo">
    <p>Name: Jane Doe</p>
    <p>Hobbies:</p>
    <ul>
        <li>Singing</li>
        <li>Dancing</li>
        <li>Painting</li>
    </ul>
</body>
</html>`
    },
    8: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Recipe Card</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Simple Tea Recipe</h2>
        <h3>Ingredients:</h3>
        <ul><li>Water</li><li>Tea leaves</li><li>Sugar</li><li>Milk</li></ul>
        <h3>Steps:</h3>
        <ol>
            <li>Boil water in a pan.</li>
            <li>Add tea leaves and sugar.</li>
            <li>Add milk and boil again.</li>
            <li>Strain and serve hot.</li>
        </ol>
    </div>
</body>
</html>`,
        'style.css': `.card { border: 1px solid #aaa; border-radius: 10px; box-shadow: 5px 5px 10px #888; padding: 20px; width: 300px; font-family: Arial, sans-serif; }`
    },
    9: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Favorite Links Page</title>
<style>
    a:visited { color: purple; }
    a:hover { color: orange; }
</style>
</head>
<body>
    <h2>My Favorite Websites</h2>
    <a href="https://www.google.com" target="_blank" style="color: green;">Google</a><br><br>
    <a href="https://www.github.com" target="_blank" style="color: green;">GitHub</a><br><br>
    <a href="https://www.wikipedia.org" target="_blank" style="color: green;">Wikipedia</a>
</body>
</html>`
    },
    10: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Department Contact Table</title>
<style>
    table { border-collapse: collapse; width: 50%; }
    th, td { border: 1px solid black; padding: 10px; text-align: left; }
    tr:nth-child(even) { background-color: #f2f2f2; }
</style>
</head>
<body>
    <table>
        <tr><th>Faculty Name</th><th>Email ID</th></tr>
        <tr><td>Prof. Smith</td><td>smith@example.com</td></tr>
        <tr><td>Prof. Johnson</td><td>johnson@example.com</td></tr>
        <tr><td>Prof. Davis</td><td>davis@example.com</td></tr>
    </table>
</body>
</html>`
    },
    11: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
<title>Simple College Brochure</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="brochure">
        <h1>MET's Institute of Engineering</h1>
        <img src="https://via.placeholder.com/400x200" alt="Campus Image">
        <p>Welcome to MET's Institute of Engineering. We provide state-of-the-art facilities and excellent education to shape the future of our students. Join us to build a great career!</p>
    </div>
</body>
</html>`,
        'style.css': `body { font-family: Arial, sans-serif; background-color: #f9f9f9; text-align: center; }
.brochure { border: 2px solid #333; padding: 20px; width: 400px; margin: 0 auto; background-color: white; }
img { width: 100%; height: auto; }
h1 { color: darkred; }
p { color: #555; line-height: 1.5; }`
    },
    12: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>My Hobbies</title></head>
<body style="background: lightyellow;">
    <h1>My Hobbies</h1>
    <p>I <strong>love</strong> playing cricket.</p>
    <p>My favorite book is <em>The Alchemist</em>.</p>
    <p>I need to buy some <mark>paint colors</mark> for my art project.</p>
    <p>My old hobby was <del>collecting stamps</del>, but now I collect coins.</p>
</body>
</html>`
    },
    13: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Form Validation</title></head>
<body>
    <form onsubmit="return validateForm()">
        Username: <input type="text" id="username"><br><br>
        Password: <input type="password" id="password"><br><br>
        <input type="submit" value="Login">
    </form>
    <script>
        function validateForm() {
            let u = document.getElementById("username").value;
            let p = document.getElementById("password").value;
            if (u == "" || p == "") { alert("Empty fields are not allowed!"); return false; }
            return true;
        }
    </script>
</body>
</html>`
    },
    14: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Greeting Message</title></head>
<body>
    <h1 id="greeting"></h1>
    <script>
        let hour = new Date().getHours();
        let msg = (hour < 12) ? "Good Morning" : (hour < 17) ? "Good Afternoon" : "Good Evening";
        document.getElementById("greeting").innerText = msg;
    </script>
</body>
</html>`
    },
    15: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Button Click Counter</title></head>
<body>
    <button onclick="increment()">Click Me!</button>
    <p id="display">Button clicked 0 times</p>
    <script>
        let count = 0;
        function increment() {
            count++;
            document.getElementById("display").innerText = "Button clicked " + count + " times";
        }
    </script>
</body>
</html>`
    },
    16: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Change Background Color</title></head>
<body>
    <button onclick="changeColor()">Change Color</button>
    <script>
        let colors = ["red", "green", "blue", "yellow"];
        let index = 0;
        function changeColor() {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        }
    </script>
</body>
</html>`
    },
    17: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Addition Calculator</title></head>
<body>
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <button onclick="calculate()">Add</button>
    <p id="result"></p>
    <script>
        function calculate() {
            let n1 = parseFloat(document.getElementById("num1").value);
            let n2 = parseFloat(document.getElementById("num2").value);
            document.getElementById("result").innerText = "Sum = " + (n1 + n2);
        }
    </script>
</body>
</html>`
    },
    18: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Current Date and Time</title></head>
<body>
    <div id="datetime"></div>
    <script>
        let d = new Date();
        let dateStr = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        let timeStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        document.getElementById("datetime").innerText = dateStr + " " + timeStr;
    </script>
</body>
</html>`
    },
    19: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Number Comparison</title></head>
<body>
    <script>
        let num1 = parseFloat(prompt("Enter first number:"));
        let num2 = parseFloat(prompt("Enter second number:"));
        if (num1 > num2) { document.write("<h1>" + num1 + " is greater than " + num2 + "</h1>"); } 
        else if (num2 > num1) { document.write("<h1>" + num2 + " is greater than " + num1 + "</h1>"); } 
        else { document.write("<h1>Both numbers are equal</h1>"); }
    </script>
</body>
</html>`
    },
    20: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Simple Age Check</title></head>
<body>
    <input type="number" id="age" placeholder="Enter age">
    <button onclick="checkAge()">Check</button>
    <p id="result"></p>
    <script>
        function checkAge() {
            let age = document.getElementById("age").value;
            document.getElementById("result").innerText = (age >= 18) ? "Eligible to vote" : "Not eligible";
        }
    </script>
</body>
</html>`
    },
    21: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Show/Hide Paragraph</title></head>
<body>
    <button onclick="toggle()">Toggle Paragraph</button>
    <p id="text">This is a paragraph that can be hidden and shown.</p>
    <script>
        function toggle() {
            let p = document.getElementById("text");
            p.style.display = (p.style.display === "none") ? "block" : "none";
        }
    </script>
</body>
</html>`
    },
    22: {
        'index.html': `<!DOCTYPE html>
<html>
<head><title>Multiplication Table</title></head>
<body>
    <input type="number" id="num" placeholder="Enter a number">
    <button onclick="showTable()">Show Table</button>
    <div id="tableDiv"></div>
    <script>
        function showTable() {
            let n = document.getElementById("num").value;
            let div = document.getElementById("tableDiv");
            div.innerHTML = "";
            for (let i = 1; i <= 10; i++) {
                div.innerHTML += n + " x " + i + " = " + (n * i) + "<br>";
            }
        }
    </script>
</body>
</html>`
    },
    23: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Responsive Navbar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Website</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    24: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Grid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <div class="card p-3">
                    <h3>About Me</h3>
                    <p>I am a software engineering student.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card p-3">
                    <h3>My Skills</h3>
                    <p>HTML, CSS, JavaScript, PHP</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    25: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Buttons</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <button class="btn btn-primary" onclick="alert('Primary Button clicked')">Primary</button>
        <button class="btn btn-success" onclick="alert('Success Button clicked')">Success</button>
        <button class="btn btn-danger" onclick="alert('Danger Button clicked')">Danger</button>
    </div>
</body>
</html>`
    },
    26: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5" style="max-width: 500px;">
        <h2 class="text-center">Contact Form</h2>
        <form>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
    </div>
</body>
</html>`
    },
    27: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Alert</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div id="myAlert" class="alert alert-success d-none" role="alert">
            Form submitted successfully!
        </div>
        <button class="btn btn-primary" onclick="document.getElementById('myAlert').classList.remove('d-none')">Submit</button>
    </div>
</body>
</html>`
    },
    28: {
        'index.php': `<?php\necho "Welcome to Web Development Practical Exam";\n?>`
    },
    29: {
        'index.php': `<?php\necho date('d-m-Y');\n?>`
    },
    30: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    31: {
        'index.php': `<?php
$colors = array("Red", "Green", "Blue");
echo "<ul>";
foreach ($colors as $color) { echo "<li>$color</li>"; }
echo "</ul>";
?>`
    },
    32: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    33: {
        'index.php': `<!DOCTYPE html>
<html>
<head>
<title>Simple Interest Calculator</title>
<style>form { border: 1px solid #000; padding: 20px; width: 300px; } input { margin-bottom: 10px; width: 90%; }</style>
</head>
<body>
    <form method="POST">
        Principal: <input type="number" name="p" required>
        Rate: <input type="number" name="r" required>
        Time: <input type="number" name="t" required>
        <input type="submit" name="submit" value="Calculate">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $si = ($_POST['p'] * $_POST['r'] * $_POST['t']) / 100;
        echo "<p>Simple Interest: $si</p>";
    }
    ?>
</body>
</html>`
    },
    34: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    35: {
        'index.php': `<!DOCTYPE html>
<html>
<head>
<title>Even Odd Checker</title>
<style>.even { background-color: lightgreen; padding: 10px; } .odd { background-color: lightcoral; padding: 10px; }</style>
</head>
<body>
    <form method="POST">
        Number: <input type="number" name="num" required>
        <input type="submit" name="submit" value="Check">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $num = $_POST['num'];
        if ($num % 2 == 0) echo "<p class='even'>$num is Even</p>";
        else echo "<p class='odd'>$num is Odd</p>";
    }
    ?>
</body>
</html>`
    },
    36: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    37: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    38: {
        'index.php': `<!DOCTYPE html>
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
</html>`
    },
    39: {
        'index.php': `<!DOCTYPE html>
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
        $grade = ($percentage >= 75) ? "A" : (($percentage >= 60) ? "B" : (($percentage >= 45) ? "C" : (($percentage >= 35) ? "D" : "F")));
        echo "<table><tr><th>Total</th><th>Percentage</th><th>Grade</th></tr><tr><td>$total</td><td>" . round($percentage, 2) . "%</td><td>$grade</td></tr></table>";
    }
    ?>
</body>
</html>`
    },
    40: {
        'index.php': `<?php session_start(); ?>
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
</html>`,
        'display.php': `<?php session_start(); ?>
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
</html>`
    }
};

for (const [num, files] of Object.entries(practicals)) {
    const dir = path.join(__dirname, "practical_" + num);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    for (const [filename, content] of Object.entries(files)) {
        fs.writeFileSync(path.join(dir, filename), content);
    }
}
console.log('All practical folders and files created successfully!');
