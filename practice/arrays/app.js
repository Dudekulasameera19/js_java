// let array = [
//     { name: "car", price: 40000, discount: 30, instock: true, id: 1 },
//     { name: "bike", price: 40000, discount: 30, instock: false, id: 2 },
//     { name: "scooty", price: 40000, discount: 30, instock: true, id: 3 },
//     { name: "tractor", price: 40000, discount: 30, instock: false, id: 4 }
// ];

// let array2 = document.getElementById("array1");
// let cart = "";

// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     array2.innerHTML += `
//         <div class="products">
//             <p>name: ${item.name}</p>
//             <p>price: ${item.price}</p>
//             <p>discount: ${item.discount}</p>
//             <p>instock: ${item.instock ? "yes" : "no"}</p>
//             <button onclick="submit(${item.id})">add to cart</button>
//         </div>
//     `;
// }

// function submit(id) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].id === id) {
//             cart += `
//                 <tr>
//                     <td>${array[i].name}</td>
//                     <td>${array[i].price}</td>
//                     <td>${array[i].discount}</td>
//                     <td>${array[i].instock ? "Yes" : "No"}</td>
//                 </tr>
//             `;
//         }
//     }
//     Table();
// }

// function Table() {
//     document.body.innerHTML += `
//         <table border="1">
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Discount</th>
//                 <th>In Stock</th>
//             </tr>
//             ${cart}
//         </table>
//     `;
// }

let array = [
    { name: "car", price: 40000, discount: 30, instock: true, id: 1 },
    { name: "bike", price: 40000, discount: 30, instock: false, id: 2 },
    { name: "scooty", price: 40000, discount: 30, instock: true, id: 3 },
    { name: "tractor", price: 40000, discount: 30, instock: false, id: 4 }
];

let array2 = document.getElementById("array1");

// show products
for (let i = 0; i < array.length; i++) {
    let item = array[i];
    array2.innerHTML += `
        <div class="products">
            <p>name: ${item.name}</p>
            <p>price: ${item.price}</p>
            <p>discount: ${item.discount}</p>
            <p>instock: ${item.instock ? "yes" : "no"}</p>
            <button onclick="submit(${item.id})">add to cart</button>
        </div>
    `;
}

function submit(id) {

    // create table only once
    if (document.getElementById("cartTable") === null) {
        document.body.innerHTML += `
            <table border="1" id="cartTable">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>In Stock</th>
                </tr>
                <tbody id="cartBody"></tbody>
            </table>
        `;
    }

    // find item (basic loop)
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            document.getElementById("cartBody").innerHTML += `
                <tr>
                    <td>${array[i].name}</td>
                    <td>${array[i].price}</td>
                    <td>${array[i].discount}</td>
                    <td>${array[i].instock ? "Yes" : "No"}</td>
                </tr>
            `;
        }
    }
}
