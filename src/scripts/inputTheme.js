const themeSwitch = document.getElementById('theme-switch');
const checkbox = document.getElementById('theme-switch__checkbox');

document.addEventListener('DOMContentLoaded', () => {
	const themeSwitch = document.querySelector('#theme-switch__checkbox');
	const root = document.documentElement;

	themeSwitch.addEventListener('click', toggleTheme);

	function toggleTheme() {
		const setTheme = themeSwitch.checked ? 'dark' : 'light';

		root.setAttribute('class', setTheme);
	}
});
document.addEventListener('DOMContentLoaded', () => {
	const themeSwitch = document.querySelector('#checkboxMoon');
	const root = document.documentElement;

	themeSwitch.addEventListener('click', toggleTheme);

	function toggleTheme() {
		const setTheme = themeSwitch.checked ? 'dark' : 'light';

		root.setAttribute('class', setTheme);
	}
});
