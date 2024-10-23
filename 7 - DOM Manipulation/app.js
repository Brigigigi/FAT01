// DOM - Document Object Model

let elementWithID = document.getElementById("first-div"); //targets element from html by its id
console.log("This is Element with ID:", elementWithID);
elementWithID.textContent = "Div 1";

let elementsWithClass = document.getElementsByClassName("sample-div"); //targets elements fom html by class
console.log("This Elements are in a class:", elementsWithClass); // Returns an HTML collection
elementsWithClass[1].textContent = "Div 2";

let listItems = document.getElementsByTagName("li"); // targets elements from html by tagname
console.log("Elements with Tag:", listItems);

listItems[3].style.backgroundColor = "Aqua";
listItems[3].style.color = "tomato";

// Accepts (#)ID, (.)Classname, Tag
// Needs a prefix
// Cant target multiple element, Returns the first element of the list
let orderedListItem = document.querySelector(".ordered-list");
console.log("Elements with querySelector", orderedListItem);

let unorderedListItem = document.querySelector(".unordered-list");
console.log("Elements with querySelector", unorderedListItem);
unorderedListItem.style.backgroundColor = "red";
unorderedListItem.style.color = "yellow";

// Accepts (#)ID, (.)Classname, Tag
// Needs a prefix
let headings = document.querySelectorAll("h3");
console.log("Query Selector All:", headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "yellow";
});

let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
); //update attriburte within an element

let parentElement = document.querySelector("#parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

let darkModeButton = document.querySelector("#dark-mode-btn");

if ((darkModeButton.textContent = "Dark Mode")) {
    darkModeButton.addEventListener("click", function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById ("page-mode-text");
    pageModeText.textContent = "Dark Mode";
    darkModeButton.textContent = "Light Mode"
});
}
else if ((darkModeButton.textContent = "Light Mode")) {
    darkModeButton.addEventListener("click", function(){
        let pageContainer = document.getElementById("page-container");
        pageContainer.style.backgroundColor = "White";
        pageContainer.style.color = "black";
        let pageModeText = document.getElementById ("page-mode-text");
        pageModeText.textContent = "Light Mode";
        darkModeButton.textContent = "Dark Mode"
    });
}
    
