/*Problema 1:
*Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
*Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
*		     		n = 3
*		     		retorna [5, 6, 7, 1, 2, 3, 4]
*/
var rotation= function(arrNumbers,nVeces){ //variable que contiene la funcion 
var arrNumbers= [1, 2, 3, 4, 5, 6, 7, 8]; // variable que contiene array de números
var nVeces= prompt("Ingresa la cantidad de veces que rotaremos nuestro array"); 
/*variable que contendra la respuesta de nuestro usuario*/
return arrNumbers.slice(arrNumbers.length - nVeces).concat(arrNumbers.slice(0,arrNumbers.length - nVeces));
/*De esta manera en el primer parámetro retornamos nuestro array con el método slice que nos permite 
extraer una seccion del mismo y concatenamos el segundo parámetro partiendo desde el indice cero, de esta forma
rotaremos n veces  según la cantidad de veces que exija el usuario. */
};

console.log(rotation());


/*Problema 4:
*Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.
*Ejemplo:	arr = [1, 2, 3]
*					retorna 0
*					arr = [3, 2, 1]
*					retorna 2
*/

var arrNumbers= [5, 3, 1, 4, 2];
var numberMin = Math.min(...arrNumbers);
document.write("El número más pequeño es: " + numberMin);

function min(numeroMenor){
	numberMin.


 if(numberMin.length <1);
 return 
}
//En construcción!



/*Problema 11:
*Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
*Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue 
*aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4. 
*/

var notas =[]; //variable vacía que almacenará las 10 notas
var suma = 0; // variable que más adelante sumará las calificaciones
var promedio = 0; // variable que almacenará el promedio de notas

	for (var i = 0; i < 10; i++){ 
		notas[i] = Number(prompt("Ingrese las calificaciones")); //ingresamos las notas por medio de un prompt				
		suma = suma + notas[i]; // la variable suma las notas que se ingresaron
		promedio = suma/10; // promedio es la suma de las notas dividido por 10(cantidad de notas) 
	}

	document.write('Tu promedio es = ' + promedio); // ventana donde aparece el promedio impreso en la página

		if(promedio < 4){ 
			alert("Estas reprobado :(");// si el promedio es menor a 4 estás reprobado
		}else{
			alert("Estas aprobado!!"); // si es mayor a 4 estás aprobado
		} 


/*Problema 13:
*Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 
*es anagrama de palabra2.
*Si es anagrama debe retornar true, en caso contrario false.
*Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
*Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa
*/

var palabra1= prompt("Ingrese una palabra"); // Le pedimos al usuario que ingrese una palabra por medio de un prompt
var palabra2= prompt("Ingrese otra palabra para ver si es un anagrama")//Le pedimos nuevamente que ingrese otra palabra para ver si coincide.
/*si la longitud de la palabra1 es igual a la longitud de la palabra 2*/
if (palabra1.length == palabra2.length) {
	/*Se reconoce como una palabra anagrama si palabra1 es igual a palabra2 con el metodo split y sort  */
    palabra1.split().sort() == palabra2.split().sort()
    document.write("Efectivamente es un anagrama.");
} else if (palabra1.length != palabra2.length) { // si no tienen la misma cantidad de caracteres, no se reconoce como un anagrama :(
  document.write("No es un anagrama :(");
}


/*Problema 14:
*Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
*Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*					output nuevoArr = [2, 4, 6, 8, 10]
*/

/*Variable que contiene los números del 1 al 10*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
/*Variable donde se guardarán los números pares usando el método filter(); 
*para filtrar los números que en este caso son pares.
*/
var arrPares = arr.filter(function(numero){ 
	return numero % 2 == 0;
});
console.log(arrPares);


/*Problema 15:
*Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada 
*elemento multiplicado por 12.
*Ejemplo: input arr = [1, 2, 3, 4]
*		  		output nuevoArr = [12, 24, 36, 48]
*/

/*Variable que contiene un array de números enteros */
var arrNumbers= [2, 5, 7, 8]; 
/*Variable que contiene el método map() el cual crea un nuevo array con los 
*resultados  de la llamada a la funcion aplicados a cada uno de sus elementos
*/
var arrMultiplicado = arrNumbers.map(function(x){
/*retornará un nuevo array con todos los elementos del primer array, 
*multiplicados por 12
*/ 	
	return x * 12; 
});
console.log(arrMultiplicado); 




