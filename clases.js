class Usuario {
    constructor(name,lastName,id){
        this.name=name  
        this.lastName=lastName  
        this.id=id
    }

    obtenerIdentidad(){
        return "hola" + this.name + this.lastName
    }
}

const instancia1=new Usuario(name, lastName)

// operador IN devuelve un booleano 
console.log("name" in instancia1)