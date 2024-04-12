//Funcion declarada
function saludar (nombre){
    console.log("Hola " + nombre)
}
saludar("alesi")

//funciones anonimas
const saludar = function(){
    console.log("hola, mundo")
}
saludar()

//funcion flecha 
const saludar =()=>{
    console.log("hola amigos")
}

//Funcion flecha comprimida (si es cortita o tengo un parametro)
const saludo =()=> console.log("holas")

//Funciones declaradas con retorno 
function suma (a,b){
    return a + b;
}
console.log(suma(3,5))

//funcion flecha con return implicito 
const resta = (a,b)=> a - b;
console.log(resta(8,2));