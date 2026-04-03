import * as THREE from 'three';

// Planet class for Team D
export class PlanetD {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        //Create planet group
        this.group = new THREE.Group()

        // Create planet
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        //TODO: Give it a custom material using THREE.MeshStandardMaterial.
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        //TODO: Add the planet mesh to the planet group.

        const planetGeo = new THREE.SphereGeometry(2, 70, 32); // radius between 1.5 and 2
        const planetMat = new THREE.MeshStandardMaterial({
            color: '#ff0000'
        });

        this.mesh = new THREE.Mesh(planetGeo, planetMat);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.group.add(this.mesh);

        //STEP 2: 
        //TODO: Add from 1 to 3 orbiting moons to the planet group. 
        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.

        //Moon1
        const moon1Geo = new THREE.SphereGeometry(1, 70, 32);
        const moon1Mat = new THREE.MeshStandardMaterial({
            color: '#00a2ff'
        });

        this.moon1 = new THREE.Mesh(moon1Geo, moon1Mat);

        this.moon1.position.set(5, 1, 0);

        this.group.add(this.moon1);

        //Moon2
        const moon2Geo = new THREE.SphereGeometry(.5, 70, 32);
        const moon2Mat = new THREE.MeshStandardMaterial({
            color: '#ff00d4'
        });

        this.moon2 = new THREE.Mesh(moon2Geo, moon2Mat);

        this.moon2.position.set(6, -3, 3);

        this.group.add(this.moon2);

        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

        //STEP 4:
        //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
        //TODO: Use your imagination and creativity!

        this.scene.add(this.group);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        // Rotate planet
        this.group.rotation.y += delta * 0.5;

        //TODO: Do the moon orbits and the model animations here.
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
    }
}