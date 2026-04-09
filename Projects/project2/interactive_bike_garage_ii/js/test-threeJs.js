import * as THREE from "three";
import { BloomPass } from 'three/addons/postprocessing/BloomPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DotScreenPass } from 'three/addons/postprocessing/DotScreenPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const controls = new OrbitControls(camera, renderer.domElement);
const scene = new THREE.Scene();
const canvas = document.querySelector("canvas#three-ex");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);

const composer = new EffectComposer(renderer);
// adding some passes
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

//effects
const effectBloom = new BloomPass(1, 25);
//composer.addPass(effectBloom);
const glitchPass = new GlitchPass();
glitchPass.goWild = false;
//composer.addPass(glitchPass);
const pass = new DotScreenPass(new THREE.Vector2(0, 0), 1, 0.01);
//composer.addPass(pass);
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
const bloomPass = new UnrealBloomPass(resolution, 0.1, 1, 0.2);
//composer.addPass(bloomPass);
const bokehPass = new BokehPass(scene, camera, {
    focus: 8.0,      // Distance from Camera(8) to Green(0)
    aperture: 0.01,  // Small increase to create a noticeable depth falloff
    maxblur: 0.01
});
composer.addPass(bokehPass);



//

controls.update();
const outputPass = new OutputPass()
composer.addPass(outputPass);



// --- LIGHTING ---
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(1, 0, 3);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// --- PARALLAX LAYERS ---
// We create 3 planes at different Z depths to see the effect
const geometry = new THREE.PlaneGeometry(1, 8);

const layers = [
    { color: 0xff0000, z: 6, label: 'Foreground' },
    { color: 0xff0000, z: 4, label: 'Foreground' },
    { color: 0xff0000, z: 2, label: 'Foreground' },
    { color: 0x44ff44, z: 0, label: 'Midground' },
    { color: 0x4444ff, z: -2, label: 'Background' },
    { color: 0x4444ff, z: -4, label: 'Background' },
    { color: 0x4444ff, z: -6, label: 'Background' },
    { color: 0x4444ff, z: -8, label: 'Background' },
    { color: 0x4444ff, z: -10, label: 'Background' },
    { color: 0x4444ff, z: -12, label: 'Background' },
    { color: 0x4444ff, z: -14, label: 'Background' },
];

layers.forEach(data => {
    const material = new THREE.MeshPhongMaterial({ color: data.color, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = data.z;
    // Offset them slightly so they don't overlap perfectly
    mesh.position.x = data.z * 0.5;
    mesh.rotation.z = data.z * -0.2;
    scene.add(mesh);
});

// --- ANIMATION & PARALLAX VARIABLES ---
const mouse = { x: 0, y: 0 };
const targetPos = new THREE.Vector2(0, 0);
const currentPos = new THREE.Vector2(0, 0);

const movementLimit = 1.5; // Maximum units the camera shifts
const dampening = 0.05;    // Smoothness (lower = silkier)

// Initial camera Z position
camera.position.z = 8;

// --- EVENT LISTENERS ---
window.addEventListener('mousemove', (event) => {
    // Normalize mouse to -1 to +1
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- RENDER LOOP ---
function animate() {
    requestAnimationFrame(animate);

    // 1. Calculate where the camera wants to go
    targetPos.x = mouse.x * movementLimit;
    targetPos.y = mouse.y * movementLimit;

    // 2. Apply dampening (Lerp)
    currentPos.x += (targetPos.x - currentPos.x) * dampening;
    currentPos.y += (targetPos.y - currentPos.y) * dampening;

    // 3. Apply to camera position
    camera.position.x = currentPos.x;
    camera.position.y = currentPos.y;

    // 4. Look at the center to emphasize the depth shift
    camera.lookAt(0, 0, 0);

    const targetPoint = new THREE.Vector3(0, 0, 0);
    const distance = camera.position.distanceTo(targetPoint);

    // Update the bokeh pass focus dynamically
    bokehPass.uniforms['focus'].value = distance;

    composer.render(); // instead of renderer.render()
}

animate();