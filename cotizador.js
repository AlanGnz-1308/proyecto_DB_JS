const IUS = 6854

alert("Hola gracias por utilizar el cotizador, te pediremos datos para enviartelo luego por mail")

class UsuarioCotizado {
    constructor(nombre, apellido, cuil, edad, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.cuil = cuil
        this.edad = edad
        this.mail = mail
    }

    validar_edad(){
        if(typeof (this.edad) == "number" && this.edad > 18){
            alert("Bienvenido:" + this.nombre + " a continuación podrá cotizar servicios");           
        }
        else{
            alert("Por ser menor de edad, la cotización deberá realizarla tu padre/madre y/o tutor y le serán enviados a él los documentos al mail que aclares luego:");
            this.mail = prompt("Introduce nueva dirección de mail:")
        }
    }
    }

let usuario = new UsuarioCotizado (
    prompt("Escribe tu nombre"),
    prompt("Escribe tu apellido"),
    prompt("Escribe tu cuil"),
    parseInt(prompt("Escribe tu edad")),
    prompt("Escribe tu mail"),
)

usuario.validar_edad();

let servElegido = prompt("Elija y escriba EN MAYÚSCULAS los servicios que desea cotizar según el cuadro escribiendo: CONSULTA VERBAL, CONSULTA ESCRITA, CONTRATOS, ASISTENCIA A MEDIACION y luego escriba FINALIZAR: ");

function calculo_IUS() {
    if(servElegido=="CONSULTA VERBAL"){
        return IUS*1
    }
    else if(servElegido=="CONSULTA ESCRITA"){
        return IUS*3
    }
    else if(servElegido=="CONTRATOS"){
        return IUS*20
    }
    else if(servElegido=="ASISTENCIA A MEDIACION"){
        return IUS*5
    }
}

/*

{servicio: "CONSULTA VERBAL", multiplicador: 1}
{servicio: "CONSULTA ESCRITA", multiplicador: 3}
{servicio: "CONTRATOS", multiplicador: 20}
{servicio: "ASISTENCIA A MEDIACION", multiplicador: 5}


*/
let sumaRealizada = 0

while (servElegido.toUpperCase() != "FINALIZAR") {
    if(servElegido=="CONSULTA VERBAL"){
        sumaRealizada = calculo_IUS()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="CONSULTA ESCRITA"){
        sumaRealizada = calculo_IUS()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="CONTRATOS"){
        sumaRealizada = calculo_IUS()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="ASISTENCIA A MEDIACION"){
        sumaRealizada = calculo_IUS()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else{
        servElegido = prompt ("recuerde que puede escribir en mayúsculas solamente CONSULTA VERBAL, CONSULTA ESCRITA, CONTRATO, ASISTENCIA A MEDIACION o FINALIZAR")
    }
}
    

alert("La cotización total es de: $"+sumaRealizada)

if (sumaRealizada > 50000) {
    alert("Como su cotización es mayor a $50.000 usted puede pagar con tarjeta de crédito en 3 cuotas sín interes de: $"+(sumaRealizada/3))
}
else if(sumaRealizada < 50000){
    alert("Como su cotización es menor a $50.000 usted puede pagar en efectivo o con tarjeta de crédito en 3 cuotas CON interés 10% de: $"+((sumaRealizada*0,10)+sumaRealizada/3))
}
