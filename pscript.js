function hamburg(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(0px)"
}
function cancel(){
    const navbar=document.querySelector(".cancel")
    navbar.style.transform="translateY(-500px)"
}
const texts=[
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER",
]
const speed =100;
const textElements=document.querySelector(".website-text")

let textIndex=0;
let characterIndex=0;

function websiteDeveloper(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML +=texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(websiteDeveloper,speed);
    }
    else{
        setTimeout(eraseText,100)
    }
}
function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else{
        textIndex=(textIndex+ 1)%texts.length;
        characterIndex=0;
        setTimeout(websiteDeveloper,500)
    }
}

window.onload=websiteDeveloper  