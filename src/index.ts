// Examen Recuperatorio con fecha de entrega el dia 28/06
let cantidadDeProductos: number = Number(
  prompt("¿Cuantos productos desea comprar?")
);
let arregloDeProductos: number[] = new Array(cantidadDeProductos);
let sumaTotal: number = 0;

function cargarProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    arreglo[i] = Number(
      prompt("Ingrese el nombre del producto en posicion " + (i + 1))
    );
    arreglo[i] = Number(
      prompt(
        "Ingrese la Cantidad que compro de ese producto en posicion " + (i + 1)
      )
    );
    arreglo[i] = Number(
      prompt(" Ingrese el precio del producto en posicion " + (i + 1))
    );
  }
}
function mostrarProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    console.log(arreglo[i]);
  }
}

function calcularCompra(arreglo: number[], cantidad: number) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    sumaTotal += arreglo[i];
  }
}
cargarProductos(arregloDeProductos, cantidadDeProductos);
mostrarProductos(arregloDeProductos, cantidadDeProductos);

calcularCompra(arregloDeProductos, cantidadDeProductos);
