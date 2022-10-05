
fetch("https://xkcd.now.sh/?comic=latest")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    let img = document.querySelector('#image');
    img.src = data.img;
    img.alt = data.alt;
}).catch(error=>{
    console.error("Error: " , error);
})