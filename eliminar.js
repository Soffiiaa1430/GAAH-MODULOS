function eliminarExistencias(categoria) {

    let cantidad;
    if (categoria == "granos") {
        let desicion = prompt("¿que productos desea eliminar?\n(1)arroz\n(2)frijoles\n(3)lentejas");
        let cantidadIngresar = parseInt(prompt("ingrese la cantidad que desea eliminar"));
        if (desicion == "1") {
            cantidad = localStorage.getItem("arroz");
            localStorage.setItem("arroz", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "2") {
            cantidad = localStorage.getItem("frijoles");
            localStorage.setItem("frijoles", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "3") {
            cantidad = localStorage.getItem("lentejas");
            localStorage.setItem("lentejas", parseInt(cantidad) - cantidadIngresar);
        }

    }
    if (categoria == "aseo") {
        let desicion = prompt("¿que productos desea eliminar?\n(1)jabon\n(2)limpido\n(3)shampu");
        let cantidadIngresar = parseInt(prompt("ingrese la cantidad que desea eliminar"));
        if (desicion == "1") {
            cantidad = localStorage.getItem("jabon");
            localStorage.setItem("jabon", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "2") {
            cantidad = localStorage.getItem("limpido");
            localStorage.setItem("limpido", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "3") {
            cantidad = localStorage.getItem("shampu");
            localStorage.setItem("shampu", parseInt(cantidad) - cantidadIngresar);
        }

    }
    if (categoria == "carnes") {
        let desicion = prompt("¿que productos desea eliminar?\n(1)pescado\n(2)res\n(3)cerdo");
        let cantidadIngresar = parseInt(prompt("ingrese la cantidad que desea eliminar"));
        if (desicion == "1") {
            cantidad = localStorage.getItem("pescado");
            localStorage.setItem("pescado", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "2") {
            cantidad = localStorage.getItem("res");
            localStorage.setItem("res", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "3") {
            cantidad = localStorage.getItem("cerdo");
            localStorage.setItem("cerdo", parseInt(cantidad) - cantidadIngresar);
        }

    }
    if (categoria == "lacteos") {
        let desicion = prompt("¿que productos desea eliminar?\n(1)yogurt\n(2)leche\n(3)kumis");
        let cantidadIngresar = parseInt(prompt("ingrese la cantidad que desea eliminar"));
        if (desicion == "1") {
            cantidad = localStorage.getItem("yogurt");
            localStorage.setItem("yogurt", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "2") {
            cantidad = localStorage.getItem("leche");
            localStorage.setItem("leche", parseInt(cantidad) - cantidadIngresar);
        }
        if (desicion == "3") {
            cantidad = localStorage.getItem("kumis");
            localStorage.setItem("kumis", parseInt(cantidad) - cantidadIngresar);
        }

    }
}
export { eliminarExistencias };