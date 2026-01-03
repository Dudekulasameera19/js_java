let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let dobInput = document.getElementById("dob");
let fullNameInput = document.getElementById("fullName");
let profile = document.getElementById("profile");

function NameWithYear() {
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let dob = dobInput.value;

    let fullName = (firstName + lastName).split(" ").join("");
    let namePart = fullName.substring(0, 4).toUpperCase();
    let yearPart = dob ? new Date(dob).getFullYear() : "";
    let finalValue = namePart + yearPart;

    fullNameInput.value = finalValue;

    if (firstName) {
        profile.innerText = firstName.charAt(0).toUpperCase();
    } else {
        profile.innerText = "";
    }
}

firstNameInput.addEventListener("input", NameWithYear);
lastNameInput.addEventListener("input", NameWithYear);
dobInput.addEventListener("change", NameWithYear);

function user(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    email.includes("@") ? console.log("Email valid") : console.log("Email is invalid");
    let password = document.getElementById("password").value;
    password.length >= 8
        ? console.log("Password is valid")
        : console.log("Password is invalid");
    let pancard = document.getElementById("pancard").value.trim().toUpperCase();
    console.log("PAN:", pancard);
}
