let id = new URLSearchParams(window.location.search).get("id");

let ollaDiv = document.querySelector(".olla-text");

fetch(`http://localhost:3000/OLLA/${id}`)
    .then(res => res.json())
    .then(data => {

        ollaDiv.innerHTML += `
   <div class="div3">
   <i class="bi bi-heart"></i>
   <h5>${data.name}</h5>
   <img src="${data.image}" alt="">
   <p>${data.description}</p>
   <div class="btn">
       <button id="delete">Delete</button>
       <button id="update">Update</button>
       <button id="getall"><a href="./details.html">GetAll</a></button>
   </div>
</div>
   `
    })