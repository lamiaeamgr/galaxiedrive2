const cars = [
    {
        image: "assets/images/1-removebg-preview.png",
        title: "DACIA LOGAN",
        description: "Description for DACIA LOGAN",
        price: "249DH "
    },
    {
        image: "assets/images/2-removebg-preview.png",
        title: "WOLKSWAGEN TOUAREG ",
        description: "Description for WOLKSWAGEN TOUAREG ",
        price: "749DH"
    },
    {
        image: "assets/images/3-removebg-preview.png",
        title: "WOLKSWAGEN TOUAREG RLINE",
        description: "Description for WOLKSWAGEN TOUAREG RLINE",
        price: "849DH"
    }
];

let currentIndex = 0;

function initAnimation() {
    const col1 = document.querySelector(".col1");
    col1.classList.add("initial-show");

    setTimeout(() => {
        col1.classList.remove("initial-show");
        col1.classList.add("show");
        setInterval(changeContent, 7000);
    }, 1500);
}

document.addEventListener("DOMContentLoaded", initAnimation);

function changeContent() {
    const col1 = document.querySelector(".col1");
    const col2 = document.querySelector(".col2");
    const carImage = document.getElementById("carImage");

    col1.classList.remove("show");
    col1.classList.add("hide");

    col2.classList.remove("moveFromRight");
    col2.classList.add("moveToRight");

    setTimeout(() => {
        updateContent();
        col1.classList.remove("hide");
        col1.classList.add("show");
    }, 500);

    carImage.style.opacity = 0;

    setTimeout(() => {
        carImage.src = cars[currentIndex].image;
        carImage.onload = () => {
            carImage.style.opacity = 1;
            carImage.classList.add("loaded");
        };
    }, 500);

    currentIndex = (currentIndex + 1) % cars.length;
}

function updateContent() {
    const title = document.querySelector(".n");
    const paragraph = document.querySelector("p");
    const priceContainer = document.querySelector(".price-container");

    title.innerHTML = cars[currentIndex].title;
    paragraph.innerHTML = cars[currentIndex].description;
    priceContainer.innerHTML = `<h3 class="h3">${cars[currentIndex].price}</h3>`;
}

document.addEventListener("DOMContentLoaded", initAnimation);

