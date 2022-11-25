function moverPosicionRamdom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() *(window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() *(window.innerWidth - elm.offsetWidth) + 'px';
}
let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoSexo = document.getElementsByClassName("modo_amoroso")[0]

btnNo.addEventListener('mouseenter', function(e){ moverPosicionRamdom(e.target)})

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirias que si. Casemonos ya y tengamos hijos. TE AMO!!!!!! ❤')
    divModoSexo.style.display ='block';
    const cancion = new Audio('img\\img_modo_hot.mp3');
    cancion.play()
    const cancion2 = document.getElementById("video");
    cancion2.pause();
})