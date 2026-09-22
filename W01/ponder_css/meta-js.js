// How to manipulate the DOM with Javascript

// Grab our h1 from the page

let heading = document.querySelector("h1");
//let heading = document.querySelectorAll("h1")

console.log(heading);

//Change the text of the element
heading.textContent = "Changed the heading to something else!";

//change the text color
heading.style.color = "#0000FF";

//pick your own style and change it
heading.style.fontStyle = "italic";

//retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
//Same thing
document.querySelector("#topics").style.color = "red";

//select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Lenskart_graphic_poster.jpg/1920px-Lenskart_graphic_poster.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                