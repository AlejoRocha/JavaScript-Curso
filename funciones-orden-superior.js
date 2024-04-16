//metodos de busqueda y transformacion de arrays

/***ABASTRACCION *****/

//Este codigo devuelve el total de la suma del 1 al 10
let total = 0 

for (let i = 1 ;i<=10;i++){
    total += 1//total = total + 1
};

console.log(total)

//esta funcion hace lo mismo pero con el rango que le digamos 


function sumarRango(min, max){
    total=0;
    for (let i=min;i<=max ; i++){
        total +=1
    }
    return total
};

console.log(sumarRango(1,7))

/*******RETORNO DE FUNCIONES *******/

//esto devuelve si es o no menor que 10 
const mayorQueDiez = num => num > 10

console.log(mayorQueDiez(11))

//ahora con retorno de funciones
function mayorQue(x){
    return (num) => num > x 
}

//se pueden crear funciones nuevas 
const mayorQueVeinte = mayorQue(20)
const mayorQueTreinta = mayorQue(30)
const mayorQueCien = mayorQue(100)

console.log(mayorQueVeinte(11))
/*NOta: funciones secundarias que usen la funcion principal*/

/******METODOS DE BUSQUEDA Y DE TRANSFORMACION ************/
const numeros= [50,12,37,17,25,6]
const animales = ['perro','gato','cisne','tortuga']
const productos = [
    {nombre:'mesa',precio:3500},
    {nombre:'silla de plastico',precio:2000},
    {nombre:'silla de madera',precio:2500},
    {nombre:'ventana',precio:4500},
    {nombre:'puerta',precio:3000}
]

//forEach() recorre un array y ejecuta lo que le digamos con cada elemento
numeros.forEach((numero)=>{
    console.log(numero);
});

//este codigo muestra el nombre de los productos y el precio 
productos.forEach((producto) =>{
    console.log(productos.nombre)
    console.log(productos.precio)
})

//find() == recorre un array y retorna el primer elemento que cumpla con una condicion
const perro = animales.find((animal)=> animal ==="perro")

//para q el cliente busque un nombre y devuelva ese producto 
let productoElegido = prompt("ingrese el producto que desea comprar")

console.log(productos.find((producto) => producto.nombre === productoElegido) )

//filter() Retorna un nuevo array con todos los elementos que cumplan una condicion 
const silla = productos.filter((producto)=> productos.nombre === "silla")//esto devuelva un array vacio ya que ningun nombre es silla solo

//esto si nos devuelve lo que queremos porq usamos el metodo .includes
const sillas = productos.filter((prodcuto)=>productos.nombre.includes("silla"))

//some recorre el array y devuelve true o false si encuentra una condicion dada
const cisne = animales.some((animal) => animal === "cisne")

//map recorrer el array y retornar un nuevo array con los elemntos transformador del array original 
const nombres = productos.map((productos) => producto.nombre)
console.log(nombres)// me trae un nuevo array con solo los nombres (o lo que le pida)

//crear una funcion que devuelva un array nuevo con los precios actualizados 
const preciosActualizados = prodcutos.map((producto)=>{
    return{
        nombre : producto.nombre,
        precio : producto.precio *1.5
    }
})
console.log(preciosActualizados)

//reduce() recorre el array y retorna un unico valor tras hacer una operacion sobre los elementos
