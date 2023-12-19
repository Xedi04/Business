let ollaDiv=document.querySelector(".olla-text");
let page=3;

function Show(){
fetch(" http://localhost:3000/OLLA")
.then(res=>res.json())
.then(data=>{
    data.slice(0,page).forEach(element => {
        ollaDiv.innerHTML+=`
        <div class="div3">
        <i id="heart" class="bi bi-heart" onclick="Heart(${element.id})"></i>
        <h5>${element.name}</h5>
        <img src="${element.image}" alt="">
        <p>${element.description}</p>
        <div class="btn">
            <button id="delete" onclick="Delete(${element.id})">Delete</button>
            <button id="update" onclick="Update(${element.id})">Update</button>
            <button id="getall" onclick="GoToDetails(${element.id})">GetAll</button>
        </div>
    </div>
        `
    });
})
}
Show()
let Load=document.querySelector("#load");
Load.addEventListener("click", ()=>{
    page+=3;
    Show();
})

function Update(id){
    window.location=`./update.html?id=${id}`
}

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


let navbar=document.querySelector("#nav");


window.addEventListener("scroll", ()=>{
    if(window.scrollY>250){
        navbar.style.position="fixed"
        navbar.style.transition="all .5s ease"
    }else{
        navbar.style.position="static";
        navbar.style.transition="all .5s ease"
       
    }
})