const commutator = document.querySelectorAll(".presentation__images");

let bigImage = document.querySelector(".presentation__images-big");
let imageOne = document.querySelector(".small_images-one");
let imageTwo = document.querySelector(".small_images-two");
let imageThree = document.querySelector(".small_images-three");
let imageFour = document.querySelector(".small_images-four");

imageOne.addEventListener('click', () => {

    bigImage.classList.add('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.add('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.remove('active_image');
});

imageTwo.addEventListener('click', () => {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.add('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.add('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.remove('active_image');
});

imageThree.addEventListener('click', () => {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.add('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.add('active_image');
    imageFour.classList.remove('active_image');
});

imageFour.addEventListener('click', () => {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.add('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.add('active_image');
});