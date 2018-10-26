var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.PlaneGeometry( 50, 50, 50 );
var material = new THREE.MeshLambertMaterial( {color: 0x669933, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

plane.rotation.set(Math.PI / 2, 0, 0);
plane.position.set(0, -10, 0);

var hlight = new THREE.HemisphereLight( 0xffffff, 0x999999, 1 );
scene.add( hlight );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, -10);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, 10);

var geometrye = new THREE.SphereGeometry( 100, 10, 10 );
var materiale = new THREE.MeshLambertMaterial( { color: 0x99ddff, side: THREE.BackSide } );
var cubee = new THREE.Mesh( geometrye, materiale );
scene.add( cubee );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    cubee.position = camera.position;
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
    if (event.movementX < lx * 2 || event.movementX < 250) {
        camera.rotation.x -= event.movementY / 1000;
        
        camera.rotation.x = Math.min(Math.PI / 2, camera.rotation.x);
        camera.rotation.x = Math.max(-Math.PI / 2, camera.rotation.x);
        
        camera.rotation.y -= event.movementX / 500;
    } //prevent stupid chrome spikes
    lx = event.movementX;
}