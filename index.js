const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === ""images/Hero Image.jpg"") {
    myImage.setAttribute("src", ""images/portfolio_header"");
  } else {
    myImage.setAttribute("src", "images/Hero Image");
  }
});