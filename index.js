// single element selector

const header = document.getElementById("header");
header.style.color = "red"

//  quary selector
const pera= document.querySelector("#unique-pera");
pera.style.border = "2px solid red"

// multiple element selector
const tags = document.getElementsByTagName("p");//array like object
for(const tag of tags){
    // tag.style.backgroundColor= "yellow"
    tag.style.fontSize= "20px"
}
const classNames = document.getElementsByClassName("info");
for(const names of classNames){
    names.style.border= "2px solid blue"
}


const myQuery = document.querySelectorAll(".info");

console.log(myQuery[0]) // if you want single element style you did index method



// node vs element
const container2 = document.querySelector(".container-2")
// console.log(container2.childNodes)// in html all section one one node and gap to be one node
console.log(container2.children)// just tag a element  every element is part of node but every element not node

//parent and children siblings
const item2 = document.getElementById("item-2");
const parent1 = item2.parentElement;
const parent = item2.parentElement.children;
const nextSiblings = item2.nextElementSibling;
console.log(nextSiblings)
const nextSiblings2 = item2.previousElementSibling;
console.log(nextSiblings2)

// innerText || textContent || innerHtml

const container4 = document.querySelector(".container-4");
console.log(container4.innerText)//hidden text not showed
console.log(container4.textContent)// if you text hidden textContent must be access
console.log(container4.innerHTML) // all explain

// setArribute || get attribute || removedAttribute
const myBtn = document.getElementById("myButton");
myBtn.setAttribute("class", "btn-primary"); // set attribute accept two value
myBtn.setAttribute("disabled", true)

// removedAttribute
myBtn.removeAttribute("disabled")
// get attribute
//    <a href="" id="myLink" target="_blank" tittle="Go to Example">Go here</a>
const myLink = document.getElementById("myLink");
const link = myLink.getAttribute("tittle")
console.log(link) // show the result 

// creating an element and append || add class name || classlist [add(),remove()]|| append child vs append || 

const container5 = document.querySelector(".container5");
const p = document.createElement("p");
p.innerText = "i am created by p tag";
container5.appendChild(p)

const h1 = document.createElement("h1");
h1.innerText = "hello bro";
// h1.classList.add("common-class")
h1.className = "common-class"
h1.classList.remove("common-class")
container5.appendChild(h1)


// remove () or remove child()
// container5.remove() // delete id 
container5.removeChild(p) // child delete