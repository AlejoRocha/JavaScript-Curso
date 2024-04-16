/**********************METODOS***********************/
productos = ["sillon","silla", "mesa", "ropero"]


//.length
console.log(productos.length)//devuelve el largo del array 
/*recorro un array sin saber la longitud*/
for (let i =0; i < productos.length;i++){
    console.log(productos[i])
} 

//.push agrega un elemento al final del array, se puede agregar una variable
//let cama = "cama" ** producto.push(cama)
productos.push("cama")

//.unshift agrega un elemento al principio del array 
productos.unshift("puerta")

//.shift elimina el primer elemento del array 
productos.shift()

//.pop elimina el ultimo elemento del array 
productos.pop()

//.splice elimina uno o vario elemento que le pase por indice
//el 1er parametro es el indice y el 2do es la cantidad de elementos q voy a eliminar dsp del indice 
productos.splice(1, 1)

//.join genera un string con los elemntos del array 
//los parametros que le pase al join es como se van a separar los string (puede ser con "coma," un espacio o lo que sea)
console.log(productos.join())
console.log(productos.join(", "))

//.concat nos permita unir 2 array en uno 
//se recomienda crear otro array para unir los demas
const productos2 = ["puerta", "ventana", "cama"]
const productoFinal = productos.concat(productos2);

//.slice se genera otro array con una copia de otro array 
//usa 2 parametros, indice de donde empieza y donde termina. No tiene en cuenta el ultimo elemento 
const productosComedor = productos2.splice(0, 2)
/* esto devuelve puerta y ventana, cama no devuelve porq ignora el ultimo elemento*/

//indexof, saber el numero de indice de nuestro elemento
//le paso el valor y nos devuelve el indice 
console.log(productos.indexOf("silla"))

//includes, devuelve un booleano si existe o no lo que le pase
console.log(productos.includes("silla"))

//.reverse invierte el orden del array 
productos.reverse()