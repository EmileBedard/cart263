let bikeContainers = document.querySelectorAll("bikeObjects");
let toolbox = document.querySelector("toolbox");


for (let i = 0; i < bikeContainers.length; i++) {
    let bikeContainer = bikeContainers[i];
    bikeContainer.addEventListener("click", registerParts());
}

function registerParts() {

}