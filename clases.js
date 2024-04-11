class Persona {
    constructor(name,lastName,id){
        this.name=name  
        this.lastName=lastName  
        this.id=id
    }

    obtenerIdentidad(){
        return this.name ,this.lastName
    }
}

const instancia1=new Persona(name, lastName)