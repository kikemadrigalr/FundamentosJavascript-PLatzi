/*
La función bind
El método bind devuelve otra función que asigna el this a lo que nosotros le pasamos como parametro
*/

class Toggable{
	constructor(el){
		//inicializar estado interno
		this.el = el
		this.el.innerHTML = 'Off' //escribir en el elemento html
		this.activated = false

		//cuadno sucede el evento click se le pasa una funcion callback
		this.el.addEventListener('click', this.onClick.bind(this))
		//this.onClick.bind(this) se define el contexto para this.onclick que seria el this.el
	}

	onClick(ev){
		//cambiar estado interno
		this.activated = !this.activated
		
		//llamar toggleText
		this.toggleText()

		console.log(onClick)
	}

	toggleText(){
		//cambiar Texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)

/*********************************************************************************/
/********************************************************************************/
/*
El metodo bind funciona tambien para setear parametros
*/

function saludar(nombre, apellido){
	console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Carlos", "Madrigal")

//el contexto se pasa null, ya que no se usa en la funcion
//se va a setear el primer para metro de la funcíón
//el primer parametro sera siempre lo que pase (Carlos)
const saludarCarlosss = saludar.bind(null, "Carlos")

//devuelve otra funcion con el primer parametro seteado 