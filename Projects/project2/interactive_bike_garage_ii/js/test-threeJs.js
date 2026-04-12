// THREE.JS imports ----
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';



// setup ---- 

//// gltf loader ----
const gltfLoader = new GLTFLoader();


let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

setupContainer();

function setupContainer() {

    //// scene and canvas ----
    let container = document.querySelector('#canvas-container');
    sizes.width = container.clientWidth;
    sizes.height = container.clientHeight;

    console.log(sizes.width, sizes.height)
}

const scene = new THREE.Scene();
let canvas = document.querySelector("canvas#three-ex");

let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 5, 10);
scene.add(camera);

//// renderer ----
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Good for sharp text/edges
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);

//// effects composer ----
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

//effects
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
const bloomPass = new UnrealBloomPass(resolution, 0.04, 0.2, 0.2);
composer.addPass(bloomPass);

const outputPass = new OutputPass()
composer.addPass(outputPass);



// Main Scene ----
// add gltf model
let garageModel = null;

loadAndRunModels();
async function loadAndRunModels(objectsGroup) {
    try {
        // const loader = new HDRLoader();

        // // 2. Load your HDR file (make sure to update the path to your actual file)
        // const hdrTexture = await loader.loadAsync('assets/garage-v0/combined map.hdr');

        // // 3. Set the mapping so Three.js knows it's a 360/spherical image
        // hdrTexture.mapping = THREE.EquirectangularReflectionMapping;

        // // 4. Apply it to the scene! 
        // scene.environment = hdrTexture;
        // console.log(scene.environment)

        // // Optional: Uncomment the next line if you also want to see the HDR as the background skybox
        // scene.background = lightMap;

        garageModel = await gltfLoader.loadAsync('assets/garage-v0/project2-interactiveBikeGarage-cart263.gltf');
        let objs = [] //keeping the array if i need more gltf later
        objs.push(garageModel);

        addAndRun(objs)

    }
    catch (error) {
        console.log(error.message)
    }
}


//// mouse and parallax for blender camera ----
const mouse = { x: 0, y: 0 };
const targetPos = new THREE.Vector2(0, 0);
const originalBlenderPos = new THREE.Vector3();
const movementLimit = 5; // Maximum units the camera shifts
const dampening = 0.02;    // Smoothness (lower = silkier)


////// event listeners for mouse and parallax ----
window.addEventListener('mousemove', (event) => {
    // Normalize mouse to -1 to +1
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
// used no matter protocamera or blendercamera
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


//// main run function ----
function addAndRun(loadedObjsArray) {
    const garageScene = loadedObjsArray[0].scene;

    console.log(garageScene.children[0]);
    scene.add(garageScene);




    ////camera toggle ----
    let blenderCamera = garageScene.children.find(child => child.isCamera);
    const protoCamera = camera;
    //change between proto and blender cam here
    let usedCam = blenderCamera;


    if (usedCam === blenderCamera) {
        blenderCamera.name = "blenderCamera";
        camera = blenderCamera;

        originalBlenderPos.copy(blenderCamera.position);


        // Update the aspect ratio to match the current window
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // CRITICAL: Tell the composer and controls to use the new camera
        renderPass.camera = camera;
        controls.object = camera;
        controls.enabled = false;
    }
    else {
        controls.object = camera; // Re-bind the controls to this camera
        controls.enabled = true;
        renderPass.camera = camera;
        controls.update();
    }

    animate();

    function animate() {
        requestAnimationFrame(animate);

        if (camera.name === "blenderCamera") {
            // 1. Calculate the target OFFSET (based on mouse)
            targetPos.x = mouse.x * movementLimit;
            targetPos.y = mouse.y * movementLimit;

            // 2. We use a separate variable or the camera itself to "Lerp" 
            // to that target offset. Let's apply it directly to the camera:

            // Target position = Original position + Mouse offset
            const targetX = originalBlenderPos.x + targetPos.x;
            const targetY = originalBlenderPos.y + targetPos.y;

            // Smoothly move the camera from where it IS to where it WANTS TO BE
            camera.position.x += (targetX - camera.position.x) * dampening;
            camera.position.y += (targetY - camera.position.y) * dampening;

            // 4. Look at the center
            camera.lookAt(0, 0, 0);
        }



        composer.render(); // instead of renderer.render()
    }
}


