// console.log("hello world!");

const div = document.querySelector(".card")
const Base_URL = fetch("https://dummyjson.com/products") // API hamain aik promise return karta hai

.then((res)=> res.json())
.then((res)=>{
    console.log(res.products);
    res.products.map((item)=>{
        div.innerHTML += `<div class="content">
        <div class = "img">
           <img src="${item.thumbnail}" alt="img">
           </div>
           <h1>Title: ${item.title}</h1>
           <h1>Category: ${item.category}</h1>
           <h1>Price: $${item.price}</h1>
           <h3>Description: ${item.description.slice(0 , 20)}</h3>
           <button class = "seemore-btn" onclick = "seeMore(${item.id})">See more...</button>      
       </div>
        `
    })
    }).catch((err)=>{
        console.error(err);
        
    })
    
function seeMore(id){
    // console.log(id);
    localStorage.setItem("id", id)
    window.location = "singleProduct.html"
    
}    

    

