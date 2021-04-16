AFRAME.registerComponent('cursor-listener', {
    init: function () {
        let firstCameraRigEl = document.querySelector('#rig1');
        let secondCameraRigEl = document.querySelector('#rig1');
        let secondCameraEl = document.querySelector('#second-camera');
        let firstCameraEl = document.querySelector('#first-camera');
        let chatbubble_img = document.querySelectorAll('.chatBubble_img');
        let chatbubble_text = document.querySelectorAll('.chatBubble_text');

        let _position1 = "-16.5 0 -9";
        let _position2 = "-2 0 -9";
        let _position3 = "13 0 -9";

        let modelingParent = document.querySelector('#ModelingParent');

        this.el.addEventListener('click', function (evt) {
            secondCameraEl.setAttribute('camera', 'active', false);
            firstCameraEl.setAttribute('camera', 'active', true);
            //console.log('window.cameraFlag : ', cameraFlag);
               
            window.cameraFlag = !window.cameraFlag;
            flag = window.cameraFlag;

            firstCameraEl.setAttribute('position', _position1);
            
            console.log('I was clicked at: ', evt.detail.intersection.point);
            __global__.cameraToggle = !__global__.cameraToggle;

            for (i = 0; i < chatbubble_img.length; i++) {
                chatbubble_img[i].setAttribute('visible', false);
                chatbubble_text[i].setAttribute('visible', false);
            }
            modelingParent.removeAttribute('animation');
            plane.setAttribute('visible', false);
            plane.removeAttribute('animation');
        });
    }
});

class __global__ {
    static cameraToggle = false;
}