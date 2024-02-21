function login() {
    var userType = document.getElementById("userType").value;
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check if email and password are not empty
    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    // Proceed with login action based on user type
    if (userType === "instructor") {
        window.location.href = "instructor.html";
    } else if (userType === "student") {
        window.location.href = "student.html";
    } else if (userType === "administrator") {
        window.location.href = "administrator.html";
    }
}


function registerUser() {
    var name = document.getElementById("name").value.trim();
    var userType = document.getElementById("userType").value;
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Proceed with registration action
    // You can add further registration logic here if needed
    window.location.href = "index.html";
}
