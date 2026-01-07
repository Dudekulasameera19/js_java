
// function banner() {
//     let date = new Date();
//     document.getElementById("time").innerText = date.toLocaleTimeString();
//     document.getElementById("date").innerText = date.toLocaleDateString();
//     document.getElementById("countDown")
// }

// setInterval(banner, 1000);
// // setTimeout(banner1, 1000);

let user = {
    name: null,
    marks: null,
    getresult: function (user1) {

    }
}

console.log(user)
user.marks = "A"

console.log(user.name);
console.log(user.getresult());

let endDate = new Date();
endDate.setDate(endDate.getDate() + 3)
console.log(endDate)

function updateCountDown() {
    let now = new Date().getTime()
    console.log(now);
    let distance = endDate.getTime() - now;
    console.log(distance)

    let days = Math.floor(distance / (24 * 60 * 60 * 1000));
    console.log(days)
    let hours = Math.floor((distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
    console.log(hours);
    let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    console.log(minutes);
    let seconds = Math.floor((distance % (60 * 1000)) / (1000));
    console.log(minutes);

    document.getElementById("countDown").innerHTML = days + "d  " + hours + "  h  " + minutes + "  m  " + seconds + "  s  ";
}
updateCountDown();
setInterval(updateCountDown, 1000);

function product() {
    let card = document.getElementById("card")
}


