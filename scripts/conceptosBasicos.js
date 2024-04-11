// esta es la forma de comentar en JS

// CONSOLE.LOG -> la forma de enviar mensajes a la consola del navegador
console.log("HOLA, DESARROLLADORES  Y PSICÓLOGOS");
console.log("mi mensaje");



// CONCEPTOS BÁSICO EN JAVASCRIPT

//1. tipos de variables
//2. Manejo del DOM
//3. Condicionales
//4. Ciclos


// LAS VARIABLES EN JS -> piensen en las variables como contenedores de información

// Hay 3 tipos de variables en js

// VAR -> Un tipo de variable que ya no se usa (NO LA VAMOS A UTILIZAR) -> Cambia en el tiempo

// LET -> Es una variable que puede cambiar en el tiempo
// CONST -> en una variable que no puede cambiar en el tiempo


//TIPOS DE DATOS O INFORMACIÓN PODEMOS ALMACENAR
//el = en JS no es comparativo, sino que me sirve para asignar valores

// Numéricos
let numero = 7;

// cadena de caracteres -> texto -> string (en programación)
// El texto SIEMPRE debe estar dentro de comillas 
let texto = "hola, mundo"

//Booleanos -> un dato que puede ser o verdadero o falso 
let esVerdadero = true; //true -> verdad
let esFalso = false; // false -> falso

//Arreglos -> arrays(en programación) -> me permiten almacenar varios datos al mismo tiempo en una misma variable
let arregloNombres = ["Luisa", "Emmanuel", "Paula", "Lucila"];
let arregloNumeros = [1, 3, 5, 8, 20];
//Ojetos -> "Una representación de elementos de la vida real pero en nuestro código"

// -> Atributos -> caracteriticas de ese objeto
// -> métodos -> acciones 

// (), [], {}
// [] -> corchetes -> son para declarar arreglos
//{} -> llaves -> para declarar objetos
// () -> parentesis -> invocar acciones 
const celular = {
    color: "blanco"
    modelo:"galaxy A7"
    ancho: 350, 
    alto: 800, 
    enviarMensaje: funtion(){}

    //entre estos corchetes al lado de unos parentesis yo establezco la acción a realizar

    console.log("mensaje enviado");

}

//EJEMPLOS DE FUNCIONES

//funciones -> acciones que se pueden tener en los sitios web
// funciones -> pueden o no recibir datos entrada -> un procesamiento de datos y luego nos devuelve un resultado 
sumar : function(){
    console.log(5+4);
}

fuction fitrarInformacion (){
    console.log("le muestra lo que está buscando")
}
//carpeta script van todos los archivos de JS pero  destinados a darle dinamismo al sitio web NO SE RELACIONA CON LA 
//CON LA FUNCIONALIDAD DEL SITIO A NIVEL DEL BACKED

//NODE JS utilizamos para poder poder implmentar js en nuestro 
// backed-> operaciones logicas nos permiten el funcionamiento 
//de nuestro sitio web.