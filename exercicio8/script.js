let game = document.querySelector('.game');
let music = document.querySelector('.music');
let tech = document.querySelector('.tech');

function toggle(btn){
    if (btn.classList.contains('istoggled')){
        btn.classList.remove('istoggled');
    }else{
        btn.classList.add('istoggled');
    }
}

game.addEventListener('click', function(){
    if(music.classList.contains('istoggled') || tech.classList.contains('istoggled')){
        music.classList.remove('istoggled');
        tech.classList.remove('istoggled');
    }
    toggle(this);
})

music.addEventListener('click', function(){
    if(game.classList.contains('istoggled') || tech.classList.contains('istoggled')){
        game.classList.remove('istoggled');
        tech.classList.remove('istoggled');
    }
    toggle(this);
})

tech.addEventListener('click', function(){
    if(game.classList.contains('istoggled') || music.classList.contains('istoggled')){
        game.classList.remove('istoggled');
        music.classList.remove('istoggled');
    }
    toggle(this);
})