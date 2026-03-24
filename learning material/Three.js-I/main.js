// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()

//A: the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
//B: the material
const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
//C: put together
const mesh = new THREE.Mesh(geometry, material)
//D: ADD TO THE SCENE
scene.add(mesh)