class Box {
    constructor(pos, size, color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        
        var geometry = new THREE.BoxGeometry( size.x, size.y, size.z );
        var material = new THREE.MeshLambertMaterial( { color: color } );
        this.obj = new THREE.Mesh( geometry, material );
        scene.add( this.obj );
        
        this.obj.position.set( pos.x, pos.y, pos.z );
    }
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
document.body.appendChild( renderer.domElement );

var hlight = new THREE.HemisphereLight( 0xffffff, 0x999999, 1 );
scene.add( hlight );

var skyg = new THREE.SphereGeometry( 100, 10, 10 );
var skym = new THREE.MeshLambertMaterial( { color: 0x99ddff, side: THREE.BackSide } );
var sky = new THREE.Mesh( skyg, skym );
scene.add( sky );

var geometry = new THREE.PlaneGeometry( 50, 50, 50 );
var material = new THREE.MeshLambertMaterial( {color: 0x669933, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

plane.rotation.set(Math.PI / 2, 0, 0);
plane.position.set(0, -10, 0);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, -10);

var test = new Box( { x: 0, y: -2, z: -10 }, { x: 2, y: 2, z: 2 }, 0xffff00 )

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, 10);

var pos = { x: 0, y: 0, z: 0 };
var vel = { x: 0, y: 0, z: 0 };

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    vel.y -= 0.1;
    
    vel.x *= 0.9;
    vel.y *= 0.9;
    vel.z *= 0.9;
    
    pos.x += vel.x;
    pos.y += vel.y;
    pos.z += vel.z;
    
    if (pos.y < -9) {
        pos.y = -9;
        vel.y = 0;
    }
    
    camera.position.set( pos.x, pos.y, pos.z );
    sky.position = camera.position;
}
animate();

document.addEventListener('click', lock);
function lock() {
    document.body.requestPointerLock();
}

document.addEventListener('mousemove', update);

camera.rotation.order = 'YXZ';

var lx = 0;

function update(event) {
    if (event.movementX < lx * 1.1 || event.movementX < 250) {
        camera.rotation.x -= event.movementY / 1000;
        
        camera.rotation.x = Math.min(Math.PI / 2, camera.rotation.x);
        camera.rotation.x = Math.max(-Math.PI / 2, camera.rotation.x);
        
        camera.rotation.y -= event.movementX / 500;
    } //prevent stupid chrome spikes
    lx = event.movementX;
}