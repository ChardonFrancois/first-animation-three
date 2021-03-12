import './style.css';
import * as THREE from 'three'; // importation du dossier 'three'
import { Mesh, MeshBasicMaterial } from 'three';


//scene
const scene = new THREE.Scene();

// // object 
// // creation d un groupe  de forme (object)
const group = new THREE.Group();
group.scale.x = .5;
scene.add(group);

const cube1 = new Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'white' })
);
group.add(cube1);
// // positionne le cube sur X, Y, Z .
cube1.position.set(-1, 0, -2)

const cube2 = new Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube2);

const cube3 = new Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'white' })
);
group.add(cube3);
cube3.position.set(1, 0, -2)
cube3.rotation.y = -2;

const cube4 = new Mesh(
    new THREE.BoxGeometry(1,1,1),
    new MeshBasicMaterial({ color: 'white'})
)
group.add(cube4)
cube4.position.set(0,0,2)



// // creation d'un seule forme 

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0xff0000});
// const mesh     = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Position

// // mesh.position.x = -1;
// // mesh.position.y = 2;
// // mesh.position.z = -1;

// //propriete raccourcie

// mesh.position.set( 0, 0, 0);

// //Scale 

// // mesh.scale.x = 2; 
// // mesh.scale.y = .5; 
// // mesh.scale.z = .5;

// mesh.scale.set(2,.5,.5); 

// // Rotation

// mesh.rotation.y = Math.PI * .25;
// mesh.rotation.x = Math.PI * .25; 

// scale group

group.scale.z = .5;
//group.scale.z = 2;

cube4.scale.z = .5;

// // AXES helper 

//const axesHelper = new THREE.AxesHelper();
//scene.add(axesHelper);
// sizes

const sizes = {
    width: 800,
    height: 600
};

// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//camera.position.z = 4; 
camera.position.set(0, 0, 4)
scene.add(camera);




// renderer

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height);
// // // deplacer dans la const tick pour le rendu de l'animation
// //renderer.render(scene, camera);

// // animation test

const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    cube1.rotation.y = elapsedTime * 4;
    cube2.rotation.y = elapsedTime * 4;
    cube2.rotation.z = elapsedTime * 8;
    cube3.rotation.y = elapsedTime * 4;
    cube4.rotation.y = elapsedTime * 4;

    group.rotation.z= Math.cos(elapsedTime *4);
    group.rotation.y= Math.cos(elapsedTime *4);



    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
    
}

tick()
