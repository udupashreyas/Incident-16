var width  = window.innerWidth,
height = window.innerHeight;

var scene = new THREE.Scene();
// scene.fog = new THREE.FogExp2(0xffffff, 0.007);
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
directionalLight.position.set( 0,0,4 );
scene.add( directionalLight );

scene.add( new THREE.AmbientLight( 0x404040 ));

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.set(0, -40, 20);

parent = new THREE.Object3D();
scene.add(parent);

var renderer = new THREE.WebGLRenderer({ antialias : true });
renderer.setSize(width, height);
renderer.setClearColor( 0xffffff );


// var bumpSize = 400
var geometry;
var img = new Image();
img.src = 'texture/jotunheimen.png'
img.onload = function(){
    var data1 = getHeightData(img,10 );

    // console.log(geometry.vertices.length);
    geometry = new THREE.PlaneGeometry(img.width, img.width, img.width - 1, img.width - 1);
    geometry1 = new THREE.PlaneGeometry(img.width-30,img.width-30, 1,1);
    for (var i = 0, l = geometry.vertices.length; i < l; i++) {
        geometry.vertices[i].z = data1[i];
    }

    var terrainTexture = THREE.ImageUtils.loadTexture( 'texture/jotunheimen-texture.jpg' );
    var terrainTexture1 = THREE.ImageUtils.loadTexture( 'texture/cloud3.png' );
    // terrainTexture.wrapS = terrainTexture.wrapT = THREE.RepeatWrapping;
    // terrainTexture.repeat.set( 2, 2 );

    var material = new THREE.MeshLambertMaterial({
        map: terrainTexture
        // map: THREE.ImageUtils.loadTexture('texture/jotunheimen-texture.jpg')
    });

    var material1 = new THREE.MeshLambertMaterial({
        map: terrainTexture1,
        transparent: true, 
        opacity: 1.0
        // map: THREE.ImageUtils.loadTexture('texture/jotunheimen-texture.jpg')
    });

    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(0,0,-3);
    scene.add(plane);

    var plane1 = new THREE.Mesh(geometry1, material1);
    plane1.position.set(0,0,15);
    scene.add(plane1);

    var waterGeo = new THREE.PlaneGeometry(600, 200, 1, 1);
    var waterMaterial = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture( 'texture/water_top.jpg' )
        // map: THREE.ImageUtils.loadTexture('texture/jotunheimen-texture.jpg')
    });
    var waterPlane = new THREE.Mesh(waterGeo, waterMaterial);
    waterPlane.position.set(0,200,-10);
    // scene.add(waterPlane);


}

function getHeightData(img, scale) {
    if (scale == undefined) scale=1;

    var canvas = document.createElement( 'canvas' );
    canvas.width = img.width;
    canvas.height = img.height;
    // console.log(canvas);
    var context = canvas.getContext( '2d' );

    var size = img.width * img.height;
    var data = new Float32Array( size );

    context.drawImage(img,0,0);

    for ( var i = 0; i < size; i ++ ) {
    	data[i] = 0
    }

    var imgd = context.getImageData(0, 0, img.width, img.height);
    var pix = imgd.data;
    console.log(pix);

    var j=0;
    for (var i = 0; i<pix.length; i +=4) {
        var all = pix[i]+pix[i+1]+pix[i+2];
        data[j++] = all/(12*scale);
    }
    console.log(data);
    return data;
}

var textParams1 = {
    size:4.5,
    height : 0.7,
    font : "dk northumbria",
    // curveSegments : 20,
    // bevelEnabled : true,
    // bevelThickness : 0.5
}

var textParams2 = {
    size:2.5,
    height : 0.5,
    font : "dk northumbria",
}

var textParams2_1 = {
    size:1.7,
    height : 0.5,
    font : "dk northumbria",
}

var textParams3 = {
    size:1.0,
    height : 0.3,
    font : "dk northumbria",
}

var text = new THREE.TextGeometry("INCIDENT '16",textParams1);
var text2 = new THREE.TextGeometry("THE LEGENDS AWAKEN",textParams2);
var text2_1 = new THREE.TextGeometry("March 2-6",textParams2_1);
var text3 = new THREE.TextGeometry("OUTREACH",textParams3);
var text4 = new THREE.TextGeometry("REGISTRATION",textParams3);
var text5 = new THREE.TextGeometry("SPONSORS",textParams3);
var text6 = new THREE.TextGeometry("ICARE",textParams3);
var text7 = new THREE.TextGeometry("TICKETS",textParams3);
var text8 = new THREE.TextGeometry("EVENTS",textParams3);
var text9 = new THREE.TextGeometry("CONTACT",textParams3);

var texture = THREE.ImageUtils.loadTexture('texture/leather.png');
// texture.wrapS = THREE.RepeatWrapping; 
// texture.wrapT = THREE.RepeatWrapping;
var textMaterialIncident = new THREE.MeshPhongMaterial( /*{ map: texture }*/ {color: 0xf4a460} );
var textMaterial = new THREE.MeshPhongMaterial( /*{ map: texture }*/  );
var textMesh = new THREE.Mesh(text, textMaterialIncident);
var textMesh2 = new THREE.Mesh(text2, textMaterialIncident);
var textMesh2_1 = new THREE.Mesh(text2_1, textMaterialIncident);
var textMesh3 = new THREE.Mesh(text3, textMaterial);
var textMesh4 = new THREE.Mesh(text4, textMaterial);
var textMesh5 = new THREE.Mesh(text5, textMaterial);
var textMesh6 = new THREE.Mesh(text6, textMaterial);
var textMesh7 = new THREE.Mesh(text7, textMaterial);
var textMesh8 = new THREE.Mesh(text8, textMaterial);
var textMesh9 = new THREE.Mesh(text9, textMaterial);
textMesh.position.set(-28,-4,2.5);
textMesh2.position.set(-29,-11,3.0);
textMesh2_1.position.set(-13,-16,3.0);
textMesh3.position.set(60,-18,13.0);
textMesh4.position.set(-44,13,10.0);
textMesh5.position.set(-9,-25,7.0);
textMesh6.position.set(-2,18,14.0);
textMesh7.position.set(39,23,8.0);
textMesh8.position.set(-32,-27.5,7.0);
textMesh9.position.set(25,-24.5,8.0);
textMesh.rotation.x = 3.14/2;
// textMesh2.rotation.x = 3.14/2;
textMesh3.rotation.x = 3.14/3;
textMesh4.rotation.x = 3.14/3;
textMesh5.rotation.x = 3.14/3;
textMesh6.rotation.x = 3.14/3;
textMesh7.rotation.x = 3.14/3;
textMesh8.rotation.x = 3.14/3;
textMesh9.rotation.x = 3.14/3;
scene.add(textMesh);
scene.add(textMesh2);
scene.add(textMesh2_1);
scene.add(textMesh3);
scene.add(textMesh4);
scene.add(textMesh5);
scene.add(textMesh6);
scene.add(textMesh7);
scene.add(textMesh8);
scene.add(textMesh9);

var pointLight = new THREE.PointLight( 0xffffff, 3.0, 30 );
pointLight.position.set( -9, -5, 5 );
// scene.add( pointLight );

var controls = new THREE.TrackballControls(camera); 
controls.noRotate = true;
var radius = 14;
controls.minDistance = radius * 1.5;
// controls.maxDistance = radius * 6;
var controlsInitialPosition = {x:-6, y:-50, z:30}
var controlsInitialTarget = {x:-6, y:-10, z:0}
// controls.object.position.set(0, -30, 30);
controls.object.position.set(controlsInitialPosition.x, controlsInitialPosition.y, controlsInitialPosition.z);
controls.target.x = controlsInitialTarget.x;
controls.target.y = controlsInitialTarget.y;
controls.target.z = controlsInitialTarget.z;

var loader = new THREE.OBJMTLLoader();
loader.load('models/Mammoth/untitled.obj', 'models/Mammoth/untitled.mtl', function(object) {
    object.position.x = -40;
    object.position.y = 15;
    object.position.z = 4.1;
    object.scale.x = 6.0;
    object.scale.y = 6.0;
    object.scale.z = 6.0;
    object.rotation.x = 3.14/2;
    object.rotation.y = 1.5;
    object.name = "Mammoth"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 5.5, 10 );
pointLight.position.set( -40, 15, 5 );
scene.add( pointLight );

loader.load('models/MedievalBoat/untitled.obj', 'models/MedievalBoat/untitled.mtl', function(object) {
    object.position.x = 65;
    object.position.y = -22;
    object.position.z = 4.5;
    object.scale.x = 0.2;
    object.scale.y = 0.2;
    object.scale.z = 0.2;
    object.rotation.x = 3.14/2;
    object.rotation.y = -1.5;
    object.name = "Boat"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 4.5, 15 );
pointLight.position.set( 64, -19, 10 );
scene.add( pointLight );

loader.load('models/EasternAncientCastle/easternancientcastle.obj', 
    'models/EasternAncientCastle/easternancientcastle.mtl', function(object) {
        object.position.x = 41;
        object.position.y = 13;
        object.position.z = -1;
        object.scale.x = 1.2;
        object.scale.y = 1.2;
        object.scale.z = 1.2;
        object.rotation.x = 3.14/2;
        object.name = "Castle"; 
        parent.add( object );
    });

var pointLight = new THREE.PointLight( 0xffffff, 10.5, 10 );
pointLight.position.set( 39, 14, 5 );
// pointLight.intensity = 3.0;
// pointLight.distance = 20.0;
scene.add( pointLight );

loader.load('models/Tent/Tent.obj', 'models/Tent/Tent.mtl', function(object) {
    object.position.x = -6;
    object.position.y = -25;
    object.position.z = 1.0;
    object.scale.x = 0.8;
    object.scale.y = 0.8;
    object.scale.z = 0.8;
    object.rotation.x = 3.14/2;
    object.name = "Tent"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 2.5, 10 );
pointLight.position.set( -5, -25, 6 );
scene.add( pointLight );

loader.load('models/Dragon1/Dragon.obj', 'models/Dragon1/Dragon.mtl', function(object) {
    object.position.x = -25;
    object.position.y = -27.5;
    object.position.z = 3.0;
    object.scale.x = 0.6;
    object.scale.y = 0.6;
    object.scale.z = 0.6;
    object.rotation.x = 3.14/2;
    object.rotation.y = -1;
    object.name = "Dragon"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 1.5, 15 );
pointLight.position.set( -29, -30, 5 );
scene.add( pointLight );


loader.load('models/tree/tree.obj', 'models/tree/tree.mtl', function(object) {
    object.position.x = 0;
    object.position.y = 20;
    object.position.z = 3.0;
    object.rotation.x = 3.14/2;
    object.scale.x = 2.0;
    object.scale.y = 2.0;
    object.scale.z = 2.0;
    // object.rotation.y = -0.4;
    object.name = "Scroll"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 9.5, 7 );
pointLight.position.set( 0, 19, 10 );
scene.add( pointLight );



loader.load('models/Statue/Statue.obj', 'models/Statue/Statue.mtl', function(object) {
    object.position.x = 25;
    object.position.y = -27.5;
    object.position.z = 1.4;
    object.rotation.x = 3.14/2;
    // object.rotation.y = -0.4;
    object.name = "Statue"; 
    parent.add( object );
});

var pointLight = new THREE.PointLight( 0xffffff, 3.5, 5 );
pointLight.position.set( 25, -27.5, 5 );
scene.add( pointLight );

loader.load('models/Grass/Grass.obj', 'models/Grass/Grass.mtl', function(object) {
    object.position.x = -41;
    object.position.y = 16;
    object.position.z = 2;
    object.rotation.x = 3.14/2;
    object.scale.x = 0.8;
    object.scale.y = 0.8;
    object.scale.z = 0.8;
    object.name = "Mammoth"; 
    parent.add( object );
});

loader.load('models/rock/rock.obj', 'models/rock/rock.mtl', function(object) {
    object.position.x = -1;
    object.position.y = 17;
    object.position.z = 3;
    object.rotation.x = 3.14/2;
    // object.rotation.y = -0.4;
    object.name = "Scroll"; 
    scene.add( object );
});

loader.load('models/knight/knight.obj', 'models/knight/knight.mtl', function(object) {
    object.position.x = -30;
    object.position.y = -8;
    object.position.z = 3;
    object.rotation.x = 3.14/2;
    // object.rotation.y = -0.4;
    scene.add( object );
});

loader.load('models/knight/knight.obj', 'models/knight/knight.mtl', function(object) {
    object.position.x = 20;
    object.position.y = -8;
    object.position.z = 3;
    object.rotation.x = 3.14/2;
    // object.rotation.y = -0.4;
    scene.add( object );
});

loader.load('models/tower/tower.obj', 'models/tower/tower.mtl', function(object) {
    object.position.x = 27;
    object.position.y = -25.5;
    object.position.z = 3.2;
    object.rotation.x = 3.14/2;
    object.name = "Statue"; 
    parent.add( object );
});


loader.load('models/boulder/boulder.obj', 'models/boulder/boulder.mtl', function(object) {
    object.position.x = -25;
    object.position.y = -27;
    object.position.z = 3.2;
    object.rotation.x = 3.14/2;
    object.name = "Dragon"; 
    parent.add( object );
});


document.getElementById('webgl').appendChild(renderer.domElement);

THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
	console.log( item, loaded, total );
    if (loaded == total) {
        loadedFully();
        // init();
        // var start_pos = {x:0,y:0,z:50};
        // var tween_init = new TWEEN.Tween(start_pos).to({x:0,y:0,z:10}, 2000);
        // tween_init.easing(TWEEN.Easing.Circular.InOut);
        // tween_init.onUpdate(function() {
        //     camera.position.x = start_pos.x;
        //     camera.position.y = start_pos.y;
        //     camera.position.z = start_pos.z;
        //     controls.target = intersects[0].point;
        // });
        // tween_init.onComplete(function() {
        //     render();
        // });
};
};

function loadedFully(){
    // modal.style.display = "none";
    // modal1.style.display = "none"
    document.getElementById('heading1').innerHTML = "Instructions";
    Custombox.open({
        target: '#myInstructionsModal',
        effect: 'sign',
        escKey: true,
        overlayClose: true,
        overlay: true,
        overlayOpacity: 0.8

    });
   
   $('span.close').on('click', function() {
        // modal1.style.display = "none";
        Custombox.close();
    });
    render();

    setTimeout(Custombox.close,5000)

}
// function init() {
//     TWEEN.update();
//     renderer.render(scene, camera);
// }

function render() {
     if (controls.target.x > 65) {
        controls.target.x = 65;
        // camera.position.x = controls.target.x;
        // controls.target.z = 0;
    };

    if (controls.target.x < -60) {
        controls.target.x = -60;
        camera.position.x = controls.target.x;
        controls.target.z = 0;
    };


    if (camera.position.x < -60) {
        camera.position.x = -60;
    };

    if (camera.position.x > 65) {
        camera.position.x = 65;
    };

    if (camera.position.y < -80) {
        camera.position.y = -80;
        controls.target.y = camera.position.y + controlsInitialTarget.y - controlsInitialPosition.y;
    };

    if (camera.position.y > 30) {
        camera.position.y = 30;
        controls.target.y = camera.position.y + controlsInitialTarget.y - controlsInitialPosition.y;
        // controls.target.y = camera.position.y + 30;
    };
   
    // if (controls.target.y > 60) {
    //     controls.target.y = 60;
    //     // camera.position.y = controls.target.y - 30;
    // };

    // if (controls.target.y < -80) {
    //     controls.target.y = -80;
    //     // camera.position.y = controls.target.y - 30;
    // };

    if (camera.position.z > 40) {
        camera.position.z = 40;
        controls.target.y = camera.position.y + controlsInitialTarget.y - controlsInitialPosition.y;
        // controls.target.z = 0;
    };

    if (camera.position.z < 5) {
        camera.position.z = 5;
        controls.target.z = 0;
    };

    TWEEN.update();
    controls.update();
    requestAnimationFrame(render);    
    renderer.render(scene, camera);
}

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
 windowHalfX = window.innerWidth / 2;
 windowHalfY = window.innerHeight / 2;
 camera.aspect = window.innerWidth / window.innerHeight;
 camera.updateProjectionMatrix();
 renderer.setSize( window.innerWidth, window.innerHeight );
}

document.addEventListener( 'mousedown', onDocumentMouseDown, false );
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var modal = document.getElementsByClassName('modal')[0];
var modal1 = document.getElementsByClassName('myInstructionsModal')[0];
var span = document.getElementsByClassName("close")[0];
var con = document.getElementsByClassName('uc-container')[0];

// var heading = {'Tent':'Hospitality','Statue':'Contact Us','Mammoth':'Registration','Dragon':'Events','Boat':'Outreach Events','Scroll':'iCare','Castle':'Tickets'};
// var content = {'Tent':'Coming Soon','Statue':'Coming Soon','Mammoth':'Coming Soon','Dragon':'Coming Soon','Boat':'<div class="container"><div class="writing"><ul class="hor"><li><a class="active1" id="first1">Godlike Cup</a></li></ul><div class="leftpart"><p>Incident 2016 presents Godlike Cup, in association with Spawn Gaming, Hyderabad as our venue sponsors.</p><p>GODLIKE is a DOTA 2 LAN tournament held during 19th-21st February.</p><p>For registrations, go to <a href="http://goo.gl/forms/Hdbsqn7MFD" target="_blank">this form</a></p><p>For more details of the event, go to <a href="https://www.facebook.com/events/180529495646119" target="_blank">our Facebook page</a></p><p>Incident 2016 hopes to break new ground this year by hosting events in Hyderabad. We hope to reach a bigger audience than ever before with such events to be held as a forerunner to the festival in March.</p></div><div class="rightpart"><img src="images/logo.jpg"></div></div></div>','Scroll':'Coming Soon','Castle':'Coming Soon'};

// var $container = $( '#uc-container' );
// var pfold = $( '#uc-container' ).pfold({
//     easing : 'ease-in-out',
//     folds : 3,
//     folddirection : ['left','bottom','right'],
//     onEndFolding : function() { 
//         modal.style.display = "none";
//         opened = false;
//     },
// });

function onDocumentMouseDown(event) {
	event.preventDefault();
	mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
    
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( parent.children, true);
    
    if(intersects.length>0) {
        controls.noZoom = true;
        var cam_pos = { x : camera.position.x, y : camera.position.y, z : camera.position.z};
        var start_pos = { x : cam_pos.x, y : cam_pos.y, z : cam_pos.z};
        var end_pos = { x : intersects[0].point.x, y : intersects[0].point.y, z : cam_pos.z};
        var tween = new TWEEN.Tween(start_pos).to(end_pos, 2000);
        tween.easing(TWEEN.Easing.Circular.InOut);
        tween.onUpdate(function() {
            camera.position.x = start_pos.x;
            camera.position.y = start_pos.y;
            camera.position.z = start_pos.z;
            controls.target = intersects[0].point;
        });
        var opened = false;
        tween.onComplete(function() {
            document.getElementById('heading').innerHTML = heading[intersects[0].object.parent.parent.name];
            document.getElementsByClassName('modal-body')[0].innerHTML = content[intersects[0].object.parent.parent.name];


            Custombox.open({
                target: '#myModal',
                effect: 'sign',
                escKey: false,
                overlayClose: false,
                overlay: true
            });
            // $container.find('span.close').on('click', function() {
                // pfold.fold();
                $('span.close').on('click', function() {
                    modal.style.display = "none";
                    Custombox.close();
                    var tweenback = new TWEEN.Tween(end_pos).to(controlsInitialPosition, 2000);
                    // controls.object.position.set(0, -30, 30);

                    tweenback.easing(TWEEN.Easing.Circular.InOut);
                    tweenback.onUpdate(function() {
                     camera.position.x = end_pos.x;
                     camera.position.y = end_pos.y;
                     camera.position.z = end_pos.z;
                     controls.target = controlsInitialTarget;
                 });
                    tweenback.onComplete(function() {
                     controls.target = controlsInitialTarget;
                     controls.noZoom = false;
                 });
                    tweenback.start();
                });
            });
tween.start();
}
}