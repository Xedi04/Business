let Name = document.querySelector("#name");
let Imagef = document.querySelector("#file");
let Description = document.querySelector("#des");
let Form = document.querySelector("#form");
let ImgDiv = document.querySelector("#imgDiv");
let Submit = document.querySelector("#submit");

Imagef.addEventListener("input", () => {
    let file = file.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            ImgDiv.src = reader.result;
        }
    }

})

Form.addEventListener("submit", (e)=>{
e.preventDefault();
let obj={}
let src=Imagef.files[0];
const reader =new FileReader();
reader.onload=function(e){
    obj={
        image:e.target.result,
        name:Name.value,
        description:Description.value
    }
    axios.post("http://localhost:3000/OLLA", obj)
    .then(res=>window.location="./index.html")
}
reader.readAsDataURL(src);

})