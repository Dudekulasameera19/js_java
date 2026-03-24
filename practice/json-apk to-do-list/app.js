fetch('https://dummyjson.com/todos')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    let tableBody = document.getElementById('data')
    let todos = data.todos

    for (let i = 0; i < todos.length; i++) {
      tableBody.innerHTML += `
        <tr>
          <td>${todos[i].id}</td>
          <td>${todos[i].todo}</td>
          <td>${todos[i].completed?"yes":"no"}</td>
          <td>${todos[i].userId}</td>
        </tr>
      `
    }
  })
