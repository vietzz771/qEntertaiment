function classToggle() {
	const navs = document.querySelectorAll('.nav__items');
	console.log(navs);
	navs.forEach((nav) => nav.classList.toggle('nav__toggleShow'));
}

document.querySelector('.nav__toggle').addEventListener('click', classToggle);
console.log(document.querySelector('.nav__menu'));
