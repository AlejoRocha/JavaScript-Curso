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
//lo q se hizo fue crear una variable parrafos que contenga todo lo que tenga la clase parrafo 
//lo q tiene querySelectorAll es que todo lo q trae lo convierte en array y puedo usar metodos de array 
parrafos.forEach(parrafo=>console.log(parrafo));

//.className y classList permiten agregar clases al html
//el mas recomendado es classList, porque devuelve un array con las clases y puedo utilizar metodos sobre ese array 
console.log(contenido.classList)//me devuelve las clases en array 

//classList.add() agrega una clase
contenido.classList.add("prueba")

//innerText, desde el archivo js puedo manipular elementos HTML
parrafos[0].innerText="hola"//aca estoy cambiando el texto o contenido del parrafo 

parrafos[1].innerText="<a href='#'>esto es un enlace</a>"
//la etiqueta <a></a> en el html se va a ver como texto, porque el innerText trabajo solo con texto 

//innerHTML tiene en cuenta las etiquetas de html 

//createElement crea elementos de html
let lista = document.createElement("ul")//por parametro le pase y de forma de string le pase un "ul" entonces me crea el elemento ul 
//si le paso un elemento q no existe de todas formas lo crea como etiqueta html
lista.classList.add("lista")//le creo la clase lista al ul que cree arriba
lista.innerHTML="<li class='list-item'>item1</li>";//aca creo el li con innerHTML
lista.innerHTML+="<li class='list-item>item2</li>";//se le pone el += porque si le pongo "=" solo lo va a remplazar y no lo va a agregar
lista.innerHTML+="<li class='list-item>item3</li>";
lista.innerHTML+="<li class='list-item>item4</li>";
//una vez creado los elemento html hay q agregarlos al html con .append()
contenido.append(lista);

const productos = ["sillon", "silla", "mesa", "ventana"]
//vamos a agregar un array con for of 
for (producto of productos){
    lista.innerHTML += `<li class='list-item'>${producto}</li>`
}

