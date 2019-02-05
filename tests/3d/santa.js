class Box {
    constructor(args) {
        args.rot = args.rot || {x: 0, y: 0, z: 0};
        this.args = args;
        
        let geometry = new THREE.BoxGeometry(args.size.x, args.size.y, args.size.z);
        let material = new THREE.MeshLambertMaterial({color: args.color, side:THREE.DoubleSide});
        this.obj = new THREE.Mesh(geometry, material);
        
        scene.add(this.obj);
        
        this.obj.position.set(args.pos.x, args.pos.y, args.pos.z);
        this.obj.rotation.set(args.rot.x, args.rot.y, args.rot.z);
        
        let gg = new THREE.BoxGeometry(args.size.x + 0.5, args.size.y + 0.5, args.size.z + 0.5);
        let gm = new THREE.MeshLambertMaterial({side: THREE.DoubleSide, wireframe: false, visible:false});
        this.hitbox = new THREE.Mesh(gg, gm);
        
        scene.add(this.hitbox);
        
        this.hitbox.position.set(args.pos.x, args.pos.y, args.pos.z);
        this.hitbox.rotation.set(args.rot.x, args.rot.y, args.rot.z);
        
        obstacles.push(this.hitbox);
    }
}

let obstacles = [];

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
document.body.appendChild(renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 0.6);
scene.add(light);
light.position.set(2, 1, 0);
let blight = new THREE.DirectionalLight(0xffffff, 0.4);
scene.add(blight);
blight.position.set(0, 1, 2);
let b2light = new THREE.DirectionalLight(0xffffff, 0.4);
scene.add(b2light);
b2light.position.set(0, 1, -2);
let blight2 = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(blight2);
blight2.position.set(-2, 1, 0);

//scene.fog = new THREE.Fog(0xcceeff, 1, 100);

let test = new Box({pos: {x: 0, y: -7, z: 0}, size: {x: 10, y: 10, z: 10}, color: 0x333333, rot: {x: 0, y: 1, z: 0}});
for (let j = 0; j < 10; j++) {
    let t2 = new Box(
        {pos: {x: 0, y: -10.5 - j, z: 0}, size: {x: 20, y: 1, z: 20}, color: 0x669933, rot: {x: 0, y: 0, z: 0}});
}

let marker = new Box({pos: {x: 5, y: 0, z: 5}, size: {x: 2, y: 100, z: 2}, color: 0x0099cc, rot: {x: 0, y: 0, z: 0}});
let pos = {x: 0, y: 20, z: 0};
let vel = {x: 0, y: 0, z: 0};

camera.position.y = 10;

let direction = new THREE.Vector3();

let pressed = {};
let ground = false;

let dg = new THREE.SphereGeometry(0.1, 8, 2);
let material = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true})
let dummy = new THREE.Mesh(dg, material);
scene.add(dummy);

let arrows = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0), 1, 0xff0000);
scene.add(arrows);

function animate() {
    requestAnimationFrame(animate);
    
    if (pressed[87]) {
        camera.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();
        vel.x += direction.x / 50;
        vel.z += direction.z / 50;
    }
    if (pressed[83]) {
        camera.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();
        vel.x -= direction.x / 50;
        vel.z -= direction.z / 50;
    }
    
    
    vel.x *= 0.9;
    vel.y *= 0.9;
    vel.z *= 0.9;
    vel.y -= 0.05;
    
    if (pressed[32] && ground) {
        vel.y = 1;
        ground = false;
        jumped = true;
    }
    
    function isPointInMesh(point, dir, mesh) {
        let raycaster = new THREE.Raycaster();
        raycaster.set(point, dir.normalize());
        let intersects = raycaster.intersectObject(mesh);
        return intersects;
    }
    
    function projectPoint(pointOff, normal, pointOn) {
        let t = (normal.x * pointOn.x - normal.x * pointOff.x + 
                 normal.y * pointOn.y - normal.y * pointOff.y + 
                 normal.z * pointOn.z - normal.z * pointOff.z) / 
            (normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);
        return new THREE.Vector3(pointOff.x + t * normal.x, pointOff.y + t * normal.y, pointOff.z + t * normal.z);
    }
    
    arrows.position.set(pos.x, pos.y + 0.01, pos.z);
    arrows.setDirection(vel);
    let fakevel = {x: vel.x, y: vel.y, z: vel.z};
    let check = false;
    for (let i = 0; i < obstacles.length; i++) {
        let isIn = isPointInMesh(
            new THREE.Vector3(pos.x - fakevel.x, pos.y - fakevel.y, pos.z - fakevel.z),
            new THREE.Vector3(fakevel.x, fakevel.y, fakevel.z).normalize(), obstacles[i]);
        
        let vellength = Math.sqrt(fakevel.x * fakevel.x + fakevel.y * fakevel.y + fakevel.z * fakevel.z);
        
        if (i === 0) {document.getElementById('a').innerHTML = isIn.length;}
        
        if (isIn[0] && isIn[0].distance < vellength * 2 && isIn.length !==1) {
            let nor = isIn[0].face.normal.clone();
            nor.applyEuler(obstacles[i].rotation);
            let onpoint = isIn[0].point;
            let real = projectPoint(new THREE.Vector3(pos.x, pos.y, pos.z), nor, onpoint);
            pos = {x: real.x, y: real.y, z: real.z};
            let point = new THREE.Vector3(pos.x + fakevel.x, pos.y + fakevel.y, pos.z + fakevel.z);
            
            let projected = projectPoint(new THREE.Vector3(pos.x + fakevel.x, pos.y + fakevel.y, pos.z + fakevel.z), 
                                         nor, pos);
            
            dummy.position.set(projected.x, projected.y, projected.z);
            
            fakevel = {x: projected.x - pos.x, y: projected.y - pos.y, z: projected.z - pos.z};
            if (i === 0) {console.log(pos); check = true;}
        }
    }
    
    vel = {x: fakevel.x, y: fakevel.y, z: fakevel.z};
    pos.x += vel.x;
    pos.y += vel.y;
    pos.z += vel.z;
    
    camera.position.set(pos.x, pos.y+1, pos.z);
    renderer.render(scene, camera);}

animate();

document.addEventListener('keydown', function(event) {pressed[event.keyCode] = true;});
document.addEventListener('keyup', function(event) {pressed[event.keyCode] = false;});

document.addEventListener('click', lock);
function lock() {document.body.requestPointerLock();}

document.addEventListener('mousemove', update);

camera.rotation.order = 'YXZ';

let lx = 0;

function update(event) {
    if (event.movementX < lx * 1.01 || event.movementX < 200) {
        camera.rotation.x -= event.movementY / 1000;
        
        camera.rotation.x = Math.min(Math.PI / 2, camera.rotation.x);
        camera.rotation.x = Math.max(-Math.PI / 2, camera.rotation.x);
        
        camera.rotation.y -= event.movementX / 500;
    } //prevent stupid chrome spikes
    lx = event.movementX;
}