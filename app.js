const containerEL = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEL.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    popupContainerEl.classList.add("active");
    containerEL.classList.remove("active");
})
