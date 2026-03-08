window.addEventListener('load', function () {
    let leftButton = document.getElementById("registerPartsButton");
    let rightButton = document.getElementById("maintenanceButton");
    let bike = document.querySelector(".bike-element");

    let tripod = document.querySelector(".tripod-element");
    let shop = document.querySelector(".shop-element");



    leftButton.addEventListener("mouseover", function () {
        tripod.style.transform = "translate(21vw)";
    })

    bike.addEventListener("mouseover", function () {
        tripod.style.transform = "translate(21vw)";
        bike.style.transform = "translate(20px)";
        shop.style.transform = "translate(-21vw)";
    })

    rightButton.addEventListener("mouseover", function () {
        shop.style.transform = "translate(-21vw)";
    })

    leftButton.addEventListener("mouseout", function () {
        tripod.style.transform = "none";
    })

    bike.addEventListener("mouseout", function () {
        tripod.style.transform = "none";
        bike.style.transform = "none";
        shop.style.transform = "none";
    })

    rightButton.addEventListener("mouseout", function () {
        shop.style.transform = "none";
    })


})
