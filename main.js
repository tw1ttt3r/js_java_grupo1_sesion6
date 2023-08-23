doble(5);

// Programación Funcional 
// Es un paradigma de programación

//  inmutabilidad
// Es la caracteristica de no cambiar ni su valor ni su tipo durante toda la
// ejecución
// es la generación de nuevos a partir de otros

// funciones puras

// una función que recibe parametros
// retorna siempre un valor
// no produce efectos secundarios
// a la misma entrada, la misma salida

// let nombre = "Pedro"

// function saludo() {
//   alert("Hola me llamo" + nombre);
//   nombre = "Antonio";
// }

function doble(numero) {
  return numero * 2
}

// numero = 4
// return 8 

// numero = 6
// return 12

// numero = 78
// return 156

// numero = 4
// return 8


// funciones primera clase
// una función anonima es una funcion que al ser declarada no tiene un nombre

// function() {}
// () => {}

const persona = {
  nombre: "Pedro",
  saludar: () => {} // metodo
};

persona.saludar();

const hablar = () => {};

hablar();

// funciones de alto orden
// son funciones que pueden recibir como parametro a otras funciones

// map
// es una método funcional que regresará un nuevo arreglo con el mismo número de 
// elementos que el arreglo original, pero no con el mismo contenido 
// la mayoria de las veces

// sintaxis: arreglooriginal.map((current, position, array) => {})

const numeros = [4, 5, 67, 8, 78, 90, 23, 87, 4];

const dobleNumeros = numeros.map((current, position, array) => {
  if (current === 67) {
    return current * 2
  } else {
    return current
  }
});

// [8, 10, 134, 16, 156, 180, 46, 174, 8]

// ejercicio

const datos = [4, 89, 23, 67, 34, 89, "hola", "true", false, [], "juan"];
const nuevosDatos = datos.map((dato) => {

  switch(typeof dato) {
    case "string":
      if (!(dato.length % 2)) { // 0 - false - true
        return dato.split("").reverse().join("");
      }
      return dato
      break;
    case "number":
      if (!(dato % 2)) {
        return dato / 2
      }
      return dato * 3
      break;
    case "boolean":
      return !dato
      break;
    default:
      return null
  }

});

// filter
// es un método funcional que regresará un arreglo de la misma o menor
// cantidad de elementos del arreglo original, ya además posiblemente
// no sea el mismo contenido

// sintaxis: arreglooriginal.filter((current, position, array) => {})

const alumnos = [
  {
    nombre: "Maria",
    grado: "4",
    grupo: "A"
  },
  {
    nombre: "Gabriela",
    grado: "5",
    grupo: "C"
  },
  {
    nombre: "Antonio",
    grado: "2",
    grupo: "C"
  },
  {
    nombre: "Maria",
    grado: "3",
    grupo: "B"
  },
  {
    nombre: "Pedro",
    grado: "6",
    grupo: "C"
  },
];

// queremos obtener a todos los alumnos que esten en el grupo C, no importando el grado

const filtradoAlumnos = alumnos.filter((current) => current.grupo === "C");

// queremos obtener a todos los alumnos que esten en el grupo C, pero que esten en un grado mayor a 3

const filtradoAlumnos1 = alumnos.filter((current) => current.grupo === "C" && current.grado > 3);

const alumnos2 = [
  {
    nombre: "Maria",
    grado: "4",
    grupo: "A",
    hobbies: [
      "Jugar",
      "Cantar",
      "Bailar"
    ]
  },
  {
    nombre: "Gabriela",
    grado: "5",
    grupo: "C",
    hobbies: [
      "Jugar",
    ]
  },
  {
    nombre: "Antonio",
    grado: "2",
    grupo: "C",
    hobbies: [
      "Cantar",
      "Bailar"
    ]
  },
  {
    nombre: "Maria",
    grado: "3",
    grupo: "B",
    hobbies: [
      "Jugar",
      "Cantar",
      "Bailar"
    ]
  },
  {
    nombre: "Pedro",
    grado: "6",
    grupo: "C",
    hobbies: [
      "Jugar",
      "Bailar"
    ]
  },
];

const filtro1 = alumnos2.filter((alumno) => Number(alumno.grado) > 2)
const filtro2 = filtro1.filter((alumno) => alumno.hobbies.length > 1);
const filtro2Prov = alumnos2.filter((alumno) => Number(alumno.grado) > 2 && alumno.hobbies.length > 1);

const filtro3 = alumnos2.filter((alumno) => alumno.nombre.includes("e") && alumno.hobbies.length === 3)

// reduce
// es un metodo funcional que regresará cualquier tipo de dato valido de 
// javascript
// string, boolean, null, undefined, number, object - array

[9, 8, 9, 5]
// sintaxis: arreglooriginal.reduce((prev, current, position, array) => {}, valorInicial)
// el valorInicial es un segundo parametro del reduce y es completamente opcional
// el valorInicial dicta el tipo de dato a regresar por el reduce
// Si el valorInicial es proporcionado, el valor de prev en la primera iteracion o 
// iteracion 0 tendrá el valor de valorInicial y el valor de current será el de la 
// posicion 0 del arreglo original, para las siguientes iteraciones, el valor de prev
// será el del valor retornado de la funcion operadora y current tendrá el valor
// de la posición de la iteración actual

// Si el valorInicial no es proporcionado, el valor de prev para la iteración 0,
// tendrá el valor de la posición 0 del arreglo original y current tendrá el valor
// de la siguiente posición
// para las siguiente iteraciones, el valor de prev será el valor que regrese la función
// operadora y current el siguiente valor del arreglo


