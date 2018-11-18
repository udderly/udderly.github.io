class Box {
    constructor(args) {
        this.args = args;
        
        var geometry = new THREE.BoxGeometry( args.size.x, args.size.y, args.size.z );
        var material = new THREE.MeshLambertMaterial( { color: args.color, side: THREE.DoubleSide } );
        this.obj = new THREE.Mesh( geometry, material );
        scene.add( this.obj );
        
        
        obstacles.push(this.obj);
        
        if (args.pos) {
            this.obj.position.set( args.pos.x, args.pos.y, args.pos.z );
        }
        if (args.rot) {
            this.obj.rotation.set( args.rot.x, args.rot.y, args.rot.z );
        }
        
        var ghost = this.obj.clone();
        ghost.material = new THREE.MeshBasicMaterial({wireframe:true,color:0xffffff});
        scene.add(ghost);
    }
}

var obstacles = [];

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xcceeff );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
document.body.appendChild( renderer.domElement );

var hemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xcccccc, 1 );
scene.add( hemiLight );

var dirLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
scene.add( dirLight );

scene.fog = new THREE.Fog( 0xcceeff, 1, 100 );

var gridHelper = new THREE.GridHelper( 10, 100 );
scene.add( gridHelper );

gridHelper.position.set(0, -9.9, 0);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, -10);

var test = new Box( { pos: { x: 0, y: -4, z: 0 }, size: { x: 5, y: 5, z: 5 }, color: 0x333333, rot: { x: 1, y: 0, z: 0} } )
var t2 = new Box( { pos: { x: 0, y: -10.5, z: 0 }, size: { x: 20, y: 1, z: 20 }, color: 0x669933 } )

var geometry = new THREE.BoxGeometry( 1, -1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0, -1, 10);

var pos = { x: 0, y: 10, z: 0 };
var vel = { x: 0, y: 0, z: 0 };

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    vel.y -= 0.05;
    
    vel.x *= 0.9;
    vel.y *= 0.9;
    vel.z *= 0.9;
    
    pos.x += vel.x;
    pos.y += vel.y;
    pos.z += vel.z;
    
    if ( pos.y < -9 ) {
        pos.y = -9;
        vel.y = 0;
    }
    
    camera.position.set( pos.x, pos.y, pos.z );
    sky.position = camera.position;
    
    var point = new THREE.Vector3( pos.x, pos.y - 1, pos.z );
    var raycaster = new THREE.Raycaster();
    raycaster.set( point, new THREE.Vector3( 1, 1, 1 ) );
    var intersects = raycaster.intersectObject( obstacles[0] );
    if ( intersects.length % 2 === 1 ) {
        pos.y -= vel.y;
        vel.y *= - 0.1;
    }
}
animate();

document.addEventListener( 'click', lock );
function lock() {
    document.body.requestPointerLock();
}

document.addEventListener( 'mousemove', update );

camera.rotation.order = 'YXZ';

var lx = 0;

function update( event ) {
    if ( event.movementX < lx * 1.01 || event.movementX < 250 ) {
        camera.rotation.x -= event.movementY / 1000;
        
        camera.rotation.x = Math.min( Math.PI / 2, camera.rotation.x );
        camera.rotation.x = Math.max( -Math.PI / 2, camera.rotation.x );
        
        camera.rotation.y -= event.movementX / 500;
    } //prevent stupid chrome spikes
    lx = event.movementX;
}