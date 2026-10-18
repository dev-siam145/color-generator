const colorBox=document.getElementById("colorBox");
const colorCode=document.getElementById("colorCode");
const generateBtn=document.getElementById("generateBtn");

function generateRandomColor(){
    const charecters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6;i++){
        const randomIndex = Math.floor(Math.random() * charecters.length);
        color += charecters[randomIndex];
    }
    return color;
}
generateBtn.addEventListener("click",function(){
    const randomColor = generateRandomColor();
    colorBox.style.background = randomColor;
    colorCode.textContent = randomColor;
})
