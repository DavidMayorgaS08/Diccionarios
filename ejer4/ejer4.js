const cesta = {};

let Ptotal = 0;

while(true){
    const articulo = prompt("Articulo");
    const precio = parseFloat(prompt("Precio del articulo"));

    cesta[articulo] = precio;

    Ptotal = Ptotal + precio;

    console.log(`${articulo} ${cesta[articulo]}`);

    const rta = prompt("Otro producto S/N");
    if(rta.toUpperCase() == "N"){
        break
    }
}

console.log(`Total ${Ptotal}`);

console.log(cesta);