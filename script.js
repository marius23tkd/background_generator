var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var resetBg = document.querySelector(".resetBg");
var randomColors = document.querySelector(".randomColors");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function displayGradient(){
    css.textContent = "linear-gradient(to right, red, yellow);";
}

displayGradient();

resetBg.addEventListener("click", function(){
    body.style.background = "linear-gradient(to right, " + "red" + ", " + "yellow" +")";
    css.textContent = body.style.background + ";";
})

function randomGenerator(){
    return Math.floor(Math.random() * 256);
}

randomColors.addEventListener("click", function(){
    body.style.background = "linear-gradient(to right, rgb(" +randomGenerator()+ "," +randomGenerator()+ "," +randomGenerator()+ "), rgb(" +randomGenerator()+ "," +randomGenerator()+ "," +randomGenerator()+ "))";
        css.textContent = body.style.background + ";";
})