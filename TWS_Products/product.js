// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";


const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rally-ai-camera-graphite-front-01.webp") {
    myImage.setAttribute("src", "images/rally-ai-camera-graphite-front-01.webp");
  } else {
    myImage.setAttribute("src", "images/logi.png");
  }
});