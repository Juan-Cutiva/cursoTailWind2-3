const themeSwitch = document.getElementById('theme-switch');
const checkbox = document.getElementById('theme-switch__checkbox');

themeSwitch.addEventListener('change', prueba);

function prueba() {
	if (checkbox.checked == true) {
		console.log('Prendido');
	} else if (checkbox.checked == false) {
		console.log('Apagado');
	}
}