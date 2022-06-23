var jet = document.getElementById('jet');



window.addEventListener('keydown',(e)=>{
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if(e.key = "ArrowLeft"){
        jet = left - 10 + "px";
    }
    else if(e.key = "ArrowRight"){
        jet.style.left = left + 10 + "px";
    }
} );

var generateRocks = setInterval(()=>{
    var rock = document.createElement('div');
    rock.classList.add('rocks');

},1500)