//OBJETOS: entidades que tienen propiedades
const usuario1 = {
    nombre: "Alejo",
    edad: 22 ,
    nacionalidad: "argentina",
    hobbies:{
        hobbie1:"futbol",
        hobbie2:"juegos de pc"
    }
}
console.log(usuario1.nombre)


const usuario2 = {
    nombre: "jose",
    edad: "43",
    nacionalidad:"argentina"
}
//Funcion constructora: crear una estructura de nuestros futuros productos
function Producto(titulo,marca,precio){
    this.titulo=titulo; //es como crear una variable (let titulo = titulo)
    this.marca=marca;
    this.precio=precio
}

const producto1 = new Producto("Intel i3", "intel", 50000)







