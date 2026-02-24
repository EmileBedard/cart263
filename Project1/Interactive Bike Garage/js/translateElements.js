window.onload = function () {

    let leftButton = document.getElementById("registerPartsButton");
    let rightButton = document.getElementById("maintenanceButton");
    let bike = document.querySelector(".bike-element");

    let tripod = document.querySelector(".tripod-element");
    let shop = document.querySelector(".shop-element");



    leftButton.addEventListener("mouseover", function () {
        console.log("over!")

        tripod.style.transform = "translate(21vw)";
        console.log(tripod.style.transform)

    })

    leftButton.addEventListener("mouseout", function () {
        console.log("out!")
        tripod.style.transform = "none";


    })


    // let bike = document.querySelector(".bike-element");
    // bike.addEventListener("click", function () {
    //     bike.style.transform = "none";
    // });
}