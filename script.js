function afficherEtoiles(n) {
	let starStr = '';
	for (let i = 0; i < n; i++)
		starStr += '*';
	console.log(starStr);
}

function afficherRectangle(hauteur, largeur) {
	for (let i = 0; i < hauteur; i++)
		afficherEtoiles(largeur);
}

afficherRectangle(5, 5);
afficherRectangle(2, 5);
afficherRectangle(7, 3);