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

function créerPremièreLigne(hauteur, espacement) {
	let line = ajouterEspaces(espacement) + ' ';
	for ( ; hauteur > 1; hauteur--)
		line += ' ';
	line += '+';
	return (line);
}

function ajouterEspaces(espacement) {
	let line = ''
	for (let i = 0; i < espacement; i++)
		line += ' '
	return line;
}

function afficherEtage(hauteur, pointe_offset, espacement) {
	if (pointe_offset == 0)
		console.log(créerPremièreLigne(hauteur, espacement));
	let line;
	for (let i = 1 + pointe_offset ; i <= hauteur + pointe_offset; i++) {
		line = ajouterEspaces(espacement) + créerLigneGauche(i, hauteur + pointe_offset) + '|' + créerLigneDroite(i - 1);
		console.log(line);
	}
}

function afficherSapin(étages, hauteurEtages) {
	for (let i = 0; i < étages; i++) {
		afficherEtage(hauteurEtages, i, hauteurEtages - i);
	}
}

afficherSapin(3, 3);