window.onload = function () {
    // Our garden
    let garden = {

        numDogs: 10,
        dogs: [],

        numBirds: 20,
        birds: [],

        // An array to store the individual flowers
        flowers: [],
        // How many flowers in the garden
        numFlowers: 60,

        /*grass object */
        grass: {
            // The color of the grass (background)
            grassColor: {
                r: 120,
                g: 180,
                b: 120,
            },
            //the grass element
            grassDiv: document.createElement("div"),
        },

        /*sky object */
        sky: {
            // The color of the sky (background)
            skyColor: {
                r: 83,
                g: 154,
                b: 240,
            },
            //the sky element
            skyDiv: document.createElement("div"),
        },

    };

    let sun = new Sun(10, 10, { r: 240, g: 206, b: 83 })

    function createAndRenderTheGarden() {
        /* note how we use dot notation....*/
        //sky
        garden.sky.skyDiv.classList.add("sky");
        garden.sky.skyDiv.style.background = `rgb(
        ${garden.sky.skyColor.r},
        ${garden.sky.skyColor.g},
        ${garden.sky.skyColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

        // //sun - IN the sky
        // garden.sun.sunDiv.classList.add("sun");
        // garden.sun.sunDiv.style.background = `rgb(
        // ${garden.sun.sunColor.r},
        // ${garden.sun.sunColor.g},
        // ${garden.sun.sunColor.b}
        // )`;
        // //append to the SKY div
        // document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);

        sun.renderSun();

        //grass
        garden.grass.grassDiv.classList.add("grass");
        garden.grass.grassDiv.style.background = `rgb(
        ${garden.grass.grassColor.r},
        ${garden.grass.grassColor.g},
        ${garden.grass.grassColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
    }

    // // calls the constructor
    // let flower = new Flower();
    // flower.renderFlower()

    // // Create our flowers by counting up to the number of the flowers
    // for (let i = 0; i < garden.numFlowers; i++) {
    //     // NEW! Create a new flower
    //     let flower = new Flower(100, 100, 50, 400,);
    //     // Add the flower to the array of flowers
    //     garden.flowers.push(flower);
    // }




    // for (let i = 0; i < garden.numFlowers; i++) {
    //     // Create variables for our arguments for clarity
    //     let x = Math.random() * (window.innerWidth - 100);
    //     let y = Math.random() * 120;
    //     let size = Math.random() * 30 + 50;
    //     let stemLength = Math.random() * 50 + 50;
    //     let petalColor = {
    //         r: parseInt(Math.random() * 155) + 100,
    //         g: parseInt(Math.random() * 155) + 100,
    //         b: parseInt(Math.random() * 155) + 100,
    //     };


    //     // Create a new flower using the arguments
    //     let flower = new Flower(x, y, size, stemLength, petalColor);
    //     // Add the flower to the array of flowers
    //     garden.flowers.push(flower);
    // }

    // for (let i = 0; i < garden.numFlowers; i++) {

    //     // Render the array of flowers
    //     garden.flowers[i].renderFlower();
    // }

    // window.addEventListener("keydown", function handleKeyDown(event) {
    //     sun.updateSun(event)
    // });




    function createDogs() {
        // Create the correct number of dogs and put them in our array
        for (let i = 0; i < garden.numDogs; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * 100;
            let dog = new Dog(x, y, 15, 15);
            garden.dogs.push(dog);
        }
    }

    function createBirds() {
        //create some birds
        for (let i = 0; i < garden.numBirds; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * 100;
            let bird = new Bird(x, y, 15, 15);
            garden.birds.push(bird);
        }
    }

    function renderAnimals() {

        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.renderAnimal();
        }

        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.renderAnimal();
        }
    }

    function updateGarden() {
        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.move();
            dog.wrap();
        }

        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.move();
            bird.wrap();
        }

        window.requestAnimationFrame(updateGarden)
    }

    createAndRenderTheGarden();
    createDogs(); // make dogs instances
    createBirds(); // make birds instances
    renderAnimals();
    window.requestAnimationFrame(updateGarden);


}