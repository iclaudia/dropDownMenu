var xbtn= document.querySelector(".btn-off");
var menu= document.querySelector(".hiddenMenu");
function onOff (){
  menu.classList.toggle("active");
}

xbtn.addEventListener("click", onOff);
