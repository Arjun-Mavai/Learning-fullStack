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


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6BE9R61EYL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BE9R61EYL');
</script>
