//para resetear la cuenta

function fibonacci(){
	//primeros dos numeros de la lista
	let a =0
	let b = 1

	//retornar funcion a la cual se le pediran los siguientes
	return{
		next: function(reset){
			if(reset) a = 0, b = 1;
			let f = a;
			a = b;
			b = f + a;
			return {value: f, done: false}
		}
	}
}
const fibo = fibonacci();


// Misma solución usando generadores.js

/*
	La declaración function* (la palabra clave function seguida 
	de un asterisco) define una función generadora, 
	que devuelve un objeto Generator.
*/

/*
	Para declarar un genereador se debe colocar un (*) asterisco 
	luego de la palabra function.

	Esto permite llamar dentro del cuerpo de la funcion la palabra clave yield
	Esta va a servir como un return pero va a dejar la ejecución de la función 
	en ese punto, y en la siguiente ejecución con tinuara en la linea siguiente
*/

/*
	Los generadores son funciones de las que se puede salir y volver a entrar. 
	Su contexto (asociación de variables) será conservado entre las reentradas.

	La llamada a una función generadora no ejecuta su cuerpo inmediatamente; 
	se devuelve un objeto iterador para la función en su lugar. 

	Cuando el metodo next() del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta la primera expresión yield, 
	la cual especifica el valor que será retornado por el iterador o con, yield*, delega a otra función generadora.
	El método next() retorna un objeto con una propiedad value que contiene el valor bajo el operador yield y una propiedad done que indica, 
	con un booleano, si la función generadora ha hecho yield al último valor.
*/

function* fibonacci(){
	//primeros dos numeros de la lista
	let a =0
	let b = 1

	while (true) {
			let f = a;
			a = b;
			b = f + a;
			let reset =	yield f;

			if(reset) a = 0, b = 1; 
			//fibo.next(true) hace que se reinicie, se cumple esta condición
	}

}
const fibo = fibonacci();

/*
	devuelve un objeto con los atributos value y next
*/

/*
	yield puede recibir un valor enviado a traves de next, 
	este valor puede ser un objeto, u otra cosa
*/