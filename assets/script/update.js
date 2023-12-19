let id=new URLSearchParams(window.location.search).get("id");
let Form=document.querySelector("#form");
let Name=document.querySelector("#name");
let imagefile=document.querySelector("#file");
let Description=document.querySelector("#des");
let ImgDiv=document.querySelector("#imgDiv");


fetch(`http://localhost:3000/OLLA/${id}`)
.then(res=>res.json())
.then(data=>{
    ImgDiv.src=data.image,
    Name.value=data.name,
    Description.value=data.description
})

imagefile.addEventListener("input", (e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            ImgDiv.src=reader.result
        }
    }
})

Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/OLLA/"+id,{
        image:ImgDiv.src,
        name:Name.value,
        description:Description.value
    }).then(res=>{
        window.location="./index.html"
    })
})