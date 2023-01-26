const IUS = 5787

let servElegido = prompt("Elija y escriba EN MAYÚSCULAS los servicios que desea cotizar según el cuadro escribiendo: CONSULTA VERBAL, CONSULTA ESCRITA, CONTRATOS, ASISTENCIA A MEDIACION y luego escriba FINALIZAR: ");

function calculo_IUS() {
    if(servElegido=="CONSULTA VERBAL"){
        return IUS*3
    }
    else if(servElegido=="CONSULTA ESCRITA"){
        return IUS*1
    }
    else if(servElegido=="CONTRATOS"){
        return IUS*20
    }
    else if(servElegido=="ASISTENCIA A MEDIACION"){
        return IUS*5
    }
}

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
