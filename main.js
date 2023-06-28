/*
programa que sirva para mostrar el inventario de productos de una tienda.
Author: laura nikol jimenez rojas
Fecha: 13/06/2023
Licencia GPL
*/
import { ingresarExistencias, ingresar } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { esquema } from "./model.js";
import { eliminarExistencias } from "./eliminar.js";

esquema();

function start() {
    let opcionIngresar = prompt("¿Que deseas hacer?\n(1)mostrar cantidad de productos disponibles.\n(2)ingresar nuevas existencias de producto.\n(3)eliminar existencias de producto");
    if (opcionIngresar == "1") {
        existenciasDisponibles();
    }
    if (opcionIngresar == "2") {
        let categoria = ingresar()
        ingresarExistencias(categoria);
        existenciasDisponibles();
    }
    if (opcionIngresar == "3") {
        let categoria = ingresar()
        eliminarExistencias(categoria);
        existenciasDisponibles();

    }
    console.log("Gracias por usar nuestro programa");
}

start();