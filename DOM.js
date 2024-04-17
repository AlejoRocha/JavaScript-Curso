/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */
"SUPONGAMOS QUE CONTENIDO ES UNA CLASE DEL HTML"
//getElementById nos permite acceder a un elemento por tu id 
//document.getElementById("")

//getElementByClassName nos permite acceder a un elemento por su class
//document.getElementsByClassName("")//devuelve un array pero NO ES un array

//document.querySelector mas recomendada y se llama al id o class como en css con #(id) o .(class)
const contenido = document.querySelector("#contenido")//estoy llamando al ID contenido por eso el #

//document.querySelectorAll para seleccionar varios elemntos con el mismo id o class
const parrafos = document.querySelectorAll(".parrafo")//accedo por la class
//lo q tiene querySelectorAll es que todo lo q trae lo convierte en array y puedo usar metodos de array 
parrafos.forEach(parrafo=>console.log(parrafo));

//.className y classList permiten agregar clases al html
//el mas recomendado es classList, porque devuelve un array con las clases y puedo utilizar metodos sobre ese array 
console.log(contenido.classList)//me devuelve las clases en array 

//classList.add() agrega una clase
