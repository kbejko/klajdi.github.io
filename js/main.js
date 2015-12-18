var button = document.querySelector("button")
var diu = document.getElementById("diu")
var content = document.querySelector("span")

button.addEventListener("click", function(){
  if (diu.className === "") {
    diu.className = "diu"
    content.innerHTML = "if you've had enough of this nonsense"
  } else {
    diu.className = diu.className.replace("diu", "")
    content.innerHTML = "to see a picture of my grandpa peeing on love"
  }
})
