//https://manuel.pinto.dev
const textArray = [
    "Tanvi Jadhav."
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing in milliseconds
const pauseBetweenTexts = 1500; // Pause between texts in milliseconds

function type() {
    if (charIndex < textArray[textIndex].length) {
        document.getElementById("typewriter-text").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        document.getElementById("typewriter-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text
        setTimeout(type, typingSpeed + 500); // Start typing the next text after a short delay
    }
}

// Start the typing effect
type();


// Feel free to use this on any personal or commercial project!
// by Justin Bellefontaine

// @JBValo on Twitter
// http://dribbble.com/jbvalo


let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 85,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background= `conic-gradient(#59b8da ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);

let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,    
    progressEndValue1 = 85,    
    speed1 = 100;
    
let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
}, speed);

let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
    progressEndValue2 = 85,    
    speed2 = 100;
    
let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background= `conic-gradient(#59b8da ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }
}, speed);

let circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
    progressEndValue3 = 85,    
    speed3 = 100;
    
let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
}, speed);

let circularProgress4= document.querySelector(".circular-progress4"),
    progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,    
    progressEndValue4 = 70,    
    speed4 = 100;
    
let progress4 = setInterval(() => {
    progressStartValue4++;

    progressValue4.textContent = `${progressStartValue4}%`
    circularProgress4.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue4 == progressEndValue4){
        clearInterval(progress4);
    }
}, speed);

let circularProgress5= document.querySelector(".circular-progress5"),
    progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0,    
    progressEndValue5 = 75,    
    speed5 = 100;
    
let progress5 = setInterval(() => {
    progressStartValue5++;

    progressValue5.textContent = `${progressStartValue5}%`
    circularProgress5.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue5 == progressEndValue5){
        clearInterval(progress5);
    }
}, speed);

let circularProgress6= document.querySelector(".circular-progress6"),
    progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0,    
    progressEndValue6 = 75,    
    speed6 = 100;
    
let progress6 = setInterval(() => {
    progressStartValue6++;

    progressValue6.textContent = `${progressStartValue6}%`
    circularProgress6.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue6 == progressEndValue6){
        clearInterval(progress6);
    }
}, speed);

let circularProgress7= document.querySelector(".circular-progress7"),
    progressValue7 = document.querySelector(".progress-value7");

let progressStartValue7 = 0,    
    progressEndValue7 = 75,    
    speed7 = 100;
    
let progress7 = setInterval(() => {
    progressStartValue7++;

    progressValue7.textContent = `${progressStartValue7}%`
    circularProgress7.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue7 == progressEndValue7){
        clearInterval(progress7);
    }
}, speed);

let circularProgress8= document.querySelector(".circular-progress8"),
    progressValue8 = document.querySelector(".progress-value8");

let progressStartValue8 = 0,    
    progressEndValue8 = 80,    
    speed8 = 100;
    
let progress8 = setInterval(() => {
    progressStartValue8++;

    progressValue8.textContent = `${progressStartValue8}%`
    circularProgress8.style.background= `conic-gradient(#59b8da  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue8 == progressEndValue8){
        clearInterval(progress8);
    }
}, speed);

