// // Click loadmore in index page
// const loadmore = document.querySelector('#loadmore');
// const fake = document.querySelector('.news__fake');
// const loadlessDIV = document.querySelector('.news__see-less');
// const loadless = document.querySelector('#loadless');
// const loadmoreDIV = document.querySelector('.news__see-more');
// let currentItems = 3;
// loadmore.addEventListener('click', (e) => {
// 	const elementList = [
// 		...document.querySelectorAll('.news__list-items .news__items'),
// 	];
// 	for (let i = currentItems; i < currentItems + 3; i++) {
// 		if (elementList[i]) {
// 			elementList[i].style.display = 'block';
// 		}
// 	}
// 	currentItems += 3;
// 	fake.style.display = 'none';
// 	// Load more button will be hidden after list fully loaded
// 	if (currentItems >= elementList.length) {
// 		loadmoreDIV.style.display = 'none';
// 	}
// 	loadlessDIV.style.display = 'flex';
// });
// let currentLess = 6;
// loadless.addEventListener('click', (e) => {
// 	const elementListLess = [
// 		...document.querySelectorAll('.news__list-items .news__items'),
// 	];
// 	for (let i = currentLess; i < currentLess + 6; i++) {
// 		if (elementListLess[i]) {
// 			elementListLess[i].style.display = 'none';
// 		}
// 	}
// 	currentLess -= 3;
// 	fake.style.display = 'grid';
// 	loadlessDIV.style.display = 'none';
// 	loadmoreDIV.style.display = 'flex';
// 	console.log(loadmoreDIV);
// });
$('.news__list-items').readmore({
	speed: 1000, //Açılma Hızı
	collapsedHeight: 570, // 100px sonra yazının kesileceğini belirtir.
	moreLink:
		'<div class="news__see-more"><a href="#"><i class="bx bxs-chevron-down"></i></a></div>', // açma linki yazısı
	lessLink:
		'<div class="news__see-less"><a href="#news"><i class="bx bxs-chevron-up"></i></a></div>', // kapatma linki yazısı
});
