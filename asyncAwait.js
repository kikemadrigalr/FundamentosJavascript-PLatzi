/*******************asyncAwait.js*******************/

function handleError(error){
	console.log('Request Failed: ${error}')
}

/*para metodos asincronos con asyn-await */
/*se define la función, con la palabra async */
async function getLuke(){

	try
	{
		/*se asigna a una constante lo que retorna la funcion fetch*/
		/*Como es una promesa (metodo asincrono) se antepone la palabra await*/
		/*Asi JS espera que la promesa se resuelva y guarda el resultado en la variable*/
		const response = await fetch('https://swapi.co/api/people/1/')

		/*como responseviene de una promesa, antes de pasarla a json se antepone await*/
		const luke = await response.json()

		/*obtener el mundo*/
		const responseHomeworld = await fetch(luke.homeworld)
		luke.homeworld = await responseHomeworld.json()
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	}
	catch (error)
	{
		handleError(error)
	}
}

/*******************************************************************************************************/
/*************************************Codigo transpilado con babel*************************************/

'use strict';

var getLuke = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var response, luke, responseHomeworld;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return fetch('https://swapi.co/api/people/1/');

					case 3:
						response = _context.sent;
						_context.next = 6;
						return response.json();

					case 6:
						luke = _context.sent;
						_context.next = 9;
						return fetch(luke.homeworld);

					case 9:
						responseHomeworld = _context.sent;
						_context.next = 12;
						return responseHomeworld.json();

					case 12:
						luke.homeworld = _context.sent;
						_context.next = 18;
						break;

					case 15:
						_context.prev = 15;
						_context.t0 = _context['catch'](0);

						handleError(_context.t0);

					case 18:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 15]]);
	}));

	return function getLuke() {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function handleError(error) {
	console.log('Request Failed: ' + error);
}

getLuke()

