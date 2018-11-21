// Metodos utiles.
// str.toUpperCase() // convierte el texto a mayúscula
// str.toLowerCase() // convierte el texto en minúsculas
// str.endsWith(\'\') // evalúa si el string termina con un texto
// str.startsWith(\'\') // evalúa si un string comienza con un texto
// str.slice(inicio, final) // partir un carácter
// str.length // cuantos caracteres tiene el string


// Podemos unir dos string utilizando el operador +, por ejemplo:

// const palabra = \'Pla\' + \'tzi\' 

// palabra == \'Platzi\'
// Convertir a arrays
// Podemos convertir los arrays a caracteres con el metodo split diciéndole por cual carácter dividirlo, por ejemplo

// let str = \'hola\'

// str.split(\'\') == [\'h\',\'o\',\'l\',\'a\']
// También podemos unir un array y convertirlo en un array usando el metodo join

// let arr = [\'h\',\'o\',\'l\',\'a\']

// arr.join(\'\') == \'hola\'

function platzom(str){
	let translation = str

	/*si la palabra orignal es un palindromo,
	ninguna regla anterior cuenta y se devuelve
	la misma palabra intercalando mayusculas y minusculas*/

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let newTranslation = ''
		let capitalize = true

	 	for(let i = 0; i < length; i++) 
	 	{
			const letra = str.charAt(i)
			newTranslation += capitalize ? letra.toUpperCase() : letra.toLowerCase() 
			capitalize = !capitalize
		};

		return newTranslation
	}

	if(str == reverse(str))
	{
		return minMay(str)
	}

	//si la palabra termina en AR se le quitan esos caracteres
	//toLowerCase convierte en minuscula el string
	//endsWith verifica si el string termina con los caracteres que le son enviados
	//slice corta el string contando desde el primer parametro y -X anter del final 
	if(str.toLowerCase().endsWith('ar'))
	{
		translation = str.slice(0, -2)
	};

	//si la palabra incia con Z se le añade PE al final

	//startsWith evalua si el string termina con el caracter que se le pasa por parametro
	if (str.toLowerCase(str).startsWith('z')) 
	{
		//translation = translation + 'pe'
		translation += 'pe'
	};

	/*si la palabra traducida tiene 10 o mas letras, 
	se debe partir a la mitad y unir con un guión*/

	//.length cuenta la longitud del string
	length = translation.length
	if (length >= 10) 
	{
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))

		translation = `${firstHalf}-${secondHalf}`
	};

	

	return translation
}

console.log(platzom('programar')) //program
console.log(platzom('zorro')) //zorrope
console.log(platzom('zarpar')) //zarppe
console.log(platzom('Zurcar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))
console.log(platzom('arepera'))