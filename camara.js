let camara_boton = document.querySelector("#Iniciar-camara");
let video = document.querySelector("#video");
let clic_boton = document.querySelector("#clic-foto");
let canvas = document.querySelector("#canvas");
let dataurl = document.querySelector("#dataurl");
let dataurl_container = document.querySelector("#dataurl-container");

camara_boton.addEventListener('click', async function() {
    let stream = null;
    try {
        stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    }
    catch (error) {
        alert(error.message);
        return;
    }


video.srcObject = stream;

video.computedStyleMap.display = 'block';
camara_boton.computedStyleMap.display = 'none';
clic_boton.computedStyleMap.display = 'block';
});

clic_boton.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.clientWidth, canvas.Height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    dataurl.value = image_data_url;
    dataurl_container.computedStyleMap.display = 'block';

})
