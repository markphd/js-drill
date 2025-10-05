import * as THREE from 'three';

const width = window.innerWidth,
	height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// const material = new THREE.MeshNormalMaterial();
const material = new THREE.MeshBasicMaterial({ color: '#3ad' });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height, false);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// animation

function animate(time) {
	
	mesh.rotation.x = time / 800;
	mesh.rotation.y = time / 800;
	renderer.render(scene, camera);
	
}