// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader();
const group = new THREE.Group();
scene.add(group);

//A: the geometry

//B: the material

const water_texture = await loader.loadAsync('textures/Ice002_1K-JPG_Color.jpg');
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
water_texture.colorSpace = THREE.SRGBColorSpace;


const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2


const sizes = {
    width: 800,
    height: 600
}
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

//move camera
camera.position.z = 2;

//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

//render:
window.requestAnimationFrame(animate)
let elapsedTime = 0  //
function animate(timer) {
    //calculate the difference since last frame
    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    //console.log(deltaTime)
    mesh.rotation.x += 0.01 * deltaTime

    // Update objects -> elapsed time increases ...
    mesh_2.position.x = Math.cos(elapsedTime / 1000)
    mesh_2.position.y = Math.sin(elapsedTime / 1000)

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)

}