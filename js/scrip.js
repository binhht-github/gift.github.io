var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var textureALL = [];
var texture1 = new THREE.TextureLoader().load("https://lh3.googleusercontent.com/proxy/diyc_xsB5ddlRxOVSb6RKxIMp9KuGS5XDHgYaJMg8ClyQJF949EwqiST-ba3sw8jkQWT6J5zYXAlzqBD9HYkCsIAVf_gEQzFItw0EIbPZj5BvRo1CvIqJWyOcFM6713yBEZpeZqF9R0FfBMLklPD24yzq8kaSobR");
var texture2 = new THREE.TextureLoader().load("https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/262384670_3122674721391880_6997842812236220332_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=-720qjC5_vIAX8we95S&_nc_ht=scontent.fhan3-3.fna&oh=ede529622e8b54699d4e6c4a1eb64469&oe=61ADDD90");
var texture3 = new THREE.TextureLoader().load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j6X9RspQTBn-PbDI1EWZT5toVcOnTiLs86IUa7BFW_2HrVS36gf8La4Ck5evvjjkXig&usqp=CAU");
var texture4 = new THREE.TextureLoader().load("https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/261307223_3122672611392091_6976911009674683852_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=TuqMVP7hLMoAX9WH71S&_nc_oc=AQmbjQRaf9G-Va5VKXmT5wzy830URBFIItsShT5SihnnfOX2BeyjLJ_Lt7wpG1VTEbY&tn=mi5NuNbxU0CuDK0u&_nc_ht=scontent.fhan3-2.fna&oh=01e1403f0a7296d3c62ccf1a0bb81154&oe=61AE49D9");
var texture5 = new THREE.TextureLoader().load("https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/261707818_3122669088059110_6746312382293180471_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=aRVon7HtFZUAX9rOYMr&tn=mi5NuNbxU0CuDK0u&_nc_ht=scontent.fhan4-1.fna&oh=558dd23837d9a08369f77fc2256ad1eb&oe=61AD548D"); //mặt trên
var texture6 = new THREE.TextureLoader().load("https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/261763709_3122671018058917_366048038522160121_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=JRZoGwO1a64AX8DMjgW&_nc_ht=scontent.fhan3-3.fna&oh=8900ff39919abb377fe3443686accbc0&oe=61ADA3F1");
textureALL.push(new THREE.MeshBasicMaterial( { map: texture1} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture2} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture3} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture4} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture5} ));
textureALL.push(new THREE.MeshBasicMaterial( { map: texture6} ));
var cube = new THREE.Mesh(geometry,textureALL);
// var material = new THREE.MeshBasicMaterial( { map: texture6} );
// var cube = new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z=2;
    
cube.rotation.x =2
loop ();
function loop () {
    cube.rotation.z +=0.01
    cube.rotation.y +=0.01
    renderer.render(scene,camera);
    requestAnimationFrame(loop);
}