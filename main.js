function classToggle() {
	const navs = document.querySelectorAll('.nav__items');
	navs.forEach((nav) => nav.classList.toggle('nav__toggleShow'));
}
document.querySelector('.nav__toggle').addEventListener('click', classToggle);
