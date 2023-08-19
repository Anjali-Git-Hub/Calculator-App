const keypad=document.querySelector(".keypad");
const themes=document.querySelector(".themes");
const body=document.body;
keypad.addEventListener("click",(e)=>{
  if(e.target.textContent==="DEL" || e.target.textContent==="=" || e.target.textContent==="RESET" ){
      if(e.target.textContent==="DEL"){
        keypad.previousElementSibling.value=keypad.previousElementSibling.value.slice(0,keypad.previousElementSibling.value.length-1);
      }
      if(e.target.textContent==="="){
        keypad.previousElementSibling.value=eval(keypad.previousElementSibling.value)
      }
      if(e.target.textContent==="RESET"){
        keypad.previousElementSibling.value=0;
      }
    }
  else{
    keypad.previousElementSibling.value+=e.target.textContent;
    console.log("hi")
  }

})
function theme1(){
  if(body.classList.contains("theme3")){
    body.classList.remove("theme3");
    body.classList.add("theme1");
    var translationValue = 0; 
    themes.children[0].style.transform = "translateX(" + translationValue + "px)";
  }
}
function theme2(){
  if(body.classList.contains("theme1")){
    body.classList.remove("theme1");
    body.classList.add("theme2");
    // themes.children[0].style.
    var translationValue = 25; 
  themes.children[0].style.transform = "translateX(" + translationValue + "px)";
  }
}
function theme3(){
  if(body.classList.contains("theme2")){
    body.classList.remove("theme2");
    body.classList.add("theme3");
    var translationValue = 50; 
  themes.children[0].style.transform = "translateX(" + translationValue + "px)";
// console.log("hi"); 
}
}

themes.addEventListener("click",(e)=>{

   if(body.classList.contains("theme1")){
        theme2()
   }
   else if(body.classList.contains("theme2")){
    theme3()
   }
   else if(body.classList.contains("theme3")){
    theme1()
   }
})
