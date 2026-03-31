function longueursMots(mots) {
    let newtab = [];
	for (let i = 0; i < mots.length; i++) {
        newtab.push(mots[i].length);
    }
    return newtab
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
