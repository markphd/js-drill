const body = document.body;
const heading = document.createElement("h1");
const headingText = document.createTextNode("The Code Creative");
const button = document.createElement("button");
const buttonText = document.createTextNode("Remove attribute");
const paragraph = document.createElement("p");
const paragraphText = document.createTextNode("DOM manipulation is fun!");

heading.setAttribute("class", "heading1");
heading.setAttribute("style", "color: red;");

button.setAttribute("style", "color: red;");

body.setAttribute("style", "background-color: lightgrey;");

body.appendChild(heading);
body.appendChild(button);
body.appendChild(paragraph);

heading.appendChild(headingText);
paragraph.appendChild(paragraphText);
button.appendChild(buttonText);

const clickHandler = () => {
  heading.toggleAttribute("style");
};

button.onclick = clickHandler;
