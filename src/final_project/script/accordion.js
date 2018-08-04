const accordion = document.querySelectorAll(".accordion_title");

let textOne = document.querySelector('.text-one'); 
let textTwo = document.querySelector('.text-two');
let titleOne = document.querySelector('.title-one');
let titleTwo = document.querySelector('.title-two');
let Plus = document.querySelector('.acordion_plus');
let PlusOne = document.querySelector('.plus_one');
let PlusTwo = document.querySelector('.plus_two');

titleOne.addEventListener('click', () => {
    if (textOne.style.display === "block") {
        textOne.style.display = "none";
        PlusOne.style.content = "url('./assets/images/plus-solid.svg')";
    }
    
    else {
        PlusOne.style.content = "url('./assets/images/minus-solid.svg')";
        PlusTwo.style.content = "url('./assets/images/plus-solid.svg')";
        textOne.style.display = "block";
        textTwo.style.display = "none";
    }
});

titleTwo.addEventListener('click', () => {
    if (textTwo.style.display === "block") {
        textTwo.style.display = "none";
        PlusTwo.style.content = "url('./assets/images/plus-solid.svg')";
    }
    
    else {
        PlusTwo.style.content = "url('./assets/images/minus-solid.svg')";
        PlusOne.style.content = "url('./assets/images/plus-solid.svg')";
        textTwo.style.display = "block";
        textOne.style.display = "none";
    }
});