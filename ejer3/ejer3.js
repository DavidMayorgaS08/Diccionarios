const Pfrutas = {
    Platano: 1.35,
    Manzana: 0.80,
    Pera: 0.85,
    Naranja: 0.70,
}

const fruta = prompt("Ingrese una fruta");
const kilos = parseInt(prompt("Cuantos kilos"));

if(fruta in Pfrutas){
    precio = kilos * Pfrutas[fruta];
    console.log(`El valor es de ${precio}`);
}else{
    console.log("La fruta no se encuntra en el diccionario");
}