// TOP BUTTON

window.addEventListener('scroll', (event) => {
	let scrollY = this.scrollY;
	if (scrollY == '0') {
		document.getElementById('topbtn').style.visibility = 'hidden';
	} else {
		document.getElementById('topbtn').style.visibility = 'visible';
	}
});