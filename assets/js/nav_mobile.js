// define variables
const topLevelNavItems = document.querySelectorAll(".nav-item");
const navContainer = document.querySelector(".nav-items");
const mobileMenuLabel = document.querySelector(".mobile-menu-label");
const exitMobileMenuLabel = document.querySelector(".exit-mobile-menu-label");
const mobileMenuWrapper = document.getElementById("wrapper-container");

// functionality only available in the mobile menu: expand/collapse selected sub nav items 
    // collapse currently open sub nav item when a new sub nav item is selected
const toggleSubNav=()=>{
    topLevelNavItems.forEach(navItem=>{
        if(navItem.children[1].children[0].children.length > 0){ //sub nav ul > 0
            navItem.addEventListener("click", ()=>{
                resetSubNav();
                navItem.children[0].children[1].classList.toggle("hidden"); // toggle expand nav icon
                navItem.children[0].children[2].classList.toggle("hidden"); // toggle collapse nav icon
                navItem.children[1].classList.toggle("hidden"); // toggle sub nav ul items
               })
           } else{ //sub nav ul = 0
               navItem.children[0].children[1].classList.add("hidden"); // hide expand nav icon
           }
       }
   )
}

//collapse sub nav when mobile menu is closed, reset to default nav settings
const resetSubNav =()=>{
    topLevelNavItems.forEach(navItem=>{
         //default sub nav settings:
            // when sub nav ul > 0
                // display expand nav icon ">"
                // hide collapse nav icon "v"
                // collapse sub nav items
        if(navItem.children[1].children[0].children.length > 0){ //sub nav ul > 0
            navItem.children[0].children[1].classList.remove("hidden"); // display expand nav icon
            navItem.children[0].children[2].classList.add("hidden"); //hide collapse nav icon
            navItem.children[1].classList.add("hidden"); // collapse sub nav ul items
           } 
           //default sub nav settings:
                //when sub nav ul = 0
                    // do not display expand nav icon ">"
        else{ //sub nav ul = 0
            navItem.children[0].children[1].classList.add("hidden"); // hide expand nav icon
            }
       }
   )
}

//toggle mobile menu functionality
const mobileMenu = ()=>{
    resetSubNav();
    toggleSubNav();
    mobileMenuLabel.classList.toggle("hidden"); 
    exitMobileMenuLabel.classList.toggle("hidden");
    navContainer.classList.toggle("slide-left");
    navContainer.classList.toggle("display");
    mobileMenuWrapper.classList.toggle("wrapper");
    document.querySelector("body").classList.toggle("scroll");   
}
//expand mobile menu when mobile menu icon or "Menu" text is selected
if(mobileMenuLabel){
    mobileMenuLabel.addEventListener("click", mobileMenu);
}

//collapse mobile menu when exit icon or "Exit" text is selected
if(exitMobileMenuLabel){
    exitMobileMenuLabel.addEventListener("click", mobileMenu);
}

// remove mobile menu when window has been resized to desktop mode
window.addEventListener("resize", ()=>{
    if(navContainer.classList.contains("display") && window.innerWidth > 880){
    mobileMenu();
    }
})
//collapse mobile menu when wrapper container is clicked on
mobileMenuWrapper.addEventListener("click", ()=>{
    mobileMenu();
})