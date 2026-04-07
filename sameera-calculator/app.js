let screen = document.getElementById("screen");
let historyList = document.getElementById("historylist");
let historyBox = document.getElementById("historyBox");

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function press(value) {
    let current = screen.value;
    let lastChar = current[current.length - 1];

    if (isOperator(value)) {
        if (current === "") return;
        if (isOperator(lastChar)) {
            screen.value = current.slice(0, -1) + value;
            return;
        }
    }
    if (value === ".") {
        let parts = current.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) return;
        if (current === "" || isOperator(lastChar)) {
            screen.value += "0.";
            return;
        }
    }

    screen.value += value;
}

function clearData() {
    screen.value = "";
}

function result() {
    try {
        let exp = screen.value;

        if (exp === "") return;

        let lastChar = exp[exp.length - 1];
        if (isOperator(lastChar) || lastChar === ".") {
            screen.value = "Error";
            return;
        }

        let ans = eval(exp);
        screen.value = ans;

        let item = document.createElement("li");
        item.textContent = exp + " = " + ans;
        historyList.appendChild(item);
    } catch {
        screen.value = "Error";
    }
}

function percentage() {
    try {
        if (screen.value === "") return;
        screen.value = eval(screen.value) / 100;
    } catch {
        screen.value = "Error";
    }
}

function changeSign() {
    if (screen.value !== "" && !isNaN(screen.value)) {
        screen.value = String(Number(screen.value) * -1);
    }
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}

function toggleHistory() {
    if (historyBox.style.display === "block") {
        historyBox.style.display = "none";
    } else {
        historyBox.style.display = "block";
    }
}

document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        press(key);
    } else if (key === "Enter") {
        result();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearData();
    } else if (key === "%") {
        percentage();
    }
});