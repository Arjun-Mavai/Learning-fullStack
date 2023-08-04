 

const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");

function getRandomColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})` ;

}


btn.addEventListener("click" , () => {

    const randomRGB =  getRandomColor();

    bulb.style.backgroundColor = randomRGB;
})
