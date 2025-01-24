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
	for (let i = 1; i < espacement; i++)
		line += ' '
	return line;
}

function putRandomDecorX(line) {
    return line.split('').map(element => {
        if (Math.random() > 0.9 && element == '*') {
            return 'x';
        }
        return element;
    }).join('');
}

function putRandomDecorO(line) {
    return line.split('').map(element => {
        if (Math.random() > 0.9 && element == '*') {
            return 'o';
        }
        return element;
    }).join('');
}

function putRandomDecor(line) {
	line = putRandomDecorX(line);
	line = putRandomDecorO(line);
	return (line);
}

function afficherEtage(hauteur, pointe_offset, espacement) {
	if (pointe_offset == 0)
		console.log(créerPremièreLigne(hauteur, espacement));
	let line;
	for (let i = 1 + pointe_offset ; i <= hauteur + pointe_offset; i++) {
		line = ajouterEspaces(espacement) + créerLigneGauche(i, hauteur + pointe_offset) + '|' + créerLigneDroite(i - 1);
		line = putRandomDecor(line);
		console.log(line);
	}
}

function ajouterDièses(taille) {
	let line = ''
	for (let i = 0; i < taille; i++)
		line += '#'
	return line;
}

function afficherTronc(largeurBase) {
	const largeurTronc = 3;
	let espacesTronc = Math.floor((largeurBase - largeurTronc) / 2) + 1;
	let line;
	for (let i = 0; i < largeurTronc; i++) {
		line = ajouterEspaces(espacesTronc) + ajouterDièses(largeurTronc);
		console.log(line);
	}
}

function afficherSapin(étages, hauteurEtages) {
	for (let i = 0; i < étages; i++) {
		afficherEtage(hauteurEtages, i, étages - i);
	}
	let largeurBase = (hauteurEtages + étages - 1) * 2 + 1;
	afficherTronc(largeurBase);
	for (let i = 0; i < 5; i++)
		console.log(`\n`);
}

afficherSapin(0, 0);
afficherSapin(1, 1);
afficherSapin(2, 2);
afficherSapin(3, 3);
afficherSapin(12, 12);
afficherSapin(13, 13);
afficherSapin(3, 7);
afficherSapin(7, 3);
afficherSapin(4, 7);
afficherSapin(7, 4);
afficherSapin(7, 7);
afficherSapin(6, 2);
afficherSapin(6, 8);
afficherSapin(10, 2);
afficherSapin(1, 10);
afficherSapin(6, 2);