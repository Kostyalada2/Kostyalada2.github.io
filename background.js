
const backgrounds = ["media/opt.mp4", "media/qake.mp4", "media/cat.mp4"];

function randomBackground() {
    const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var vid = document.getElementById("vidarea");
    const source = vid.querySelector("source");

    source.src = background;
    vid.load();   
    vid.play();   
}




randomBackground();

