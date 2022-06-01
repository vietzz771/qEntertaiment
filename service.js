// Click loadmore in index page
const seemore = document.querySelector('.see-more');
seemore.addEventListener('click', (e) => {
	const element = document.querySelector(
		'.marketing__content .marketing__content-more'
	);
	element.style.display = 'block';
	e.target.style.display = 'none';
});

const seemore2 = document.querySelector('.see-more2');
seemore2.addEventListener('click', (e) => {
	const element = document.querySelector(
		'.marketing__content .marketing__content-more2'
	);
	element.style.display = 'block';
	e.target.style.display = 'none';
});

const seemore3 = document.querySelector('.see-more3');
seemore3.addEventListener('click', (e) => {
	const element = document.querySelector(
		'.marketing__content .marketing__content-more3'
	);
	element.style.display = 'block';
	e.target.style.display = 'none';
});
