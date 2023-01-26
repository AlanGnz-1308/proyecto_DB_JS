const IUS = 5787

let servElegido = prompt("Elija los servicios que desea cotizar según el cuadro escribiendo en Mayúsculas: CONSULTA VERBAL, CONSULTA ESCRITA, CONTRATOS, ASISTENCIA A MEDIACION y luego escriba FINALIZAR: ");

function verbal() {
    return IUS*3
}

function escrita() {
    return IUS*1
}

function contrato() {
    return IUS*20
}

function mediacion(){
    return IUS*5
}

let sumaRealizada = 0

while (servElegido.toUpperCase() != "FINALIZAR") {
    if(servElegido=="CONSULTA VERBAL"){
        sumaRealizada = verbal()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="CONSULTA ESCRITA"){
        sumaRealizada = escrita()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="CONTRATOS"){
        sumaRealizada = contrato()+sumaRealizada
        servElegido = prompt("Ingrese otro servicio (puede guiarse con el cuadro) o FINALIZAR para visualizar la cotización")
    }
    else if(servElegido=="ASISTENCIA A MEDIACION"){
            sumaRealizada = mediacion()+sumaRealizada
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

