//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasDisponibles() {
    let arroz = localStorage.getItem("arroz");
    let frijoles = localStorage.getItem("frijoles");
    let lentejas = localStorage.getItem("lentejas");
    let jabon = localStorage.getItem("jabon");
    let limpido = localStorage.getItem("limpido");
    let shampu = localStorage.getItem("shampu");
    let pescado = localStorage.getItem("pescado");
    let res = localStorage.getItem("res");
    let cerdo = localStorage.getItem("cerdo");
    let yogurt = localStorage.getItem("yogurt");
    let leche = localStorage.getItem("leche");
    let kumis = localStorage.getItem("kumis");
    console.log(` existencias Disponibles:\narroz: ${arroz}\nfrijoles :${frijoles} \nlentejas: ${lentejas} \njabon: ${jabon} \nlimpido:${limpido} \nshampu: ${shampu} \npescado: ${pescado} \nres: ${res} \ncerdo:${cerdo} \nyogurt:${yogurt} \nleche:${leche} \nkumis: ${kumis}`);
}

export { existenciasDisponibles };