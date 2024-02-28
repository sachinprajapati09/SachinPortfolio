// Get the element that you want to change
var changingText = document.getElementById("change-text");

// Set an array of texts you want to cycle through
var texts = ["Web Devloper", "Frontend Devloper", "Graphic Designer"];

// Set the index to track the current text
var index = 0;

// Function to change the text and scale
function changeText() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length; // Move to the next text, looping back to the beginning if necessary
    changingText.style.transform = "scale(.5)"; // Set the scale transformation
    setTimeout(function() {
        changingText.style.transform = "scale(1)"; // Reset the scale after 500 milliseconds
    }, 500);
    setTimeout(changeText, 2000); // Change text every 2000 milliseconds (2 seconds)
}

// Start the continuous text change
changeText();

let about = document.getElementById("box3")
about.addEventListener("click", getinnerText)


function getinnerText() {
    let text = document.getElementById("box").innerText;
    document.getElementById("about-me").innerText = text;
}

//////////////////////


let menuLi = document.querySelectorAll("header a div ");
let section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop);
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu)