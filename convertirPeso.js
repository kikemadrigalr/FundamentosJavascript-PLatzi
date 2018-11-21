/*
convertir libras a kilogramos kg = lb/2.2046
Convertir kilogramos a libras lb = kg * 2.2046
*/

const diferencia = 2.2046;

function librasKilogramos(lib){
	let kilos;

	kilos = lib / diferencia;
	return kilos; 
};

function kilogramosLibras(kg){
	let libras;

	libras = kg * diferencia;
	return libras;
};

kilogramosLibras(20); // 44.092
librasKilogramos(20); // 9.071940488070398

