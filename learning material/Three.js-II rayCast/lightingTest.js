import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

//---------------------------------------------------------------    SETUP
const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}

const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

// ---------------------------------------------------------        LIGHTS


const ambientLight = new THREE.AmbientLight()  // ambient
ambientLight.color = new THREE.Color(0xff0000);
console.log(ambientLight.color);
ambientLight.intensity = .5;

scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xff0000, 0.5);  //  directional
directionalLight.position.set(-5, 5, 0)
// scene.add(directionalLight);

const pointLight1 = new THREE.PointLight(0x0000ff, 1); // point light
pointLight1.position.set(0, 0.3, 0);
pointLight1.distance = 0;
pointLight1.intensity = 2;

const pointLight2 = new THREE.PointLight(0x00ff00, 1);
pointLight2.position.set(1, 0.3, 1);
pointLight2.distance = 0;
pointLight2.intensity = 2;

// scene.add(pointLight1, pointLight2);

const spotLight = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1)  //  spot light
spotLight.position.set(0, 2, 3)
spotLight.castShadow = true;
scene.add(spotLight)
scene.add(spotLight.target)

spotLight.target.position.x = -2

//----------------------------------------------------------       ADD OBJECTS

const material = new THREE.MeshStandardMaterial({})
material.roughness = 0.2
//supports lighting!

//NEW for casting shadows add a plane:)
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = -.5;
plane.position.z = 1;
plane.position.x = -1;

scene.add(plane)


//---------------------------------------------------------     RENDER AND ANIMATE
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
const controls = new OrbitControls(camera, canvas)

window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

