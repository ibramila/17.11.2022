let count = document.querySelector("count");
let button = document.querySelector("button");

button.addEventListener("click", function () {
    let countnew = parseInt(count.innerHTML);
    count.innerHTML = countnew + 1;
});

// jsda nese pb var

