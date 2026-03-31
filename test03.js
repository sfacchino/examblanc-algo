function motsCourts(mots) {
    let newtab = [];
    for (let i = 0; i < mots.length; i++) {
        if (mots[i].length <= 4) {
            newtab.push(mots[i]);
        }
    }
    return newtab;
}

console.log(motsCourts(["chat", "éléphant", "lion"])); // ["chat", "lion"]
console.log(motsCourts(["ordi", "clavier", "souris"])); // ["ordi"]