const massage = document.querySelector('#massage')
const btn = document.querySelector('#btn')
let mensajes= ['bueno gracias por visitarme otra vez te debo o debí importar mucho', 'sí estas aquí es porque no funcionó lo nuestro ', 'de verdad te aprecio mucho y aun más si ves esto', 'esté es mi ultimo Adiós mi ultimo te quiero y quisiera que el ultimo beso joder! los tuyos eran los mejores', 'nunca nos entendimos, fuimos egoistas los dos. y orgullosos más que el carajo','vi como tu ammor se apagaba poco a poco y no hice y me hacia el estupido', 'si queise que fuera diferente pero la historia fue otra', 'Gracias por ser mis mas bonita casualidad , mi desastre mas divertido y hermoso gracias por mirarme como sí lo fuera todo 🥺'] 
const pista = document.querySelector(".pista");
const btnPlay = document.querySelector(".play-btn");
const contenedor = document.querySelector(".contenedor");
let currentMessage = 0;
contenedor.style.display = "none";

btn.addEventListener('click', changeMessage);
function solatar(){
  pista.play()
  setTimeout(()=>{
    window.location.reload();
  },28000)
}
function changeMessage () {
    massage.textContent = mensajes[currentMessage];
    currentMessage = (currentMessage + 1) % mensajes.length;
    if(currentMessage == mensajes.length-1){
        contenedor.style.display = "block"
    }
}
btnPlay.addEventListener('click', solatar);

