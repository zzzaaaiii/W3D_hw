import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { buildCar } from './buildCar';

var camera, scene, renderer;

var keys;
var T = 10;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car, ry = Math.PI / 2, rx = 0;
var car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11;

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 400, 300); // camera at (0,0,500)
  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(300, 30, 'red', 'white');
  scene.add(gridXZ);
  
  const geometry = new THREE.BoxGeometry( 200, 100, 100 );
	const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
	const cube = new THREE.Mesh( geometry, material );
  cube.rotation.x = Math.PI / 4;
  cube.position.set(0, 0, -70);
	scene.add( cube );

  car = buildCar();
  car1 = buildCar();
  car2 = buildCar();
  car3 = buildCar();
  car4 = buildCar();
  car5 = buildCar();
  car6 = buildCar();
  car7 = buildCar();
  car8 = buildCar();
  car9 = buildCar();
  car10 = buildCar();
  car11 = buildCar();
  
  //car.rotation.y = Math.PI / 2;
  car.position.set(80, 0, 50)
  scene.add (car);
  
  const geometry2 = new THREE.PlaneGeometry( 200, 100 );
	const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	const plane = new THREE.Mesh( geometry2, material2 );
  plane.position.set(0, 70, -120);
  plane.rotation.x = Math.PI / 2;
	scene.add( plane );
  
  ///////////////////
  var pos1 = new THREE.Vector3(80, 0, 50);
  var pos2 = new THREE.Vector3(80, 0, 10);
  var pos3 = new THREE.Vector3(80, 5, 0);
  var pos4 = new THREE.Vector3(50, 70, -70);
  var pos5 = new THREE.Vector3(50, 72, -80);
  var pos6 = new THREE.Vector3(-50, 72, -80);
  var pos7 = new THREE.Vector3(-50, 70, -70);
  var pos8 = new THREE.Vector3(-50, 5, 0);
  var pos9 = new THREE.Vector3(-50, 0, 10);
  var pos10 = new THREE.Vector3(-30, 0, 50);
  var pos11 = new THREE.Vector3(70, 0, 50);
  car1.position.set(80, 0, 50);
  car1.rotation.y =  Math.PI / 2;
  car2.position.set(80, 0, 10);
  car2.rotation.y =  Math.PI / 2;
  car3.position.set(80, 5, 0);
  car3.rotation.y =  3 * Math.PI / 5;
  car3.rotation.x = Math.PI / 4;
  car4.position.set(50, 70, -70);
  car4.rotation.y =  3 * Math.PI / 5;
  car4.rotation.x = Math.PI / 4;
  car5.position.set(50, 72, -80);
  car5.rotation.y = Math.PI;
  car6.position.set(-50, 72, -80);
  car6.rotation.y = Math.PI ;
  car7.position.set(-50, 70, -70);
  car7.rotation.y = 3 * Math.PI / 2;
  car7.rotation.x = Math.PI / 4;
  car8.position.set(-50, 5, 0);
  car8.rotation.y = 3 * Math.PI / 2;
  car8.rotation.x = Math.PI / 4;
  car9.position.set(-50, 0, 10);
  car9.rotation.y = 3 * Math.PI / 2;
  car10.position.set(-30, 0, 50);
  car11.position.set(70, 0, 50);
  //scene.add(car8, car9, car10);
  
  keys = [
    [0, car1],   // quad1 ...
    [0.1, car2],
    [0.15, car3],
    [0.35, car4],
    [0.40, car5],
    [0.60, car6],
    [0.65, car7],
    [0.80, car8],
    [0.85, car9],
    [0.9, car10],
    [0.95, car11],
    [1, car1]
  ];

}

function keyframe(t) {
  var s = ((t - ts) % T) / T;

  for (var i = 1; i < keys.length; i++) {
    if (keys[i][0] > s) break;
  }
  // take i-1
  var ii = i - 1;
  var a = (s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);
  
  car.position.lerpVectors(keys[ii][1].position, keys[ii+1][1].position, a);
  car.quaternion.slerpQuaternions (keys[ii][1].quaternion, keys[ii + 1][1].quaternion, a);
  
}

function animate() {

  keyframe (clock.getElapsedTime());
  
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export { init, animate };
export { camera, scene, renderer };