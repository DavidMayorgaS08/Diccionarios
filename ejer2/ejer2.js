const nombre = prompt("Nombre del usuario");
const edad = prompt("Edad del usuario");
const direccion = prompt("Dirección del usuario");
const telefono = prompt("Teléfono del usuario");

const informacion = {
    nombre: nombre,
    edad: edad,
    direccion:direccion,
    telefono: telefono,
}

console.log(`${informacion.nombre} tiene ${informacion.edad} años, vive en ${informacion.direccion} y su número de teléfono es ${informacion.telefono}`);