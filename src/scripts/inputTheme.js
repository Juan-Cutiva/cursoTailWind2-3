const themeSwitch = document.getElementById('theme-switch');
const checkbox = document.getElementById('theme-switch__checkbox');

themeSwitch.addEventListener('change', prueba);


document.addEventListener('DOMContentLoaded', () => {
	const themeSwitch = document.querySelector('#theme-switch__checkbox');
	const root = document.documentElement

	themeSwitch.addEventListener('click', toggleTheme)

	function toggleTheme(){
		const setTheme = themeSwitch.checked ? 'dark':'light'

		root.setAttribute('class', setTheme)
	}

})

function prueba() {
	if (checkbox.checked == true) {
		console.log('Prendido');
	} else if (checkbox.checked == false) {
		console.log('Apagado');
	}
}