//manejo ciclos for
// math.floor//rendondea hacia abajo 3.9 = 3
// math.ceil//redondea para arriba 3.1 = 4
// math.round// redondea dependiendo 3.1 = 3, 3.5 = 4 (Entero mas cercano)

const nombre = 'Carlos'

const dias = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
	'Domingo'
]

function correr(){
	const min = 5
	const max = 10

	//Math.floor devuelve el valor mas bajo posible
	return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0
const length = dias.length

for (let i = 0; i < length; i++) 
{
	const kms = correr()
	totalKms += kms

	console.log(`El día ${dias[i]} ${nombre} corrío ${kms} Kms`)	
};

const promedioKms = totalKms / length

//toFixed toma el numero de decimales que se le pasa por parametros
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} Kms`)