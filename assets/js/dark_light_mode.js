const darkIcon = document.getElementById("dark");
const lightIcon = document.getElementById("light");
const page = document.querySelector("body");

if(darkIcon){
    darkIcon.addEventListener("click",()=>{
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
        page.classList.add("dark-mode");
        localStorage.setItem("darkMode", "active");
    })
}
if(lightIcon){
    lightIcon.addEventListener("click",()=>{
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
        page.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "inactive");  
    })
}
if(darkIcon){
    if(localStorage.getItem("darkMode")== "active"){
        page.classList.toggle("dark-mode");
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    }
}
