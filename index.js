const massage = document.querySelector('#massage')
const btn = document.querySelector('#btn');
const title = document.querySelector('.title');
let mensajes= ['Quiero pedir un deseo esta noche,\n quiero que mi alma llene el cielo,\n quiero que se paren los relojes,\n que se detenga el tiempo,\n y que de mí te enamores.','Si enamorarnos nos causa la muerte,\n Y desaparecerme te daría la vida,\n Prefiero amarte a escondidas.\n Y que sigas con vida',
'Si amarte fuera la guerra,\nY no amarte fuera la paz,\nEscogería morir en la guerra,\nQue vivir en paz.',
'Te mando un abrazo por si tienes frío\n una sonrisa por si estás triste\n un ángel para que te cuide\ny este mensaje para que no me olvides.\n',
'Mi alma no va a dejar de quererte,\nYa que ella nació para amarte.\nNo existe manera de perderte,\nSi todos los días trata de enamorarte'] 
let currentMessage = 0;
function final() {
  title.innerText = 'call me 😏';
}
function changeMessage () {
  console.log(currentMessage);
    massage.textContent = mensajes[currentMessage];
    currentMessage = (currentMessage + 1) % mensajes.length;
    if(currentMessage == 4){
            final();
    }
}
btn.addEventListener('click', changeMessage);

