const navigation = document.querySelectorAll(".page-header__navigation");

let navItemsOne = document.querySelector('.nav_item-one');
let navItemsTwo = document.querySelector('.nav_item-two');
let navItemsThree = document.querySelector('.nav_item-three');
let navItemsFour = document.querySelector('.nav_item-four');

let navActiveOne = document.querySelector('.nav_text_one-active');
let navActiveTwo = document.querySelector('.nav_text_two-active');
let navActiveThree = document.querySelector('.nav_text_three-active');
let navActiveFour = document.querySelector('.nav_text_four-active');


navItemsTwo.addEventListener('click', () => {
    if (navActiveTwo.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    }
    
    else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "block";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "none";
    }
});

navItemsOne.addEventListener('click', () => {
    if (navActiveOne.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    }
    
    else {
        navActiveOne.style.display = "block";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "none";
    }
});

navItemsThree.addEventListener('click', () => {
    if (navActiveThree.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    }
    
    else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "block";
        navActiveFour.style.display = "none";
    }
});

navItemsFour.addEventListener('click', () => {
    if (navActiveFour.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    }
    
    else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "block";
    }
});