// Display nav toggle
function classToggle() {
	const navs = document.querySelectorAll('.nav__items');
	navs.forEach((nav) => nav.classList.toggle('nav__toggleShow'));
}
document.querySelector('.nav__toggle').addEventListener('click', classToggle);

// Remove nav menu when click nav items
const navLink = document.querySelectorAll('.nav__items');
function linkAction() {
	// const navMenu = document.querySelectorAll('nav__items');
	navLink.forEach((nav) => nav.classList.remove('nav__toggleShow'));
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
