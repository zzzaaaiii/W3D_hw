import * as THREE from 'https://cdn.skypack.dev/three';

var group;

function buildCar() {
    group = new THREE.Group();
    var normalMat = new THREE.MeshNormalMaterial();
    var chi = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 5, 32), normalMat);
    var chi_top = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 3), normalMat);
    var body_roof = new THREE.Mesh(new THREE.BoxGeometry(9, 2, 8), normalMat);
    var body_top = new THREE.Mesh(new THREE.BoxGeometry(8, 1, 8), normalMat);
    var body_right = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 8), normalMat);
    var body_left = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 8), normalMat);
    var body_bot = new THREE.Mesh(new THREE.BoxGeometry(8, 3, 8), normalMat);
    var base = new THREE.Mesh(new THREE.BoxGeometry(19, 1, 8), normalMat);
    var head = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), normalMat);
    var head = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), normalMat);
    var lamp = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 16), normalMat);
    var cargo = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 8), normalMat);
    var fender = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1, 8), normalMat);
    var wheel_right1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_right2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_right3 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_right4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_right5 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var link_right1 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var link_right2 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var link_right3 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var wheel_left1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_left2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_left3 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_left4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var wheel_left5 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), normalMat);
    var link_left1 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var link_left2 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var link_left3 = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 0.25), normalMat);
    var smoke1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 5), normalMat);
    var smoke2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 5), normalMat);
    var smoke3 = new THREE.Mesh(new THREE.DodecahedronGeometry(2, 5), normalMat);

    group.add(chi, chi_top, body_roof, body_top, body_right, body_left, body_bot, base, head, lamp, cargo, fender, wheel_right1, wheel_right2, wheel_right3, wheel_right4, wheel_right5, link_right1, link_right2, link_right3, wheel_left1, wheel_left2, wheel_left3, wheel_left4, wheel_left5, link_left1, link_left2, link_left3, smoke1, smoke2, smoke3);
    chi.position.set(0, 15, 0);
    chi_top.position.set(0, 18, 0);
    body_roof.position.set(0, 12, 0)
    body_top.position.set(0, 10.5, 0);
    body_right.position.set(3, 8, 0);
    body_left.position.set(-3, 8, 0);
    body_bot.position.set(0, 4.5, 0);
    base.position.set(3, 3, 0);
    head.position.set(8, 6, 0);
    lamp.position.set(12, 7, 0);
    cargo.position.set(-10, 6, 0);
    fender.position.set(12.25, 2, 0);
    wheel_right1.position.set(-3, 1, 4);
    wheel_right2.position.set(1, 1, 4);
    wheel_right3.position.set(5, 1, 4);
    wheel_right4.position.set(9, 1, 4);
    wheel_right5.position.set(-10, 1, 4);
    link_right1.position.set(7, 1, 4.5);
    link_right2.position.set(3, 1, 4.5);
    link_right3.position.set(-1, 1, 4.5);
    wheel_left1.position.set(-3, 1, -4);
    wheel_left2.position.set(1, 1, -4);
    wheel_left3.position.set(5, 1, -4);
    wheel_left4.position.set(9, 1, -4);
    wheel_left5.position.set(-10, 1, -4);
    link_left1.position.set(7, 1, -4.5);
    link_left2.position.set(3, 1, -4.5);
    link_left3.position.set(-1, 1, -4.5);
    smoke1.position.set(0, 21, 0);
    smoke2.position.set(-3, 24, 0)
    smoke3.position.set(-7, 29, 0)


    //              (X and Y,height,width)
    return group;
  }

  export {buildCar}