const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameCarlos = 'Carlos'
let ageCarlos = 28

const nameJesus = 'Jesus'
let ageJesus = 12

function canWatchStarWars7(name, age, isWithAdult = false){

	if(age >= pgStarWars7)
	{
		alert(`${name} Puede pasar a ver ${starWars7}`)
	}
	else if(isWithAdult)
	{
		alert(`${name} Puede pasar a ver ${starWars7}, aunque su Edad es ${age}, se encuetra acompañado de un adulto`)
	}
	else
	{
		alert(`${name} NO Puede pasar a ver ${starWars7}, Tiene ${age} años y necesita tener ${pgStarWars7}`)
	}
}

canWatchStarWars7(nameCarlos, ageCarlos)
canWatchStarWars7(nameJesus, ageJesus, true)

//usando arrow function
let canWatchStarWars7 = (name, age, isWithAdult = false) => {
	if(age >= pgStarWars7)
	{
		alert(`${name} Puede pasar a ver ${starWars7}`)
	}
	else if(isWithAdult)
	{
		alert(`${name} Puede pasar a ver ${starWars7}, aunque su Edad es ${age}, se encuetra acompañado de un adulto`)
	}
	else
	{
		alert(`${name} NO Puede pasar a ver ${starWars7}, Tiene ${age} años y necesita tener ${pgStarWars7}`)
	}	
}