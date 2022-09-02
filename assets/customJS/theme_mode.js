const page = document.querySelector("body");
const mode = document.getElementById("mode");
const modeItems = document.getElementById("mode-items");
const darkIconDropdown = document.getElementById("dark-mode-dropdown-item");
const lightIconDropdown = document.getElementById("light-mode-dropdown-item");
const customIconDropdown = document.getElementById("custom-mode-dropdown-item");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const custom = document.getElementById("custom");

mode.addEventListener("click",()=>{
    modeItems.classList.toggle("hidden");
    modeItems.classList.toggle("dropdown");
})
const applyMode = mode =>{
    if(mode == "darkMode"){
        dark.classList.remove("hidden");
        light.classList.add("hidden");
        custom.classList.add("hidden");
        page.classList.remove("custom-theme");
        page.classList.add("dark-mode");
    } else if(mode == "lightMode"){
        dark.classList.add("hidden");
        light.classList.remove("hidden");
        custom.classList.add("hidden");
        page.classList.remove("dark-mode");
        page.classList.remove("custom-theme");
    } else if(mode == "customMode"){
        dark.classList.add("hidden");
        light.classList.add("hidden");
        custom.classList.remove("hidden");
        page.classList.remove("dark-mode");
        page.classList.add("custom-theme");
    }
}

const setLocalStorage = (darkMode, lightMode, customMode) => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("lightMode", lightMode);
    localStorage.setItem("customMode", customMode);
}

darkIconDropdown.addEventListener("click",()=>{
    applyMode("darkMode");
    setLocalStorage("active", "inactive", "inactive");
})

lightIconDropdown.addEventListener("click",()=>{
    applyMode("lightMode");
    setLocalStorage("inactive", "active", "inactive");
})

customIconDropdown.addEventListener("click",()=>{
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
