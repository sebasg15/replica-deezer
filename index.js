//cancioness
const coldplay = document.querySelector('#paradise');
const blink = document.querySelector('#darkside');
const bandaLarga = document.querySelector('#bandaLarga');
const tame = document.querySelector('#tame');
const strokes = document.querySelector('#strokes');

//nombres de canciones
const todas = ['paradise', 'darkside', 'bfmv', 'borderline', 'reptilia'];

document.querySelectorAll('.play').forEach((ele) => {
	ele.addEventListener('click', (e) => {
		if (e.srcElement.classList[0] === todas[0]) {
			if (coldplay.paused) {
				coldplay.play();
				blink.load();
				bandaLarga.load()
				tame.load()
				strokes.load()
			} else {
				coldplay.load();
			}
		} else if (e.srcElement.classList[0] === todas[1]) {
			if (blink.paused) {
				blink.play();
				coldplay.load();
				bandaLarga.load()
				tame.load()
				strokes.load()
			} else {
				blink.load();
			}
		} else if (e.srcElement.classList[0] === todas[2]) {
			if (bandaLarga.paused) {
				bandaLarga.play();
				blink.load();
				coldplay.load()
				tame.load()
				strokes.load()
			} else {
				bandaLarga.load();
			}
		} else if (e.srcElement.classList[0] === todas[3]) {
			if (tame.paused) {
				tame.play();
				blink.load();
				bandaLarga.load()
				coldplay.load()
				strokes.load()
			} else {
				tame.load();
			}
		} else if (e.srcElement.classList[0] === todas[4]) {
			if (strokes.paused) {
				strokes.play();
				coldplay.load();
				blink.load();
				bandaLarga.load()
				tame.load()
			} else {
				strokes.load();
			}
		}
	});
});

document.querySelectorAll('.play').forEach((el) => {
	el.addEventListener('click', () => {
		el.classList.toggle('fa-pause');
	});
});
//iconos
const paradise = document.querySelector('.paradise');
const darkside = document.querySelector('.darkside');
const bfmv = document.querySelector('.bfmv');
const borderLine = document.querySelector('.borderline');
const reptilia = document.querySelector('.reptilia');

function cambiar(darClick, boton1, boton2, boton3, boton4, boton5) {
	darClick.addEventListener('click', () => {
		boton1.classList.remove('fa-pause');
		boton2.classList.remove('fa-pause');
		boton3.classList.remove('fa-pause');
		boton4.classList.remove('fa-pause');
		// boton5.classList.remove('fa-pause');
	});
}

cambiar(paradise, darkside, bfmv, borderLine, reptilia);
cambiar(darkside, paradise, bfmv, borderLine, reptilia);
cambiar(bfmv, paradise, darkside, borderLine, reptilia);
cambiar(borderLine, paradise, darkside, bfmv, reptilia);
cambiar(reptilia, paradise, darkside, bfmv, borderLine);
