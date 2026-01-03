// const products = [
//     {
//         image: "Assests/pexels-kovyrina-34832908.jpg",
//         name: "Product 1",
//         price: "$10"
//     },
//     {
//         image: "Assests/pexels-kovyrina-34832908.jpg",
//         name: "Product 2",
//         price: "$20"
//     },
//     {
//         image: "Assests/pexels-kovyrina-34832908.jpg",
//         name: "Product 3",
//         price: "$30"
//     },
//     {
//         image: "Assests/pexels-kovyrina-34832908.jpg",
//         name: "Product 4",
//         price: "$40"
//     }
// ];

// const container = document.getElementById("product-container");

// for (let i = 0; i < 3; i++) {
//     container.innerHTML += `
//         <div class="product">
//             <img src="${products[i].image}" alt="${products[i].name}">
//             <h3>${products[i].name}</h3>
//             <p>${products[i].price}</p>
//             <button onclick="alert('${products[i].name} added to cart')">Add to Cart</button>
//             <button onclick="alert('Buying ${products[i].name}')">Buy Now</button>
//         </div>
//     `;
// }

// let age = prompt ("enter your age");
// console.log(age);

let products = [{
    image : "Assests/pexels-kovyrina-34832908.jpg",
    name : "laptop",
    price: 20000
},
{
    image : "Assests/pexels-kovyrina-34832908.jpg",
    name : "laptop",
    price: 20000
},
{
    image : "Assests/pexels-kovyrina-34832908.jpg",
    name : "laptop",
    price: 20000
}]
let container = document.getElementById("container")
for (let i =0;i<product.length;i++){
   let card = document.createElement("div");
   card.classList.add("items");
   card.innerHTML=
   `
   <img src= "${products[i].image}">
   <h3>${products[i].Name}</h3>
   <p>${products[i].price}</p>
   `
 container.appendchaild(card);
}


logo 
nav side button logout Login
