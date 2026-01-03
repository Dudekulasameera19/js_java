const username_Regex = /^[A-Za-z0-9_ ]{1,10}$/;
const Mobilenumber_Regex = /^[6-9]\d{9}$/;
const Useremail_Regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;
const password_Regex = /^[A-Za-z0-9@$!%*?&,. ]{8,20}$/;


const form = document.getElementById("check_data");

form.addEventListener("submit", function (e) {
     e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const mobilenumber = document.getElementById("Mobilenumber").value.trim();
    const useremail = document.getElementById("useremail").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document.getElementById("confirmpassword").value.trim();

    if (!username_Regex.test(username)) {
        alert("invalid username");
        return;
    }
    if (!Mobilenumber_Regex.test(mobilenumber)) {
        alert("invalid mobilenumber");
        return;
    }
    if (!Useremail_Regex.test(useremail)) {
        alert("invalid useremail");
        return;
    }
    if (!password_Regex.test(password)) {
        alert("invalid password");
        return;
    }
    if (password !== confirmpassword) {
        alert("Passwords do not match");
        return;
    }

     form.submit();
});
