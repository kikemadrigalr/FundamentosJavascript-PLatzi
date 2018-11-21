/*****call y apply*****/

/*
Con call y apply podemos definir el valor de this y ejecutar la función
*/


/*
this.nombre , this.apellido en el contexto de esta funcion 
no esta definido, por lo tanto hace referencia al 
objeto global window
*/

function saludar(veces){
	for (let i = 0; i < veces; i++)
	{
	console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

saludar(3)

/*
aqui se definen this.nombre y 
this.apellido en el objeto global window, 
por lo tanto se definen para el contexto de la funcion
*/

window.nombre = "Carlos"
window.apellido = "Madrigal"

/**********************************************/
/****************Usando call****************/

const carlos = {
	nombre: 'Carlos',
	apellido: 'Madrigal'
}

function saludar(veces){
	for (let i = 0; i < veces; i++)
	{
	console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

saludar.call(carlos, 3)

/*
con call se pasa por arametro el contexto (objeto carlos) y la lista de parametros para la funcion
*/


/***************Apply*******************/
/*
hace lo mismo que call, la diferencia esta en que 
apply pasa el contexto, luego los parametro como un array

si se tiene la lista de parametros en un array,
y se se usa el metodo call, se utiliza en el spread operator
(...) en el llamado a la funcion

const params = [3, true]
saludar.call(carlos, ...params) 
*/

const carlos = {
	nombre: 'Carlos',
	apellido: 'Madrigal'
}

function saludar(veces, uppercase){
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str

	for (let i = 0; i < veces; i++)
	{
	console.log(str)
	}
}

saludar.apply(carlos, [3, true])