//diccionarios  objetos
const persona1 = { 
    nombre:"Mariana",
    edad:22,
    cc:"34343",
    hobbies:{
        deporte:"Futbol",
        diversion:"Cine",
        libros:{

        }
    }
 }    
 persona1.telefono="3423423423"
 persona1.hobbies.libros.genero="Suspenso"
 
 const persona2 = { 
    nombre:"Nancy",
    edad:24,
    cc:"43534",
    hobbies:{
        deporte:"Natacion",
        diversion:"Cine",
    },
    hijos:[{nombre:"Juan",edad:9},{nombre:"Carlos",edad:6}]
 } 
 
 const nombre=persona1.nombre
 const diversion=persona1.hobbies.diversion
 
 console.log(persona1);
 console.log(persona2.cc);
 
 const personas=[persona1]
 personas.push(persona2)
 console.log(personas);
 
 console.log(personas[1].nombre);
 console.log(personas[1].hijos[1].edad);