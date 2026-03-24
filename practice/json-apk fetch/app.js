
let apiData=fetch('https://dummyjson.com/products')
apiData.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
   let container = document.getElementById('products')
    let products = data.products

    for (let i = 0; i < products.length; i++) {
      container.innerHTML += `
        <div id="data">
          <p>id: ${products[i].id}</p>
          <p>description: ${products[i].description}</p>
          <h3>${products[i].title}</h3>
          <p>Price: ${products[i].price}</p>
          <p>category: ${products[i].category}</p>
        </div>
      `
    }
})