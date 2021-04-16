AFRAME.registerComponent("cam-switch", {
    init: function () {
        var flag = false;
        let secondCameraEl = document.querySelector('#second-camera');
        let rotY = secondCameraEl.getAttribute('rotation', 'y');

        let firstCameraEl = document.querySelector('#first-camera');
        let rig2 = document.querySelector('#rig2');
        let modelingParent = document.querySelector('#ModelingParent');
        let chatbubble_img = document.querySelectorAll('.chatBubble_img');
        let chatbubble_text = document.querySelectorAll('.chatBubble_text');

        let plane = document.querySelector('#plane');
        let outlinePlane = document.querySelectorAll('.outline_plane');

        document.body.onkeyup = (e) => {
            if (e.keyCode == 32) {
                // second camera activated
                if (flag == false) {
                    // if (__global__.cameraToggle == false) {
                    //     __global__.cameraToggle = !__global__.cameraToggle;

                    flag != flag;
                    window.cameraFlag = flag;

                    secondCameraEl.setAttribute('camera', 'active', true);
                    rig2.setAttribute('look-controls', 'enabled', true);
                    rig2.setAttribute('position', '0 30 25')
                    //rig2.setAttribute('wasd-controls','enabled', true);
                    firstCameraEl.setAttribute('camera', 'active', false);
                    firstCameraEl.setAttribute('look-controls', 'enabled', false);
                    firstCameraEl.setAttribute('wasd-controls', 'enabled', false);


                    for (i = 0; i < chatbubble_img.length; i++) {
                        chatbubble_img[i].setAttribute('visible', true);
                        chatbubble_text[i].setAttribute('visible', true);

                        chatbubble_img[i].object3D.rotation.set(
                            THREE.Math.degToRad(90),
                            THREE.Math.degToRad(0),
                            THREE.Math.degToRad(0)
                        );

                        //chatbubble_img[i].setAttribute('rotation', '45 x 0');
                    }
                    plane.setAttribute('visible', true);

                    for (i = 0; i < outlinePlane.length; i++) {
                        outlinePlane[i].setAttribute('outline', "color: red; pulse: true");
                    }
                    modelingParent.setAttribute('animation', 'property: rotation; to: 0  360 0; loop: true; dur: 50000');
                    plane.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 50000');

                }
                // first camera activated
                else {
                    // __global__.cameraToggle = !__global__.cameraToggle;
                    flag != flag;
                    
                    firstCameraEl.setAttribute('camera', 'active', true);
                    firstCameraEl.setAttribute('look-controls', 'enabled', true);
                    firstCameraEl.setAttribute('wasd-controls', 'enabled', true);
                    rig2.setAttribute('look-controls', 'enabled', false);
                    rig2.setAttribute('wasd-controls', 'enabled', false);
                    secondCameraEl.setAttribute('camera', 'active', false);

                    for (i = 0; i < chatbubble_img.length; i++) {
                        chatbubble_img[i].setAttribute('visible', false);
                        chatbubble_text[i].setAttribute('visible', false);
                    }
                    plane.setAttribute('visible', false);
                    modelingParent.removeAttribute('animation');
                    plane.removeAttribute('animation');
                }
            }
        }
        // if (flag == false) {
        //     for(i=0; i<chatbubble_img[i].length; i++){
        //         chatbubble_img[i].object3D.rotation.x += 50;
        //     }
        // }
    }
});