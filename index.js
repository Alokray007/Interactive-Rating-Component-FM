const mainContainer = document.querySelector(".main");
const thanksContainer = document.querySelector(".thank-you");

const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rateagain")

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    mainContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
    if (rating.innerHTML === '') {
        rating.innerHTML = "5";
    }
});

rateAgainBtn.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
