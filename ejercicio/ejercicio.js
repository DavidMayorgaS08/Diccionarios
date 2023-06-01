const alumnos = {};

let nombre = prompt("Nombre del alumno");


while(nombre !== "0"){    
    if(nombre in alumnos) {
        alumnos[nombre]++;
    }else{
        alumnos[nombre] = 1;
    }

    nombre = prompt("Nombre del alumno");
}

console.log("Estudiantes que han abierto la boca");

console.log(alumnos);
