var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var textureALL = [];
var texture1 = new THREE.TextureLoader().load("https://lh3.googleusercontent.com/proxy/diyc_xsB5ddlRxOVSb6RKxIMp9KuGS5XDHgYaJMg8ClyQJF949EwqiST-ba3sw8jkQWT6J5zYXAlzqBD9HYkCsIAVf_gEQzFItw0EIbPZj5BvRo1CvIqJWyOcFM6713yBEZpeZqF9R0FfBMLklPD24yzq8kaSobR");
var texture2 = new THREE.TextureLoader().load("https://lh3.googleusercontent.com/proxy/diyc_xsB5ddlRxOVSb6RKxIMp9KuGS5XDHgYaJMg8ClyQJF949EwqiST-ba3sw8jkQWT6J5zYXAlzqBD9HYkCsIAVf_gEQzFItw0EIbPZj5BvRo1CvIqJWyOcFM6713yBEZpeZqF9R0FfBMLklPD24yzq8kaSobR");
var texture3 = new THREE.TextureLoader().load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j6X9RspQTBn-PbDI1EWZT5toVcOnTiLs86IUa7BFW_2HrVS36gf8La4Ck5evvjjkXig&usqp=CAU");
var texture4 = new THREE.TextureLoader().load("https://i.pinimg.com/originals/63/49/36/63493694b24043e9ebbc6487b89564a7.jpg");
var texture5 = new THREE.TextureLoader().load("images/2.jpg");
var texture6 = new THREE.TextureLoader().load("images/1.jpg");
textureALL.push(new THREE.MeshBasicMaterial( { map: texture1} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture2} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture3} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture4} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture5} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture6} ));
// var material = new THREE.MeshBasicMaterial( { map: texture1} );
var cube = new THREE.Mesh(geometry,textureALL);
// var cube = new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z=2;
    
cube.rotation.z =2;
loop ();
function loop () {
    cube.rotation.y +=0.01
    renderer.render(scene,camera);
    requestAnimationFrame(loop);
}