var user = document.querySelector("#userName") ;
var pass = document.querySelector("#userPassword") ;
var butt = document.querySelector(".button-submit") ;
var out = document.querySelector(".out-display") ;
function loginPage(){
    console.log("sjs") ;
    if(user.value==="isha" && pass.value==="isha"){
        window.open("https://tindog-ritz.netlify.app/home","_self");
    }else{
        out.innerHTML = "**Incorrect Credentials**" ;
    }
}
butt.addEventListener("click",loginPage) ;