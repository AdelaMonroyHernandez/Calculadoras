const sum=(v1,v2)=>v1+v2

const res=(v1,v2)=>v1-v2

const mul=(v1,v2)=>v1*v2

const div=(v1,v2)=>{
    if(v2==0)
        return "Operacion no valida"
    else
        return v1/v2
}

export var Pi = 3.1416

const valida=()=> "validacion"

export {sum as suma, res as resta, mul as multiplicacion, div as division}

