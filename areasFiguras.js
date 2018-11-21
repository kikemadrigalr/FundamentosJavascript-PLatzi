let base = 5
let altura = 7
console.log(`El area de un triangulo de base ${base} y altura ${altura} es: ${triangleArea(base,altura)} ` )

function triangleArea(base, altura){
	return base * altura / 2
}

//misma funcion usando arrow function
let base = 5
let altura = 7
let triangleArea = (base, altura) => base * altura / 2
console.log(`El area de un triangulo de base ${base} y altura ${altura} es: ${triangleArea(base,altura)} ` )

let lado = 5
function cuadradoArea(lado){
	return lado*lado
}

console.log(`El are de una cuadrado de lado ${lado} es: ${cuadradoArea(lado)}`)


let radio = 2
function circuloArea(radio){
	return Math.PI * Math.pow(radio,2)  
}

console.log(`El area del circulo de radio ${radio} es : ${circuloArea(radio)}`)