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