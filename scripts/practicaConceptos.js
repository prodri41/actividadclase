//1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTÉ CONECTADO CON HTML 

console.log("Holaaaaa, soy la actividad de hoy 10-04-2024")


//2. TRAER LOS ELEMENTOS QUE NECESITA DE SU HTML -> los que tienen id -> los elemntos que me traiga deben estar en una variable -> debe ser constante

// document -> accede a mi html
//getelemntbyid -> me trae un elemento en particular por su identificador unicos
//dentro de los parentesis DEBO PONER EL MISMO ID que puse en html

const edadInput = document.getElementById("edadInput");
console.log(edadInput)
