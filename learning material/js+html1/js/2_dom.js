window.onload = setup
function setup() {
    // console.log("running setup");
    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));
    // console.log(document.getElementsByTagName("div"));

    // let allDivs = document.getElementsByTagName("div");
    // console.log(allDivs[7], allDivs.length);

    // // finds all the reference in the HTML and stores it in an array
    // console.log(document.querySelectorAll("div p"))

    // console.log(document.querySelector("#two").classList);

    // console.log(document.querySelector("#one").style);

    // console.log(document.querySelectorAll("span")[0].parentElement);

    // let childsOfTwo = document.getElementById("two").children

    // for (let i = 0; i < childsOfTwo.length; i++) {
    //     childsOfTwo[i].textContent = "i am a blue square";
    // };

    // document.querySelector(".square_shape").classList.remove("square_shape");

    document.querySelector("h1").setAttribute("id", "newId")

    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)



}