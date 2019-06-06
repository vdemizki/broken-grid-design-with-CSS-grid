var topic1 = document.getElementsByClassName("topic1");
var topic2 = document.getElementsByClassName("topic2");
var topic3 = document.getElementsByClassName("topic3");
var container = document.getElementsByClassName("container");
var aTextPart = document.getElementsByClassName("aTextPart");
var bTextPart = document.getElementsByClassName("bTextPart");
var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
var img3 = document.getElementsByClassName("img3");


function burgerFunction(x) {
  x.classList.toggle("change");
}

function setTopic1(element) {
    element.style.opacity = 1;
    topic2[0].style.opacity = 0.5;
    topic3[0].style.opacity = 0.5;
    img1[0].style.backgroundImage = "url('/images/topic1_img1.png')";
    img2[0].style.backgroundImage = "url('/images/topic1_img2.png')";
    img3[0].style.backgroundImage = "url('/images/topic1_img3.png')";
    container[0].style.background = "#FFC700";
    aTextPart[0].innerHTML = "Broken";
    bTextPart[0].innerHTML = "Grid";
}

function setTopic2(element) {
    element.style.opacity = 1;
    topic1[0].style.opacity = 0.5;
    topic3[0].style.opacity = 0.5;
    img1[0].style.backgroundImage = "url('/images/topic2_img1.png')";
    img2[0].style.backgroundImage = "url('/images/topic2_img2.png')";
    img3[0].style.backgroundImage = "url('/images/topic2_img3.png')";
    container[0].style.background = "#19A2B0";
    aTextPart[0].innerHTML = "Design";
    bTextPart[0].innerHTML = "";
}

function setTopic3(element) {
    element.style.opacity = 1;
    topic1[0].style.opacity = 0.5;
    topic2[0].style.opacity = 0.5;
    img1[0].style.backgroundImage = "url('/images/topic3_img1.png')";
    img2[0].style.backgroundImage = "url('/images/topic3_img2.png')";
    img3[0].style.backgroundImage = "url('/images/topic3_img3.png')";
    container[0].style.background = "#F86C11";
    aTextPart[0].innerHTML = "Project";
    bTextPart[0].innerHTML = "2019";
}
