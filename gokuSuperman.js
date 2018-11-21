//ciclos while
let vidaGoku = 100
let vidaSuperman = 100

const minPower = 5
const maxPower = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

/*
function ambosSiguenVivos(){
	return vidaGoku > 0 && vidaSuperman > 0
}
*/

const calcularGolpe = () => Math.round(Math.random() * (maxPower - minPower) + minPower)

const gokuSigueVivo = () => vidaGoku > 0

let round = 0

while(ambosSiguenVivos())
{
	round++
	console.log(`Round ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if (golpeGoku > golpeSuperman) 
	{
		console.log(`GOKU ATACA a Superman con un golde de ${golpeGoku}`)
		vidaSuperman -= golpeGoku
		console.log(`Superman Queda con ${vidaSuperman} de vida`)
	}
	else
	{
		console.log(`SUPERMAN ATACA a Goku con un golde de ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Goku Queda con ${vidaGoku} de vida`)	
	}
}

if(gokuSigueVivo())
{
	console.log(`Goku Gana la pelea, en el round ${round}, su vida es de: ${vidaGoku}`)
}
else
{
	console.log(`Superman Gana la pelea, en el round ${round}, su vida es de: ${vidaSuperman}`)	
}

