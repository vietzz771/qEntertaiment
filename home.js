// Click loadmore in index page
const loadmore = document.querySelector('#loadmore');
const fake = document.querySelector('.news__fake');
let currentItems = 3;
loadmore.addEventListener('click', (e) => {
	const elementList = [
		...document.querySelectorAll('.news__list-items .news__items'),
	];
	for (let i = currentItems; i < currentItems + 3; i++) {
		if (elementList[i]) {
			elementList[i].style.display = 'block';
		}
	}
	currentItems += 3;
	fake.style.display = 'none';
	// Load more button will be hidden after list fully loaded
	if (currentItems >= elementList.length) {
		e.target.style.display = 'none';
	}
});
