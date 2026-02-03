window.onload = function () {
    console.log("keys");

    let speedX = 5;
    let boxA = document.querySelector("#boxA");

    // anonymous function here
    window.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {

            let currentPosition = parseInt(boxA.style.left);

            boxA.style.left = currentPosition + speedX + "px";
        }

        if (e.key === "ArrowLeft") {
            console.log(parseInt(boxA.style.left))
            let currentPosition = parseInt(boxA.style.left);

            boxA.style.left = currentPosition - speedX + "px";
        }

    })
}