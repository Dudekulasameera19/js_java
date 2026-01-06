function attribute(){
    console.log("hii this is sameera")
}

// function property(){
//     let event = document.getElementById("event")
//     event.onclick = function(){
//         alert("hello this is Divya")
//    alert("this is sam")
// }
// }

function property() {
    let input = document.getElementById("event");

    input.onclick = function () {
        alert("hello this is Divya");
    };
    input.onclick = function () {
        alert("This is sam");
    };
     input.onclick = function () {
        alert("This is minnu");
    };
}

function add(){
    let user = document.getElementById("method");
     user.addEventListener("click", function () {
        // alert("home");
        // alert("furniture")
        // alert("electric")

    user.addEventListener("click", function () {
        console.log("Mouse Clicked");
    });

    user.addEventListener("mouseover", function () {
        console.log("Mouse Over");
    });

    user.addEventListener("mouseout", function () {
        console.log("Mouse Out");
    });

    user.addEventListener("dblclick", function () {
        console.log("Mouse Double Click");
    });

    }); 
}

    
// function add() {
//     let name = document.getElementById("method");

//     name.addEventListener("focus", nameFocus);
//     name.addEventListener("blur", nameBlur);
//     name.addEventListener("change", nameChange);

// }

// function nameFocus() {
//     console.log("Name focused");
// }

// function nameBlur() {
//     console.log("Name blurred");
// }

// function nameChange() {
//     console.log("Name changed");
// }


// function attachements() {
//     window.addEventListener("load", load);
//     window.addEventListener("resize", resize);
//     window.addEventListener("scroll", scroll);
// }

// function load() {
//     console.log("Window loaded");
// }

// function resize() {
//     console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
// }

// function scroll() {
//     console.log("Window scrolled. Scroll Y:", window.scrollY);
// }


