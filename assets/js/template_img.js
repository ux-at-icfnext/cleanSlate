//define variables
const fullSizeImgContainer = document.querySelector(".expanded-img-container");
const fullSizeImg = document.querySelector(".expanded-img");

// functionality: add event listener to all template images
document.querySelectorAll(".template-img").forEach(element=>{
    element.addEventListener("click", e =>{
        const img_url = e.target.src; // extract selected img url
        const img_alt_text = e.target.alt; // extract selected img alt text
        document.querySelector("body").classList.add("noscroll"); // disable scroll functionality
        fullSizeImgContainer.classList.add("overlay"); // apply overlay background color
        fullSizeImg.setAttribute("src",img_url); // set expanded-img element url to selected img url
        fullSizeImg.setAttribute("alt",img_alt_text); // set expanded-img element alt text to selected img alt text
    })
})
// functionality: add event listener to exit icon
const exit_img = document.querySelector(".collapse-expanded-img");
if(exit_img){ // if image is not null
    exit_img.addEventListener("click",()=>{
        document.querySelector("body").classList.remove("noscroll"); // enable scroll functionality
        fullSizeImgContainer.classList.remove("overlay"); // remove overlay background color
        fullSizeImg.setAttribute("src",""); // reset .expanded-img element url
        fullSizeImg.setAttribute("alt",""); // reset .expanded-img element alt text
    })
}
