function greetVisitor() {
    alert("Welcome to my dream home! 🌟 Thank you for visiting 💞");
}

document.addEventListener("click", function() {
    const bgMusic = document.getElementById("bg-music");
    if (music && music.paused){
        music.play()
    }  
},{once:true}
);

function toggleMusic(){
    const bgMusic= document.getElementById("bg-music");
    if (bgMusic.paused) {
        bgMusic.onplay();
    }else {
      bgMusic.pause();  
    }
}

AOS.init({
    duration:1000,
    easing: 'ease-in-out',
    once: true
});