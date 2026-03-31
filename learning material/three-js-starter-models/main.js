import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// gltf loader
const gltfLoader = new GLTFLoader();
// canvas
const canvas = document.querySelector("canvas#three-ex");
const scene = new THREE.Scene();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 50)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight);

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);


//make a plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({ color: "#657997" }),
)
plane.rotation.x = - Math.PI * 0.5

scene.add(plane)


// add gltf model
let gltfModel1 = null;
let gltfModel2 = null;
try {
    gltfModel1 = await gltfLoader.loadAsync('model/Fox/glTF/Fox.gltf');
    gltfModel2 = await gltfLoader.loadAsync('model/rooster/rooster.gltf');

    let objs = []
    objs.push(gltfModel1)
    objs.push(gltfModel2)

    addAndRun(objs)

}
catch (error) {
    console.log(error.message)
}





function addAndRun(loadedObjsArray) {
    let foxModel = loadedObjsArray[0].scene.children[0]
    let roosterModel = loadedObjsArray[1].scene.children[0]
    console.log(loadedObjsArray[0]);

    foxModel.position.set(0, 0, 0);
    foxModel.scale.set(.015, .015, .015)

    roosterModel.position.set(1, 0, 0);
    roosterModel.scale.set(1, 1, 1)

    //move fox
    // foxModel.position.z = -5;

    scene.add(foxModel, roosterModel);

    const mixer = new THREE.AnimationMixer(foxModel)

    // Access the second animation clip in the array
    const clip = loadedObjsArray[0].animations[2];

    //returns a reference to an AnimationAction
    //https://threejs.org/docs/index.html?q=Anima#AnimationAction
    const anim_action = mixer.clipAction(clip);

    // Start playing the animation
    anim_action.play()

    let elapsedTime = 0; //
    window.requestAnimationFrame(animate);

    function animate(timer) {
        //calculate the difference since last frame
        let deltaTime = (timer - elapsedTime) / 1000; //put in secs
        elapsedTime = timer; //update  new elapsedTime

        // Update controls
        controls.update();
        if (mixer) {
            mixer.update(deltaTime);
        }

        // fox model
        // foxModel.position.z += .01
        // Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(animate);
    }
}
