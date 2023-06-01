const monedas = {
    Euro: "€",
    Dolar: "$",
    Yen: "¥",
}
while (true) {
    const divisa = prompt("Digite una divisa");

    if (divisa in monedas) {
        let simbolo = monedas[divisa];
        console.log(`El simbolo es: ${simbolo}`);
    } else {
        console.log("La divisa no esta en el diccionario");
    }

    const rta = prompt("Otra divisa S/N");
    if(rta.toUpperCase() == "N"){
        break
    }
}