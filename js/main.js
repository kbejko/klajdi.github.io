var firstLi = document.getElementsByTagName("li")[0]
var firstA = document.getElementsByTagName("a")[0]
firstLi.onclick = function(){
  // console.log("Hello")
  firstA.classList.remove("active")
}
