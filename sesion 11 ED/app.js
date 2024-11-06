function verificarCalificacion() {
    let grado = parseInt(document.getElementById("grado").value);
    let mensaje = "";
    if (grado >= 0 && grado <= 100) {
        if (grado >= 90) {
            mensaje = "Aprobado con honores";
        } else if (grado >= 70) {
            mensaje = "Aprobado";
        } else {
            mensaje = "Reprobado";
        }
    } else {
        mensaje = "valor incorrecto";
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}
function determinarParidad() {
    let parImpar = parseInt(document.getElementById("parImpar").value);
    let mensaje = "";
    if (parImpar % 2 === 0){
        mensaje = "El numero es par";
    } else{
        mensaje = "El número es impar"
    }
    document.getElementById("parImparSalida").innerText = mensaje;

}
function evaluarDescuento() {
    let descuento = parseInt(document.getElementById("descuento").value);
    let precioFinal = descuento;
    if (descuento > 100000 ){
        precioFinal = descuento * 0.9;
    }
    document.getElementById("descuentoSalida").innerText = `Monto final a pagar $${precioFinal}`;
}
function jugarAdivinanza() {
    let adivinar = parseInt(document.getElementById("adivinar").value);
    let numeroAleatorio = Math.floor(Math.random() *10) +1;
    let mensaje = "";
    if (adivinar === numeroAleatorio) {
        mensaje = "Felicidades adivinaste el numero!";
    } else {
        mensaje = `Lo siento, el número era ${numeroAleatorio}`;
    }
    document.getElementById("adivinarSalida").innerText = mensaje ;
}