const materias = [];

let materia = prompt("Nombre de la materia o 'final' para terminar");

while (materia != "final") {
    let nota = parseFloat(prompt(`Nota de ${materia}`));

    let registro = {};
    registro[materia] = nota;
    materias.push(registro);

    materia = prompt("Nombre de la materia o 'final' para terminar");
}

console.log(materias);

for (let i = 0; i < materias.length; i++) {
    let materia = Object.keys(materias[i])[0];
    let nota = materias[i][materia];

    if (nota >= 5) {
        materias.splice(i, 1);
        i--;
    }
}

console.log("Asignaturas para repetir:");
for (let i = 0; i < materias.length; i++) {
    let materia = Object.keys(materias[i])[0];
    console.log(materia);
}
