let randomNumber = Math.floor(Math.random()*4) +1;
let randomImageSource = "images/celeb" + randomNumber + ".jpeg";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor( Math.random() * ( 1 + 8 - 5 ) ) + 5;
let randomImageSource2 = "images/celeb" + randomNumber2 + ".jpeg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
