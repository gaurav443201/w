const fs = require('fs');
const path = require('path');

const betterPracticals = {
    1: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
    <title>Personal Introduction Card (Better)</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #eef2f3; display: flex; justify-content: center; padding-top: 50px; }
        .card { background: linear-gradient(135deg, #a1c4fd, #c2e9fb); padding: 30px; width: 350px; border-radius: 15px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); text-align: center; }
        .card h2 { color: #2c3e50; margin-bottom: 10px; }
        .info { color: #34495e; font-size: 18px; margin: 8px 0; }
    </style>
</head>
<body>
    <div class="card">
        <h2><b>Gaurav Navghare</b></h2>
        <hr style="border-top: 1px solid #7f8c8d;">
        <p class="info"><i>Branch: Computer Engineering (SE)</i></p>
        <p class="info"><u>Hobbies: Coding, Reading, Gaming</u></p>
    </div>
</body>
</html>`
    },
    2: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>College Name Display Page (Better)</title>
<style>
    body { font-family: Arial, sans-serif; background-color: #f4f7f6; text-align: center; margin-top: 50px; }
    .header-box { border: 2px solid #2980b9; padding: 40px; margin: 0 auto; width: 60%; background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    h1 { color: #2980b9; font-size: 32px; text-transform: uppercase; letter-spacing: 1px; }
    .year-ref { font-size: 20px; color: #555; }
</style>
</head>
<body>
    <div class="header-box">
        <h1>MET's Institute of Engineering<sup>[Ref: 101]</sup></h1>
        <p class="year-ref">Academic Year: 2025<sub>th</sub> - 2026</p>
        <p><i>Department of Computer Engineering</i></p>
    </div>
</body>
</html>`
    },
    3: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Image with Caption and Link (Better)</title>
<style>
    body { font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #f9f9f9; }
    .container { background: white; padding: 20px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    img { border: 5px solid #2c3e50; border-radius: 8px; transition: transform 0.3s; }
    img:hover { transform: scale(1.05); }
    a { display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #e74c3c; color: white; text-decoration: none; border-radius: 5px; transition: background 0.3s; }
    a:hover { background-color: #c0392b; }
</style>
</head>
<body>
    <div class="container">
        <h3>My Favorite Animal: The Lion</h3>
        <img src="https://via.placeholder.com/250x200" width="250" alt="Lion Image">
        <br>
        <a href="https://en.wikipedia.org/wiki/Lion" target="_blank">Click here to know more</a>
    </div>
</body>
</html>`
    },
    4: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Simple Time Table (Better)</title>
<style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5; display: flex; flex-direction: column; align-items: center; padding: 40px; }
    h2 { color: #333; }
    table { border-collapse: collapse; width: 60%; background-color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; }
    th { background-color: #3498db; color: white; padding: 15px; }
    td { padding: 12px; text-align: center; border-bottom: 1px solid #ddd; }
    tr:hover { background-color: #f1f1f1; }
    .day { font-weight: bold; background-color: #e8f4f8; color: #2980b9; }
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
    5: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Subject List with Nested Table (Better)</title>
<style>
    body { font-family: Arial, sans-serif; padding: 30px; background-color: #fafafa; }
    h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; display: inline-block; }
    ul { list-style-type: square; font-size: 18px; color: #34495e; }
    li { margin-bottom: 15px; }
    table { border-collapse: collapse; margin-top: 10px; width: 300px; background-color: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    th { background-color: #27ae60; color: white; padding: 8px; }
    td { padding: 8px; text-align: center; border: 1px solid #ddd; }
</style>
</head>
<body>
    <h2>Computer Engineering Subjects</h2>
    <ul>
        <li>Data Structures</li>
        <li>Database Management Systems
            <table>
                <tr><th>Theory Marks</th><th>Practical Marks</th></tr>
                <tr><td>70</td><td>30</td></tr>
            </table>
        </li>
        <li>Operating Systems</li>
    </ul>
</body>
</html>`
    },
    6: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Registration Form (Better)</title>
<style>
    body { font-family: sans-serif; background: #e0eafc; background: linear-gradient(to right, #cfdef3, #e0eafc); display: flex; justify-content: center; padding-top: 50px; }
    form { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); width: 350px; }
    h2 { text-align: center; color: #333; margin-top: 0; }
    label { font-weight: bold; color: #555; }
    input[type="text"] { width: 100%; padding: 10px; margin: 8px 0 20px 0; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
    input[type="submit"] { width: 100%; background-color: #4CAF50; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; transition: 0.3s; }
    input[type="submit"]:hover { background-color: #45a049; }
</style>
</head>
<body>
    <form>
        <h2>Student Registration</h2>
        <label>Full Name:</label>
        <input type="text" name="name" placeholder="Gaurav Navghare">
        
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
<title>About Me (Better)</title>
<style>
    body { font-family: 'Arial', sans-serif; background-color: #fdfbfb; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .about-card { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; width: 400px; }
    h1 { color: #8e44ad; margin-bottom: 5px; }
    .subtitle { color: #7f8c8d; font-size: 16px; margin-bottom: 20px; }
    img { border-radius: 50%; border: 4px solid #8e44ad; width: 120px; height: 120px; object-fit: cover; }
    .hobbies { text-align: left; margin-top: 20px; background: #f4f6f7; padding: 15px; border-radius: 8px; }
    .hobbies h3 { margin-top: 0; color: #2c3e50; }
    p, li { font-size: 18px; color: #34495e; }
</style>
</head>
<body>
    <div class="about-card">
        <img src="https://via.placeholder.com/150" alt="Gaurav Photo">
        <h1>Gaurav Navghare</h1>
        <p class="subtitle">Computer Engineering Student</p>
        
        <div class="hobbies">
            <h3>My Hobbies</h3>
            <ul>
                <li>Web Development</li>
                <li>Playing Cricket</li>
                <li>Listening to Music</li>
            </ul>
        </div>
    </div>
</body>
</html>`
    },
    8: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Recipe Card (Better)</title>
<style>
    body { font-family: 'Georgia', serif; background-color: #fff3e0; display: flex; justify-content: center; padding: 40px; }
    .card { background-color: white; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); padding: 30px; width: 350px; border-top: 6px solid #e67e22; }
    h2 { color: #d35400; text-align: center; margin-top: 0; }
    h3 { color: #c0392b; border-bottom: 1px solid #eee; padding-bottom: 5px; }
    ul { list-style-type: circle; color: #555; }
    ol { color: #444; line-height: 1.6; }
</style>
</head>
<body>
    <div class="card">
        <h2>Perfect Indian Chai</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>1 cup Water</li>
            <li>2 tsp Tea leaves</li>
            <li>2 tsp Sugar</li>
            <li>1/2 cup Milk</li>
            <li>Crushed Ginger & Cardamom</li>
        </ul>
        <h3>Steps:</h3>
        <ol>
            <li>Boil water with ginger and cardamom.</li>
            <li>Add tea leaves and let it simmer.</li>
            <li>Add sugar and milk.</li>
            <li>Bring to a boil twice, strain and serve hot.</li>
        </ol>
    </div>
</body>
</html>`
    },
    9: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Favorite Links (Better)</title>
<style>
    body { font-family: Arial, sans-serif; background-color: #ece9e6; text-align: center; padding: 50px; }
    .links-container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: inline-block; }
    h2 { color: #333; margin-bottom: 20px; }
    a { display: block; padding: 15px 30px; margin: 10px 0; background-color: #3498db; color: white; text-decoration: none; font-size: 18px; border-radius: 5px; transition: 0.3s; }
    a:hover { background-color: #2980b9; transform: translateY(-3px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
    a:visited { background-color: #8e44ad; }
</style>
</head>
<body>
    <div class="links-container">
        <h2>My Favorite Websites</h2>
        <a href="https://www.google.com" target="_blank">Google Search</a>
        <a href="https://www.github.com" target="_blank">GitHub Repository</a>
        <a href="https://www.stackoverflow.com" target="_blank">StackOverflow</a>
    </div>
</body>
</html>`
    },
    10: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Department Contact Table (Better)</title>
<style>
    body { font-family: sans-serif; background-color: #f4f4f9; display: flex; flex-direction: column; align-items: center; padding: 40px; }
    h2 { color: #2c3e50; }
    table { border-collapse: collapse; width: 60%; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    th, td { padding: 15px; text-align: left; }
    th { background-color: #16a085; color: white; font-weight: bold; text-transform: uppercase; }
    tr { border-bottom: 1px solid #ddd; }
    tr:nth-child(even) { background-color: #f9f9f9; }
    tr:hover { background-color: #e8f6f3; }
</style>
</head>
<body>
    <h2>Faculty Contact Directory</h2>
    <table>
        <tr>
            <th>Faculty Name</th>
            <th>Email ID</th>
            <th>Department</th>
        </tr>
        <tr>
            <td>Prof. Sharma</td>
            <td>sharma@met.edu</td>
            <td>Computer Engg</td>
        </tr>
        <tr>
            <td>Prof. Patil</td>
            <td>patil@met.edu</td>
            <td>Computer Engg</td>
        </tr>
        <tr>
            <td>Prof. Deshmukh</td>
            <td>deshmukh@met.edu</td>
            <td>Computer Engg</td>
        </tr>
    </table>
</body>
</html>`
    },
    13: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Form Validation (Better)</title>
<style>
    body { font-family: Arial; background: #2c3e50; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .login-box { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); width: 300px; text-align: center; }
    .login-box h2 { margin-top: 0; color: #333; }
    input[type="text"], input[type="password"] { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    input[type="submit"] { width: 100%; padding: 12px; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 10px; }
    input[type="submit"]:hover { background: #c0392b; }
    .error-msg { color: red; font-size: 14px; margin-bottom: 10px; display: none; }
</style>
</head>
<body>
    <div class="login-box">
        <h2>Student Login</h2>
        <div id="errorBox" class="error-msg">Fields cannot be empty!</div>
        <form onsubmit="return validateForm()">
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    </div>
    <script>
        function validateForm() {
            let u = document.getElementById("username").value.trim();
            let p = document.getElementById("password").value.trim();
            if (u === "" || p === "") {
                document.getElementById("errorBox").style.display = "block";
                return false;
            }
            document.getElementById("errorBox").style.display = "none";
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
<title>Greeting Message (Better)</title>
<style>
    body { font-family: 'Arial', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f1c40f; transition: background 1s; }
    .greeting-card { background: white; padding: 40px 60px; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); text-align: center; }
    h1 { color: #2c3e50; font-size: 40px; margin: 0; }
    p { color: #7f8c8d; font-size: 20px; }
</style>
</head>
<body>
    <div class="greeting-card">
        <h1 id="greeting"></h1>
        <p id="subtext"></p>
    </div>
    <script>
        let hour = new Date().getHours();
        let msg = "";
        let bg = "";
        if (hour < 12) { msg = "Good Morning, Gaurav!"; bg = "#f1c40f"; }
        else if (hour < 17) { msg = "Good Afternoon, Gaurav!"; bg = "#e67e22"; }
        else { msg = "Good Evening, Gaurav!"; bg = "#2c3e50"; document.body.style.color = "white"; }
        
        document.body.style.backgroundColor = bg;
        document.getElementById("greeting").innerText = msg;
        document.getElementById("subtext").innerText = "Welcome to Web Dev Practicals";
    </script>
</body>
</html>`
    },
    17: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Addition Calculator (Better)</title>
<style>
    body { font-family: Arial; background: #ecf0f1; display: flex; justify-content: center; padding-top: 80px; }
    .calc-box { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); width: 300px; text-align: center; }
    input { width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px; font-size: 16px; }
    button { width: 95%; padding: 12px; background: #2ecc71; color: white; border: none; border-radius: 5px; font-size: 18px; cursor: pointer; margin-top: 10px; }
    button:hover { background: #27ae60; }
    #result { font-size: 24px; font-weight: bold; color: #2c3e50; margin-top: 20px; }
</style>
</head>
<body>
    <div class="calc-box">
        <h2>Fast Adder</h2>
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number">
        <button onclick="calculate()">Calculate Sum</button>
        <div id="result">Result: 0</div>
    </div>
    <script>
        function calculate() {
            let n1 = parseFloat(document.getElementById("num1").value) || 0;
            let n2 = parseFloat(document.getElementById("num2").value) || 0;
            document.getElementById("result").innerText = "Result: " + (n1 + n2);
        }
    </script>
</body>
</html>`
    },
    22: {
        'index_better.html': `<!DOCTYPE html>
<html>
<head>
<title>Multiplication Table (Better)</title>
<style>
    body { font-family: Arial; text-align: center; background: #fafafa; padding-top: 40px; }
    .container { display: inline-block; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    input { padding: 10px; font-size: 16px; width: 150px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 10px 20px; font-size: 16px; background: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px; }
    button:hover { background: #8e44ad; }
    .table-result { margin-top: 20px; font-size: 18px; line-height: 1.8; color: #333; background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #eee; text-align: left; display: inline-block;}
</style>
</head>
<body>
    <div class="container">
        <h2>Generate Table</h2>
        <input type="number" id="num" placeholder="Enter a number">
        <button onclick="showTable()">Generate</button>
        <br>
        <div id="tableDiv" class="table-result" style="display:none;"></div>
    </div>
    <script>
        function showTable() {
            let n = document.getElementById("num").value;
            let div = document.getElementById("tableDiv");
            if(n === "") return;
            div.style.display = "inline-block";
            let html = "<strong>Table of " + n + "</strong><br><hr>";
            for (let i = 1; i <= 10; i++) {
                html += n + " x " + i + " = <strong>" + (n * i) + "</strong><br>";
            }
            div.innerHTML = html;
        }
    </script>
</body>
</html>`
    },
    26: {
        'index_better.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Form (Better)</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .card-form { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .card-header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 15px 15px 0 0 !important; text-align: center; padding: 20px; }
    </style>
</head>
<body class="d-flex justify-content-center align-items-center vh-100">
    <div class="container" style="max-width: 500px;">
        <div class="card card-form">
            <div class="card-header">
                <h3>Contact Gaurav</h3>
                <p class="mb-0">Fill out the form below</p>
            </div>
            <div class="card-body p-4">
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nameInput" placeholder="John Doe">
                        <label for="nameInput">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
                        <label for="emailInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a message" id="messageInput" style="height: 100px"></textarea>
                        <label for="messageInput">Your Message</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 py-2 fs-5" style="background: #667eea; border: none;">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    33: {
        'index_better.php': `<!DOCTYPE html>
<html>
<head>
<title>Simple Interest (Better)</title>
<style>
    body { font-family: Arial; background: #eef2f3; padding: 40px; text-align: center; }
    .form-box { background: white; padding: 30px; border-radius: 10px; width: 320px; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: left;}
    input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
    input[type="submit"] { background: #3498db; color: white; font-weight: bold; border: none; cursor: pointer; transition: 0.3s; }
    input[type="submit"]:hover { background: #2980b9; }
    .result { margin-top: 20px; padding: 15px; background: #d4edda; color: #155724; border-radius: 5px; border: 1px solid #c3e6cb; text-align: center; font-size: 18px; font-weight: bold;}
</style>
</head>
<body>
    <h2>Interest Calculator</h2>
    <div class="form-box">
        <form method="POST">
            <label>Principal Amount (₹):</label>
            <input type="number" name="p" required>
            <label>Rate of Interest (%):</label>
            <input type="number" name="r" step="0.1" required>
            <label>Time Period (Years):</label>
            <input type="number" name="t" required>
            <input type="submit" name="submit" value="Calculate Interest">
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $p = $_POST['p']; $r = $_POST['r']; $t = $_POST['t'];
            $si = ($p * $r * $t) / 100;
            echo "<div class='result'>Calculated Interest: ₹ $si</div>";
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
<title>Marksheet (Better)</title>
<style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #fdfbfb; padding: 30px; display: flex; flex-direction: column; align-items: center; }
    .container { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); width: 400px; text-align: center;}
    input { width: 90%; padding: 10px; margin: 8px 0; border: 1px solid #ccc; border-radius: 5px; }
    button { padding: 10px; width: 95%; background: #27ae60; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 10px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; border-radius: 8px; overflow: hidden; }
    th { background: #2980b9; color: white; padding: 10px; }
    td { padding: 10px; border-bottom: 1px solid #ddd; background: #f9f9f9; font-weight: bold;}
</style>
</head>
<body>
    <div class="container">
        <h2>Gaurav's Marksheet Generator</h2>
        <form method="POST">
            <input type="number" name="m1" placeholder="Subject 1 Marks (out of 100)" required>
            <input type="number" name="m2" placeholder="Subject 2 Marks (out of 100)" required>
            <input type="number" name="m3" placeholder="Subject 3 Marks (out of 100)" required>
            <button type="submit" name="submit">Generate Marksheet</button>
        </form>
        <?php
        if (isset($_POST['submit'])) {
            $m1 = $_POST['m1']; $m2 = $_POST['m2']; $m3 = $_POST['m3'];
            $total = $m1 + $m2 + $m3;
            $percentage = ($total / 300) * 100;
            $grade = "F";
            $color = "red";
            if ($percentage >= 75) { $grade = "A (Distinction)"; $color = "green"; }
            elseif ($percentage >= 60) { $grade = "B (First Class)"; $color = "blue"; }
            elseif ($percentage >= 45) { $grade = "C (Second Class)"; $color = "orange"; }
            elseif ($percentage >= 35) { $grade = "D (Pass)"; $color = "gray"; }

            echo "<table>
                    <tr><th>Total Marks</th><th>Percentage</th><th>Final Grade</th></tr>
                    <tr><td>$total / 300</td><td>" . round($percentage, 2) . "%</td><td style='color:$color;'>$grade</td></tr>
                  </table>";
        }
        ?>
    </div>
</body>
</html>`
    }
};

// I selected 12 of the most visually unappealing/short practicals and gave them premium styling and better logic.

for (const [num, files] of Object.entries(betterPracticals)) {
    const dir = path.join(__dirname, "practical_" + num);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    for (const [filename, content] of Object.entries(files)) {
        fs.writeFileSync(path.join(dir, filename), content);
    }
}
console.log('Better practical versions created successfully!');
