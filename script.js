function créerLigneDroite(longueur) {
	let starStr = '\\';
	if (longueur > 0) {
		starStr = '*';
		for (let i = 1; i < longueur; i++)
			starStr += '*';
		starStr += '\\';
	}
	return (starStr);
}

function créerLigneGauche(longueurSapin, longueurTotale) {
	let longueurEspace = longueurTotale - longueurSapin;
	let line;
	if (longueurSapin == longueurTotale)
		line = '/';
	else
		line = ' ';
	for (let i = 1; i < longueurTotale; i++) {
		if (i < longueurEspace)
			line += ' ';
		else if (i == longueurEspace)
			line += '/';
		else
			line += '*'		
	}
	return (line);
}

function créerPremièreLigne(hauteur) {
	let line = ' '
	for ( ; hauteur > 1; hauteur--)
		line += ' ';
	line += '+';
	return (line);
}

function afficherPointeSapin(hauteur) {
	console.log(créerPremièreLigne(hauteur));
	let line;
	for (let i = 1; i <= hauteur; i++) {
		line = créerLigneGauche(i, hauteur) + '|' + créerLigneDroite(i - 1);
		console.log(line);
	}
}

afficherPointeSapin(5);