let ollaDiv=document.querySelector(".olla-text");

fetch(" http://localhost:3000/OLLA")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        ollaDiv.innerHTML+=`
        <div class="div3">
        <i id="heart" class="bi bi-heart" onclick="Heart(${element.id})"></i>
        <h5>${element.name}</h5>
        <img src="${element.image}" alt="">
        <p>${element.description}</p>
        <div class="btn">
            <button id="delete" onclick="Delete(${element.id})">Delete</button>
            <button id="update">Update</button>
            <button id="getall" onclick="GoToDetails(${element.id})">GetAll</button>
        </div>
    </div>
        `
    });
})

function Delete(id){
    axios.delete(`http://localhost:3000/OLLA/${id}`)
    .then(res=>{
        window.location="./index.html"
    })
}

function GoToDetails(id){
    
    window.location=`./details.html?id=${id}`;
}

function Heart(id){
    axios.get(`http://localhost:3000/OLLA/${id}`)
    .then(res=>{
        axios.post("http://localhost:3000/FAVORITES/", res.data)
    })
}
let heartbtn=document.querySelector("#heart");
heartbtn.addEventListener("click", ()=>{
    window.location="./favorites.html"
})