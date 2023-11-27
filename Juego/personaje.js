let cuadro = document.getElementById('cuadro');
let personaje = document.getElementById('personaje');
let objeto = document.getElementById('objeto');
let objeto2 = document.getElementById('objeto2');
let y = 0;
let x = 0;
let objeX = 250
let objeY = 350

function movimiento(evento) {
    let cuadroRect = cuadro.getBoundingClientRect();
    let personajeRect = personaje.getBoundingClientRect();

    if (evento.key == 'w' && y - 50 >= 0) { // arriba
        y -= 50;
        personaje.style.top = y + 'px';
        
    }
    if (evento.key == 's' && y + 50 + personajeRect.height <= cuadroRect.height) { // abajo, limite del personeje en Y
        y += 50;
        personaje.style.top = y + 'px';
       
    }
    if (evento.key == 'd' && x + 50 + personajeRect.width <= cuadroRect.width) { // derecha, limite del personaje en X
        x += 50;
        personaje.style.left = x + 'px';
    }
    if (evento.key == 'a' && x - 50 >= 0) { // izquierda
        x -= 50;
        personaje.style.left = x + 'px';
    }
    if(x == 250 && y == 350 ){
         alert("Boom")
    }
    if(x == 550  && y == 250 ){
        alert("Boom")
   }
}
    window.onkeydown = movimiento;