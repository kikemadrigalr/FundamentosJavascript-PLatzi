//9-1 porque el conteo de mes comienza en cero
const nacimiento = new Date(1989, 9-1, 7)

//dia de hoy
const hoy = new Date()

//diferencia entre hoy y nacimiento en milisegundos
const tiempo = hoy - nacimiento

//tiempo en segundos
const tiempoSegundos= tiempo/1000

//tiempo en minutos
const tiempoMin = tiempoSegundos / 60

//tiempo en horas
const tiempoHoras = tiempoMin / 60

//getFullYear devuelve el año de una fecha
//getMonth devuelve el mes de una fecha
//getDate devuelve el dia de una fecha
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado'
]

const meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'
]

console.log(`Mi fecha de nacimiento es: ${nacimiento.getDate()}, ${meses[nacimiento.getMonth()]}, ${nacimiento.getFullYear()} ` )
console.log(`Nací un día ${diasSemana[nacimiento.getDay()]}`)
console.log(`Mi Proximo Cumpleaños es ${diasSemana[proximoCumple.getDay()]} ${proximoCumple.getDate()} ${meses[proximoCumple.getMonth()]} ${proximoCumple.getFullYear()}`)

console.log(diasSemana[proximoCumple.getDay()])
