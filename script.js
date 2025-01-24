function afficherEtoiles(n) {
	let starStr = '';
	for (let i = 0; i < n; i++)
		starStr += '*';
	console.log(starStr);
}

afficherEtoiles(2);
afficherEtoiles(5);
afficherEtoiles(0);