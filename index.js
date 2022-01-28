const rate = document.querySelector("#rate");
const heartEl = document.querySelector("#heart-element")

rate.addEventListener("input", function() {
    let x = rate.value;
    let y = (60 / x)
    heartEl.style.animation = "container ease-out " + y + "s infinite";
})
 
