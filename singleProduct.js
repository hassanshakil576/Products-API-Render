const div = document.querySelector(".container")
const data = localStorage.getItem("id")
console.log(data);
fetch(`https://dummyjson.com/products/${data}`)
.then((res)=> res.json())
.then((res)=>{
    console.log(res);
    div.innerHTML += `
    <div class = "single-img">
    <img width = "300px" src="${res.thumbnail}" alt="thumbnail">
    </div>
        <div = "product-content">
           <h1>Title: ${res.title}</h1>
           <h2>Category: ${res.category}</h2>
           <h3>Description: ${res.description}</h3>
           <h2>Price: $${res.price}</h2>
           <h3>Rating: ${res.rating}</h3>
           <h3>Stock: ${res.stock}</h3>
        </div>
   
    `
    }).catch((err)=>{
    console.log(err);
    
})