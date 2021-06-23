var frames = document.querySelectorAll(".frame")
var secao = document.querySelector('.frames')
var index = 1;
var color = ['#d49394','#96d1b6','#b1e2eb','#b6a1d4']
var btn = document.querySelector('button');

btn.onclick = function(){
    secao.classList.toggle("active")
}

const dica = "Conheça os frameworks mais usados"
var inspi = document.querySelector('#h2')
var log = 0;

function autowrite(){
    inspi.innerText = dica.slice(0,log);
    log++

    if(log>dica.length){
        log = 0
    }
}

setInterval(autowrite,150)

function runSlide(n){
    Slide(index += n)
}

function Slide(n){
    if(n > frames.length){index = 1}
    if(n < 1){index = frames.length}
    for(let i=0;i<frames.length;i++){
        frames[i].style.display = "none"
    }

    secao.style.backgroundColor = color[index-1]
    frames[index-1].style.display = "block"

}

