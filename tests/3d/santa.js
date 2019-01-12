class Box {
    constructor( args ) {
        args.rot = args.rot || { x: 0, y: 0, z: 0 };
        this.args = args;
        
        var geometry = new THREE.BoxGeometry( args.size.x, args.size.y, args.size.z );
        var material = new THREE.MeshLambertMaterial( { color: args.color } );
        this.obj = new THREE.Mesh( geometry, material );
        
        scene.add( this.obj );
        
        this.obj.position.set( args.pos.x, args.pos.y, args.pos.z );
        this.obj.rotation.set( args.rot.x, args.rot.y, args.rot.z );
        
        var gg = new THREE.BoxGeometry( args.size.x + 0.5, args.size.y + 0.5, args.size.z + 0.5 );
        var gm = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide, wireframe: true } );
        this.hitbox = new THREE.Mesh( gg, gm );
        
        scene.add(this.hitbox);
        
        this.hitbox.position.set( args.pos.x, args.pos.y, args.pos.z );
        this.hitbox.rotation.set( args.rot.x, args.rot.y, args.rot.z );
        
        obstacles.push(this.hitbox);
    }
}

var obstacles = [];

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xcceeff );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
document.body.appendChild( renderer.domElement );

var hemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xcccccc, 1 );
scene.add( hemiLight );

var dirLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
//scene.add( dirLight );

//scene.fog = new THREE.Fog( 0xcceeff, 1, 100 );

var test = new Box( { pos: { x: 0, y: -7, z: 0 }, size: { x: 20, y: 10, z: 2 }, color: 0x333333, rot: { x: 0, y: 1, z: 0} } );
for (let j = 0; j < 10; j++) {
var t2 = new Box( { pos: { x: 0, y: -10.5 - j, z: 0 }, size: { x: 20, y: 1, z: 20 }, color: 0x669933, rot: { x: 0, y: 0, z: 0 } } );
}

var pos = { x: 0, y: 20, z: 0 };
var vel = { x: 0, y: 0, z: 0 };
camera.position.y = 10;
var direction = new THREE.Vector3();

var pressed = {};
var ground = false;

var dg = new THREE.SphereGeometry(0.5, 32, 8);
var material = new THREE.MeshBasicMaterial({color:0xffffff, wireframe: true})
var dummy = new THREE.Mesh(dg, material);
scene.add(dummy);

var size = 10;
var divisions = 10;

var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );
gridHelper.position.set(0,-9.9,0);
var maybe = false;


var arrows = [];
for (var i = 0; i < 5; i++) {
    var arrow = new THREE.ArrowHelper( new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), 1, 0xff0000);
arrows.push(arrow);
scene.add(arrow);
}
function animate() {
	requestAnimationFrame( animate );
    
    //console.log('start loop')
    
    if (pressed[87]) {
        camera.getWorldDirection( direction );
        direction.y = 0;
        direction.normalize();
        vel.x += direction.x / 50;
        vel.z += direction.z / 50;
        
    }
    if (pressed[83]) {
        camera.getWorldDirection( direction );
        direction.y = 0;
        direction.normalize();
        vel.x -= direction.x / 50;
        vel.z -= direction.z / 50;
        
    }
    
    vel.y -= 0.05;
    
    if (pressed[32] && ground) {
        vel.y = 1;
        ground = false;
    }
    
    function isPointInMesh( point, dir, mesh ) {
        const raycaster = new THREE.Raycaster();
        raycaster.set( point, dir.normalize() );
        const intersects = raycaster.intersectObject( mesh );
        return intersects.length % 2 === 1;
    }
    
    for (let i = 0; i < obstacles.length; i++) {
        let hity = isPointInMesh( new THREE.Vector3( pos.x, pos.y + vel.y * 0.9, pos.z ),
                                  new THREE.Vector3( 1, 1, 1 ), obstacles[i] );
        if ( hity ) {
            vel.y = 0;
            ground = true;
        }
        let hitxz = isPointInMesh( new THREE.Vector3( pos.x + vel.x * 0.9, pos.y, pos.z + vel.z * 0.9 ), 
                                   new THREE.Vector3( 1, 1, 1 ), obstacles[i] );
        if ( hitxz ) {
            console.log('a')
            vel.x = 0;
            vel.z = 0;
        }
    }
    
    function arrow(p, d, index) {
        arrows[index].setDirection(d.normalize());
        arrows[index].position.set(p.x, p.y, p.z);
    }
    
    vel.x *= 0.9;
    vel.y *= 0.9;
    vel.z *= 0.9;
    pos.x += vel.x;
    pos.y += vel.y;
    pos.z += vel.z;
    
    camera.position.set( pos.x, pos.y + 1, pos.z );
    renderer.render( scene, camera );
}

animate();

document.addEventListener('keydown', function(event) {
    pressed[event.keyCode] = true;
});
document.addEventListener('keyup', function(event) {
    pressed[event.keyCode] = false;
});

document.addEventListener( 'click', lock );
function lock() {
    document.body.requestPointerLock();
}

document.addEventListener( 'mousemove', update );

camera.rotation.order = 'YXZ';

var lx = 0;

function update( event ) {
    if ( event.movementX < lx * 1.01 || event.movementX < 200 ) {
        camera.rotation.x -= event.movementY / 1000;
        
        camera.rotation.x = Math.min( Math.PI / 2, camera.rotation.x );
        camera.rotation.x = Math.max( -Math.PI / 2, camera.rotation.x );
        
        camera.rotation.y -= event.movementX / 500;
    } //prevent stupid chrome spikes
    lx = event.movementX;
}