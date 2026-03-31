function doublerTableau(tab) {
    let newtab = [];
    for (let i = 0; i < tab.length; i++) {
        newtab.push(tab[i] * 2);
    }
    return newtab;
}

console.log(doublerTableau([1, 2, 3])); // [2, 4, 6]
console.log(doublerTableau([5, 10])); // [10, 20]