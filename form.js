const login = document.querySelector('.login');
const form = document.querySelector('.formulario');
const close = document.querySelector('.close');
const main = document.querySelector('main');
const header = document.querySelector('header');
const offer = document.querySelector('.offer');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const lresponsive = document.querySelector('.lresponsive');

login.addEventListener('click', () => {
	form.style.display = 'flex';
	main.style.filter = 'blur(10px)';
	header.style.filter = 'blur(10px)';
});
close.addEventListener('click', () => {
	form.style.display = 'none';
	main.style.filter = 'none';
	header.style.filter = 'none';
});

function media(x) {
	// media query event handler
	if (x.matches) {
		login.style.display = 'none';
		offer.style.display = 'none';
		const nuevo = document.createElement('div');
		nuevo.classList.add('menu');
		nuevo.innerHTML = '<i class="fa-solid fa-bars"></i>';
		header.appendChild(nuevo);
	} else {
		return;
	}
}

const mq = window.matchMedia('(max-width: 800px)');
media(mq);

mq.addListener(media);
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
	lresponsive.style.height = '100vh';
	lresponsive.style.display = 'flex';
	function borrar(ele, ver) {
		document.querySelectorAll(ele + ' > *').forEach((e) => {
			e.style.display = ver;
		});
	}

	borrar(main.tagName, 'none');
	borrar(footer.tagName, 'none');
	borrar(header.tagName, 'none');

	const lista = document.createElement('ul');
	lista.classList.add('container-list');
	lresponsive.appendChild(lista);

	const listaInterna = document.querySelector('.lresponsive > ul');

	listaInterna.innerHTML = `
	<div>
	<img src="./img/logo.png" class="logo"/>
	<i class="x fa-solid fa-xmark"></i>
	</div>
	<li class="responsive-login">Log in</li>
	<li>Sing up</li>
	<li>Download the app</li>
	<li>Plans</li>
	<li>Explore channels</li>
	</div>`;
	const x = document.querySelector('.x');
	x.addEventListener('click', () => {
		lresponsive.innerHTML = '';
		lresponsive.style.display = 'none';
		borrar(header.tagName, 'flex');
		borrar(main.tagName, 'flex');
		borrar(footer.tagName, 'flex');
	});
	const rlogin = document.querySelector('.responsive-login');
	rlogin.addEventListener('click', () => {
		form.style.display = 'flex';
		main.style.filter = 'blur(10px)';
		header.style.filter = 'blur(10px)';
	});
});
