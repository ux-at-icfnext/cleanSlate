const htmlContent = document.querySelector("#html-accordion .flex-reverse .language-html");
const htmlCopyBtn = document.querySelector("#html-accordion .flex-reverse .usa-button");
const cssContent = document.querySelector("#css-accordion .flex-reverse .language-css");
const cssCopyBtn = document.querySelector("#css-accordion .flex-reverse .usa-button");

const copyToClipboard = content =>{
    window.navigator.clipboard.writeText(content.innerText)

};

if(htmlContent){
    htmlCopyBtn.addEventListener("click", copyToClipboard(htmlContent));
}
if(cssContent){
    cssCopyBtn.addEventListener("click", copyToClipboard(htmlContent));
}






