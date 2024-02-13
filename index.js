const massage = document.querySelector('#massage')
const btn = document.querySelector('#btn')
let mensajes= ['hola', 'perdón por mis acciones y mis palabras', 'se que te cause un mal rato', 'lamento ser un idiota en ocaciones', 'respondas o no quiero que sepas que te quiero y que eres muy especial para mi',
'No somos la pareja perfecta, peleamos, nos decimos cosas sobre todo yo', 'pero la verdad es que no hay nadie en este mundo con quien prefiera estar que contigo',
'nunca dejemos que el orgullo sea mayor al amor que nos tenemos ',
'y para cerrar con un promesa " te abrazaré muy fuerte el día que nos veamos paho 💙💙💙"'] 


let currentMessage = 0;
btn.addEventListener('click', changeMessage);

function changeMessage () {
    massage.textContent = mensajes[currentMessage];
    currentMessage = (currentMessage + 1) % mensajes.length;
}

