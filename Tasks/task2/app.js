let products = [
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image: "../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image: "../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image: "../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  },
  {
    image:"../assets/pexels-kovyrina-34832908.jpg",
    name: "House",
    desc: "Nature"
  }

  
];


let container = document.getElementById("container");

for (let i = 0; i < products.length; i++) {
  let item = document.createElement("div");
  item.classList.add("box");
  item.innerHTML = `
    <img src="${products[i].image}"style="width:300px; height:300px;">
    <h2>${products[i].name}</h2>
    <p>${products[i].desc}</p>
    <button onclick="alert('${products[i].name}')">Add to Cart</button>
   <button onclick="alert('Buying ${products[i].name}')">Buy Now</button>
  `;

  container.appendChild(item);
}

