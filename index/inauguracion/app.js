class Celular {
	constructor(celColor, celRes, celPeso, celCam, celRam){
		this.color = celColor;
		this.res = celRes;
		this.peso = celPeso;
		this.cam = celCam;
		this.ram = celRam;
		this.encendido = false
	};
	presentacion(nombre){
		window.alert(
	`${nombre}:
	Color: ${this.color}
	Peso: ${this.peso}
	Resolucion de pantalla: ${this.res}
	Camara: ${this.cam}
	Memoria Ram: ${this.ram}`
		);
	};
	prender(){
		if (this.encendido == false){
		window.alert(`Buenos dias usuario, el celular esta encendido y listo para usarse`);
		this.encendido = true;
		}
		else if (this.encendido == true){
			window.alert(`*se apaga la pantalla*`);
			this.encendido = false;
		};
	};
	reiniciar(){
		if (this.encendido == true){
			window.alert(`Reiniciando celular... `);
			window.alert(`Reinicio completo`);
		}
		else if (this.encendido == false){
			window.alert(`El telefono esta apagado`)
		};
	};
	foto(){
		if (this.encendido == false){
			window.alert(`El telefono esta apagado`)
		}
		else if (this.encendido == true){
		window.alert(`Se ha tomado una foto`);
		};
	};
	grabar(){
		if (this.encendido == false){
			window.alert(`El telefono esta apagado`)
		}
		else if (this.encendido == true){
		window.alert(`Grabando video (Pulse "OK" para acabar la grabacion)`);
		window.alert(`Video guardado en el dispositivo`);
		};
	};

};
class CelularDeAltaGama extends Celular{
	constructor(celColor, celRes, celPeso, celCam, celRam, celExtCam){
		super (celColor, celRes, celPeso, celCam, celRam);
		this.encendido = false;
		this.extCam = celExtCam; 
	};
	camaralenta(){
		if (this.encendido == false){
			window.alert(`El telefono esta apagado.`)
		}
		else{
		window.alert(`Grabando video super lento (Pulse "OK" para acabar la grabacion)`);
		window.alert(`Video super lento guardado en el dispositivo`);
		};
	};
	reconocimientofacial(){
		if (this.encendido == false){
			window.alert(`El telefono esta apagado`)
		}
		else {
		window.alert(`Cara reconocida, usted es una persona apuesta.`)
		};
	};
	ExtraCam(){
		if (celExtCam == 1){
			window.alert(`Este celular tiene 1 camara extra`)
		}
		else {
			window.alert(`Este celular tiene ${this.celExtCam} camaras extra`)
		};
	};
};
const samsung = new Celular('blanco', '2300x1000', '15g','18mpx','3gb');
const alcatel = new Celular('negro','1800x800','20g','16mpx','512mb');
const xiaomi = new Celular('azul','1900x850','20g','20mpx','4gb');
const samsung2 = new CelularDeAltaGama('blanco', '2700x1700', '25g','48mpx','30gb', 3);
const alcatel2 = new CelularDeAltaGama('negro','1900x900','25g','20mpx','1gb', 1);
const xiaomi2 = new CelularDeAltaGama('azul','2600x1050','25g','40mpx','20gb', 2);
let a = false;
while (a == false){
	let dial = prompt(
`Buenos dias, bienvenido a Smartphoneshop.
Actualmente poseemos estos 3 celulares:
1. Samsung A20
2. Xiaomi Redmi note 9
3. Alatel IdealXTRA
4. Acceder a la seccion de celulares de alta gama
Cual desea ver? (Presione el numero correspondiente o 5 para salir y pulse "OK̉̉")`);

	let accion = (m, n) =>{
		while (true){
			let b = prompt(
`Que desea realizar con el celular?
1. Prender
2. reiniciar
3. Tomar una foto
4. Grabar video
5. Comprar el celular
6. Nada
(Escriba el numero correspondiente y pulse ok)`);
			if (b == 1){
				m.prender();
			}
			else if (b == 2){
				m.reiniciar();
			}
			else if (b == 3){
				m.foto();
			}
			else if (b == 4){
				m.grabar();
			}
			else if (b == 5){
				window.alert(`Ha comprado el celular "${n}", no se arrepentira de su compra.`);
				a = true;
				break;
			}
			else {
				break;
			};
		};
		m.encendido = false;
	};

	let accion2 = (m, n) =>{
		while (true){
			let b = prompt(
`Que desea realizar con el celular?
1. Prender
2. reiniciar
3. Tomar una foto
4. Grabar video
5. Tomar video Super lento
6. Usar el Reconocimiento Facial
7. Comprar el celular
8. Nada
(Escriba el numero correspondiente y pulse ok)`);
			if (b == 1){
				m.prender();
			}
			else if (b == 2){
				m.reiniciar();
			}
			else if (b == 3){
				m.foto();
			}
			else if (b == 4){
				m.grabar();
			}
			else if (b == 5){
				m.camaralenta()
			}
			else if (b == 6){
				m.reconocimientofacial()
			}
			else if (b == 7){
				window.alert(`Ha comprado el celular "${n}", no se arrepentira de su compra.`);
				a = true;
				break;
			}
			else {
				break;
			};
		};
		m.encendido = false;
	};

	if (dial == 1){
		samsung.presentacion('Samsung A20');
		accion(samsung, 'Samsung A20');
	}
	else if (dial == 2){
		xiaomi.presentacion('Xiaomi Redmi note 9');
		accion(xiaomi, 'Xiaomi Redmi note 9');
	}
	else if (dial == 3){
		alcatel.presentacion('Alcatel IdealXTRA');
		accion(alcatel, 'Alcatel IdealXTRA');
	}
	else if (dial == 4){
		let f = true
		while (f == true){
			let d = prompt(`Tenemos tres celulares en la seccion de alta gama\r1. Xiaomi Redmi Note 40\r2. Samsung Universe 3\r3. Alcatel 2\r(seleccione el numero correspondiente para ver sus caracteristicas o 4 para salir.)`);
			if (d == 1){
				xiaomi2.presentacion(`Xiaomi Redmi Note 40`)
				accion2(xiaomi2, `Xiaomi Redmi note 40`)
			}
			else if (d == 2){
				samsung2.presentacion(`Samsung Universe 3`)
				accion2(samsung2, `Samsung Universe 3`)
			}
			else if (d == 3){
				alcatel2.presentacion(`Alcatel 2`);
				accion2(alcatel2, `Alcatel 2` )
			}
			else{
				f = false
			};
		};
	};
};
