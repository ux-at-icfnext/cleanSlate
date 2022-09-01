const page = document.querySelector("body");
const mode = document.getElementById("mode");
const modeItems = document.getElementById("mode-items");
const darkIcon = document.getElementById("dark-mode");
const lightIcon = document.getElementById("light-mode");
const brandIcon = document.getElementById("custom-mode");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const brand = document.getElementById("custom");

mode.addEventListener("click",()=>{
    modeItems.classList.toggle("hidden");
    modeItems.classList.toggle("dropdown");
})
const applyMode = mode =>{
    if(mode == "darkMode"){
        dark.classList.remove("hidden");
        light.classList.add("hidden");
        brand.classList.add("hidden");
        page.classList.remove("custom-theme");
        page.classList.add("dark-mode");
    } else if(mode == "lightMode"){
        dark.classList.add("hidden");
        light.classList.remove("hidden");
        brand.classList.add("hidden");
        page.classList.remove("dark-mode");
        page.classList.remove("custom-theme");
    } else if(mode == "customMode"){
        dark.classList.add("hidden");
        light.classList.add("hidden");
        brand.classList.remove("hidden");
        page.classList.remove("dark-mode");
        page.classList.add("custom-theme");
    }
}

const setLocalStorage = (darkMode, lightMode, customMode) => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("lightMode", lightMode);
    localStorage.setItem("customMode", customMode);
}

darkIcon.addEventListener("click",()=>{
    applyMode("darkMode");
    setLocalStorage("active", "inactive", "inactive");
})

lightIcon.addEventListener("click",()=>{
    applyMode("lightMode");
    setLocalStorage("inactive", "active", "inactive");
})

brandIcon.addEventListener("click",()=>{
    applyMode("customMode");
    setLocalStorage("inactive", "inactive", "active");
})

if(localStorage.getItem("darkMode")=="active"){
    applyMode("darkMode");  
}

if(localStorage.getItem("lightMode")=="active"){
    applyMode("lightMode");   
}

if(localStorage.getItem("customMode")=="active"){
    applyMode("customMode");  
}
