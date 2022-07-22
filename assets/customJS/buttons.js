//define variables
const colorsList = document.querySelectorAll(".option"); //list of all colors
const sampleButton = document.querySelector(".default-btn-container").children[0]; //prototype button
const resetIcon =  document.getElementById("reset-icon");

//functionality: apply style class to prototype button using the selected color
const applyStyleClass = (colorName)=>{ 
    resetIcon.classList.remove("hidden");
    resetIcon.classList.add("reset");
    sampleButton.classList = ""; //clear classList
    sampleButton.classList.add(colorName); // apply the class of the selected item 
    sampleButton.innerHTML = colorName;
}

//functionality: add event listener to each color label and apply style class to sample button
colorsList.forEach(color=>{
    const colorLabel = color.children[0];
    colorLabel.addEventListener("click", e =>{ //input label field
        const colorName = e.target.getAttribute("id"); //color name = selected input field id value
        applyStyleClass(colorName);

    })
})

//functionality: add event listener to reset icon, on click: reset sample button to default settings 
const resetSampleButton = ()=>{
    resetIcon.addEventListener("click", ()=>{
        sampleButton.classList="default-color"; //reset class list
        resetIcon.classList.remove("reset");
        resetIcon.classList.add("hidden");
        sampleButton.innerHTML = "Sample Button";
    })
}

resetSampleButton();
