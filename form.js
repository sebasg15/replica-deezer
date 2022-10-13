const login = document.querySelector('.login');
const form = document.querySelector('.formulario');
const close = document.querySelector('.close');
const body = document.querySelector('main');
const header = document.querySelector('header');

login.addEventListener('click', () => {
	form.style.display = 'flex';
	body.style.filter = 'blur(10px)';
	header.style.filter = 'blur(10px)';
});
close.addEventListener('click', () => {
	form.style.display = 'none';
	body.style.filter = 'none';
	header.style.filter = 'none';
});

function media(x) {
	// media query event handler
	if (x.matches) {
		login.style.display = "none"
	} else {
		body.style.background = '';
	}
}
const mq = window.matchMedia('(max-width: 800px)');
media(mq);

mq.addListener(media);
