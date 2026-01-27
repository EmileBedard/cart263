window.onload = setup;
/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */ console.log(document.getElementsByTagName("p"));
    /***OUTPUT: 
     * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
     */


    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */console.log(document.querySelector("p"));
    /***OUTPUT: 
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */console.log(document.querySelectorAll(".inner-container"));
    /***OUTPUT: 
     * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
     */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */let nbImgs = document.querySelectorAll(".img-container");
    for (let i = 0; i < nbImgs.length; i++) {
        console.log(document.querySelector("img"))
    }
    /***OUTPUT: 
     * <img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">

<img src="task-2-images/two.png">
     */


    /*************************************** */
    /* 5A: all h2 elements */console.log(document.querySelectorAll("h2"))
    /* 5B: length of the list in 5A */console.log(document.querySelectorAll("h2").length)
    /* 5C: the text content of the first element in the list from 5A */console.log(document.querySelectorAll("h2")[0].textContent)
    /***CODE */
    /***OUTPUT:
     * a:
NodeList [h2]
0
: 
h2
length
: 
1
[[Prototype]]
: 
NodeList

     * b:1
     * c:The header of this fancy page
     * 
     */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */console.log(document.getElementById("parent"))
    /***OUTPUT: 
     * <section id="parent">
<div class="inner-container"></div>
<div class="inner-container">
<div class="inner-container">
<div class="inner-container">
<div class="inner-container"></div>
<div class="inner-container">
<div class="inner-container"></div>
<div class="inner-container"></div>
</section>
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */

    // part two html screenshot
    let newImg = document.createElement('img');
    newImg.src = "task-2-images/part-two-html-screenshot.png"


    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */let firstParagraph = document.querySelector("p")
    firstParagraph.textContent = "text changed by Emile Bedard on the following date: January 22nd 2026";
    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE */let conContainer = document.querySelectorAll(".content-container");
    conContainer[0].style.backgroundColor = "orange"
    conContainer[1].style.backgroundColor = "purple"


    "task-2-images/two.png"
    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */document.querySelector("img").src = "task-2-images/seven.png"

    /*************************************** */
    /* 4: Select the third paragraph element on the page and 
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE */document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"

    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and 
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </H2>"

    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */let fifthParagraph = document.querySelectorAll("p")[4];
    fifthParagraph.classList.add("newStyle");

    let img = document.createElement("img");
    img.src = "task-2-images/one.png"
    fifthParagraph.appendChild(img);

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */

    let colors = ['red', 'blue', 'green', 'orange'];
    let innerContainers = document.querySelectorAll(".inner-container");
    console.log(colors.length)
    for (let i = 0; colors.length > i; i++) {
        innerContainers[i].style.backgroundColor = colors[i];
    };


    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */



    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(),
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */

    let allPTagsThree = document.querySelectorAll("p");

    function customCreateElement(parent) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "Using create element";
        newParagraph.style.background = "green";
        newParagraph.style.color = "white";
        parent.appendChild(newParagraph);
    }

    for (let i = 0; allPTagsThree.length > i; i++) {
        customCreateElement(allPTagsThree[i])
    }

    let p3html = document.createElement('img');
    p3html.src = "task-2-images/part-three-newparagraphs-html.png"

    let p3browser = document.createElement('img');
    p3browser.src = "task-2-images/part-three-newparagraphs-browser.png"

    /***EXPLANATION::
     * Here JS is selecting every paragraph elements, stores them in an array variable. Then, it proceeds to call a custom function (customCreateElement) every time the for loop i value is less than the length value of the "every paragraphs array". After, it adds a custom P element with white letters and green background for every targeted P element.
     * 
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)).
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense...
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    let color = "purple";
    let text = "ODD";


    for (let i = 0; i < 10; i++) {

        let top = i * 40 + "px";

        for (let a = 0; a < 10; a++) {

            let box = customNewBoxCreate(document.querySelector("#new-grid"));

            box.style.left = a * 40 + "px";
            box.style.top = top;
            box.style.background = color;
            box.textContent = text;

        };

        if (color === "purple") {
            color = "white"
            text = "EVEN"
        }
        else if (color === "white") {
            color = "purple"
            text = "ODD"

        }

    }

    function customNewBoxCreate(parent) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");
        parent.appendChild(newDiv);
        return (newDiv);
    }

    let p3boxhtml = document.createElement('img');
    p3boxhtml.src = "task-2-images/part-three-grid1.png"

    let p3boxesbrowser = document.createElement('img');
    p3boxesbrowser.src = "task-2-images/part-three-gridsofboxes-withbonus.png"

    /***EXPLANATION::
     * here every time the first loop starts it sets the hight with the css in line "top" attribute. Then draws a row according to the picked color and finished the row loop before moving the top a bit down and restarting again.
     * 
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ...
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder),
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red,
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder
        when dividing by three. */

    /***CODE */
    let backColor = "white";
    let rowNb = 0;

    for (let i = 0; i < 10; i++) {

        let left = i * 40 + "px";


        let col = (i % 3);

        if (col === 0) {
            backColor = "white";
            rowNb = 0;
        }
        else if (col === 1) {
            backColor = "red";
            rowNb = 1;
        }
        else if (col === 2) {
            backColor = "yellow";
            rowNb = 2;
        }

        for (let a = 0; a < 10; a++) {

            let box = customNewBoxCreate(document.querySelector("#new-grid-three"));

            box.style.top = a * 40 + "px";
            box.style.left = left;
            box.style.background = backColor;
            box.textContent = rowNb;

        };
    }

    let p3NewBoxHtml = document.createElement('img');
    p3NewBoxHtml.src = "task-2-images/part-three-grid2-123withModuloOp.png"

    p3boxesbrowser.src = "task-2-images/part-three-gridsofboxes-withbonus.png"


    /***EXPLANATION::
     * here the program draws each column one by one and takes the modulo operator value to assign a certain text (0,1,2) and a certain color.
     * 
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}