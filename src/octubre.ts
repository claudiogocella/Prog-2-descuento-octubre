rotulo1.innerHTML = "Ingrese el monto:";
rotulo2.innerHTML = "Ingrese la cantidad:";
rotulo3.innerHTML = "Ingrese el mes:";

let btnEnviar = document.getElementById("enviar");

let monto: number = Number(dato1.value);
let montoConDescuento: number = 0;
let descuento: number = 0;
let cantidad: number = Number(dato2.value);
let precioTotal: number = monto * cantidad;
let mes: number = Number(dato3.value);

btnEnviar.addEventListener("click", () => {
  if (mes === "octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento!"
    );
    console.log("El monto a pagar es:" + montoConDescuento);
  } else {
    console.log("Ud no tiene descuento, el monto a pagar es:" + precioTotal);
  }
});
