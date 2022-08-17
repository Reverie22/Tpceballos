window.addEventListener('scroll',function(){
 let animacion = this.document.getElementById('mockup')
 let posicionOBJ1 = animacion.getBoundingClientRect().top(); 
 let tamaDePantalla = window.innerHeight/3.5;



 if(posicionOBJ1 == tamaDePantalla ){
    animacion.style.animation = 'mover 1s ease-out'
 }
});