let lista = [];

while (true) {
  console.log("--- MENÚ ---");
  console.log("1. Añadir al final");
  console.log("2. Añadir X");
  console.log("3. Tamaño");
  console.log("4. Eliminar el final");
  console.log("5. Eliminar X");
  console.log("6. Contar");
  console.log("7. Listar");
  console.log("8. Salir");

  let opcion = parseInt(prompt("Ingrese el número de la opción que desea ejecutar: "));

  if (opcion == 1) {
    let numero = parseInt(prompt("Ingrese un número: "));
    lista.push(numero);
    console.log(`El número ${numero} ha sido añadido al final de la lista.`);
  } else if (opcion == 2) {
    let numero = parseInt(prompt("Ingrese un número: "));
    let posicion = parseInt(prompt("Ingrese la posición donde desea añadir el número (a partir de 1): "));

    if (posicion >= 1 && posicion <= lista.length + 1) {
      lista.splice(posicion - 1, 0, numero);
      console.log(`El número ${numero} ha sido añadido en la posición ${posicion} de la lista.`);
    } else {
      console.log("La posición ingresada no es válida.");
    }
  } else if (opcion == 3) {
    console.log(`El tamaño de la lista es: ${lista.length}`);
  } else if (opcion == 4) {
    if (lista.length > 0) {
      let numeroFinal = lista.pop();
      console.log(`El número final de la lista era ${numeroFinal} y ha sido eliminado.`);
    } else {
      console.log("La lista está vacía.");
    }
  } else if (opcion == 5) {
    let posicion = parseInt(prompt("Ingrese la posición que desea eliminar (a partir de 1): "));

    if (posicion >= 1 && posicion <= lista.length) {
      let numeroEliminado = lista.splice(posicion - 1, 1)[0];
      console.log(`El número ${numeroEliminado} ha sido eliminado de la posición ${posicion} de la lista.`);
    } else {
      console.log("La posición ingresada no es válida.");
    }
  } else if (opcion == 6) {
    let numero = parseInt(prompt("Ingrese un número: "));
    let contador = lista.filter(elemento => elemento === numero).length;
    console.log(`El número ${numero} aparece ${contador} veces en la lista.`);
  } else if (opcion === 7) {
    console.log("Elementos de la lista:");
    for (let numero of lista) {
      console.log(numero);
    }
  } else if (opcion == 8) {
    console.log("Saliendo del programa...");
    break;
  } else {
    console.log("Opción inválida. Por favor, ingrese un número del 1 al 8 para seleccionar una opción del menú.");
  }
}