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

function créerLigneDroite(n) {
	let starStr = '\\';
	if (n > 0) {
		starStr = '*';
		for (let i = 1; i < n; i++)
			starStr += '*';
		starStr += '\\';
	}
	return (starStr);
}

function afficherTriangleDroite(n) {
	let lineStr;
	for (let i = 0; i < n; i++) {
		lineStr = créerLigneDroite(i);
		console.log(lineStr);
	}
}

afficherTriangleDroite(5);
console.log(' ');
afficherTriangleDroite(3);
console.log(' ');
afficherTriangleDroite(2);
console.log(' ');
afficherTriangleDroite(0);
console.log(' ');
afficherTriangleDroite(9);
console.log(' ');
afficherTriangleDroite(10);
console.log(' ');
afficherTriangleDroite(11);
console.log(' ');
afficherTriangleDroite(8);