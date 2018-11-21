//declaración de objetos
const p1 = {
	x: 0,
	y: 4
}

const p2 = {
	x: 3,
	y: 0
}

const distancia = (punto1, punto2) => {
	const x = punto1.x - punto2.x
	const y = punto1.y - punto2.y

	//sqrt raiz cuadrada del objeto Math
	return Math.sqrt(x * x + y * y)
}

console.log(distancia(p1,p2))
console.log(distancia(p1, {x:10 , y:6}))

/************************************************/
/************Agregar metodos a objetos***********/

const p1 = {
	x: 0,
	y: 4,
	moverEnX: function(movX) {this.x += movX}, //this.x hace referencia al atributo x del objeto p1
	moverEnY: function(movY) {this.y += movY}  //this.y hace referencia al atributo y del objeto p1
}

const p2 = {
	x: 3,
	y: 0,
	moverEnX: function(movX) {this.x += movX}, //this.x hace referencia al atributo x del objeto p2
	moverEnY: function(movY) {this.y += movY} //this.y hace referencia al atributo y del objeto p2
}

const distancia = (punto1, punto2) => {
	const x = punto1.x - punto2.x
	const y = punto1.y - punto2.y

	//sqrt raiz cuadrada del objeto Math
	let strResult= Math.sqrt(x * x + y * y).toFixed(2)

	let numResult = Number(strResult);

	return numResult
}

console.log(distancia(p1,p2))
console.log(distancia(p1, {x:10 , y:6}))

p1.moverEnX(10) //p1 = {10, 4}

/**********************************************/

/***********************************************/
/******Utilizando prototipos de JavaScript******/

function Punto(valX, valY){
	this.x = valX
	this.y = valY
}

Punto.prototype.moverEnX = function moverEnX(movX){
	this.x += movX
}

Punto.prototype.moverEnY = function moverEnY(movY){
	this.y += movY
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

Punto.prototype.distancia = function distancia(p){
	const cX = this.x - p.x
	const cY = this.y - p.y 

	let strResult = Math.sqrt(cX * cX + cY * cY).toFixed(2)

	let numResult = Number(strResult);

	return numResult
}

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p2.distancia(p1))
p2.moverEnY(4)
p1.moverEnY(7)
console.log(p1.distancia(p2))

/******************************************************/

/*********************************************************/
/**************Utilizando Object.create*******************/

const Punto = {
	init: function init(valX, valY){
		this.x = valX
		this.y = valY
	},

	moverEnX: function moverEnX(movX){
		this.x += movX
	},

	moverEnY: function moverEnY(movY){
		this.y += movY
	},

	distancia: function distancia(p){
		const cX = this.x - p.x
		const cY = this.x - p.y

		let strResult = Math.sqrt(cX * cX + cY * cY).toFixed(2)

	let numResult = Number(strResult);

	return numResult
	}
}

const p1 = Object.create(Punto)
p1.init(0, 4)

const p2 = Object.create(Punto)
p2.init(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p2.distancia(p1))
p2.moverEnY(4)
p1.moverEnY(7)
console.log(p1.distancia(p2))
/*********************************************************/


/*********************************************************/
/******************Utilizando Class***********************/
// internamente se comportan como un prototipo, se le llama clase
// a nivel de sintaxis para hacerla mas manejable o conocida 

class Punto{
	constructor(valX, valY){
		this.x = valX
		this.y = valY 
	}

	moverEnX(movX){
		this.x += movX
	}

	moverEnY(movY){
		this.y += movY
	}

	distancia(p){
		const cX = this.x - p.x
		const cY = this.x - p.y

		let strResult = Math.sqrt(cX * cX + cY * cY).toFixed(2)

		let numResult = Number(strResult);

		return numResult
	}
}


const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p2.distancia(p1))
p2.moverEnY(4)
p1.moverEnY(7)
console.log(p1.distancia(p2))