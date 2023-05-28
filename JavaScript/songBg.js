/**
 * 作者：chao
 */
let staus = document.querySelector("#song_tip").checked;

rgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.floor((Math.random() * 15) + 1) / 100;

    var rgba = 'rgba' + '(' + r + ',' + g + ',' + b + ',' + a + ')';
    return rgba;
}
var startColor = rgbColor();
var endColor = rgbColor();

let deg = Math.floor(Math.random() * 360);
let bg = document.querySelector('#song_detail .songBg');

if (staus) {
    bg.style.display = "none";   
} else {
    bg.style.display = "block";
    setInterval(() => {
        deg++;
        bg.style.background = 'linear-gradient(' + deg + 'deg, ' + startColor + ',' + endColor + ')';
    }, 100)
}


// console.log(rgbColor());
// bg.style.background = 'linear-gradient(' + deg + 'deg, ' + rgbColor() + ',' + rgbColor() + ')';
// bg.style.background = 'radial-gradient('+rgbColor()+','+rgbColor()+')';