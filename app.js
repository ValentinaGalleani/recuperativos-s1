/*Problema 13:
*Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 
*es anagrama de palabra2.
*Si es anagrama debe retornar true, en caso contrario false.
*Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
*Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa
*/














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




