function compterVoyelles(mot) {
    let total = 0;
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < mot.length; i++) {
        if (voyelles.includes(mot[i])) {
            total++
        }
    }
    return total;
}

console.log(compterVoyelles("chat")); // Résultat attendu : 1
console.log(compterVoyelles("elephant")); // Résultat attendu : 3