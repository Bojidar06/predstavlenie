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
    document.getElementById("demo").innerHTML = '';

    if (i < txt[replika].length) {
       document.getElementById("demo").textContent += txt[replika].charAt(i);
       i++;
       setTimeout(typeWriter, speed);
    }
}


document.getElementById('next').addEventListener('click', () => { 
    i = 0
    ++replika
    typeWriter()
    audio.play()
})