/************callBacks.js***************/

setTimeout(function callBack(){
	console.log('Ya pasaron 3 segundos')
},3000)

console.log('Hola')

/****************************************************/
setTimeout(function callBack(){
	console.log('A')
}, 1000)

for (let i = 0; i < 9999999999999; i++);

console.log('B')

//el tiempo que se le da al setTimeout es un tiempo minimo
//JavaScript puede o no respetarlo dependiendo de 
//lo que haya en espera en la coja de ejecución

//las operaciones sincronas deben redicirse al minimo posible
//y las operaciones asincronas setTimeout, lectura de archivos, 
//request externos deben ser delegados a alguna funcion asincrona
//para no trabar la cola de ejecución