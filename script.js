var demo = document.getElementById("demo");
var next = document.getElementById('next')
var i = 0;
var replika = -1;
var txt = [
    'tova sa replikite',
    'koito shte se pokazvat',
    'na ekrana'
];
var audio = new Audio('sound.mp3');

function typeWriter() {
    var speed = 1500 / txt[replika].length;
    if (i === 0)
    demo.innerHTML = '';

    if (i < txt[replika].length) {
       demo.textContent += txt[replika].charAt(i);
       i++;
       setTimeout(typeWriter, speed);
    }
}

function Delete() {
    var speed = 1500 / txt[replika].length;

    if (i >= 0) {
       demo.textContent = demo.textContent.slice(0, i)
       i--;
       setTimeout(Delete, speed);
    } 
}


next.addEventListener('click', () => { 
    next.disabled = true
    if(demo.textContent.length != 0) {
        Delete()
    }
    else{i = 0
    ++replika
    typeWriter()
    audio.play()
    }

    setTimeout(() => {
        next.removeAttribute('disabled')
    }, 2000)
})