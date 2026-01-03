function register() {
    let user = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("Password").value;

    let users = JSON.parse(localStorage.getItem("users"))||[]
    let user1 = [{"name1":user,"name2":email,"name3":pass}]
    user1.push(users)
    localStorage.setItem("users",JSON.stringify (user1))

    localStorage.setItem("userName", user);
    localStorage.setItem("email", email);
    localStorage.setItem("Password", pass);

    alert("Registration successful!");
    console.log("Registered:");
    console.log("Username:", localStorage.getItem("userName"));
    console.log("Email:", localStorage.getItem("email"));
    console.log("Password:", localStorage.getItem("Password"));
}

if (document.getElementById("userNameLogin")) {
    function login() {
        let enteredUser = document.getElementById("userNameLogin").value;
        let enteredPass = document.getElementById("PasswordLogin").value;

        let storedUser = localStorage.getItem("userName");
        let storedPass = localStorage.getItem("Password");

        if (enteredUser == storedUser && enteredPass == storedPass) {
            alert("Valid login!");
        } else {
            alert("Invalid login!");
        }
    }
}
