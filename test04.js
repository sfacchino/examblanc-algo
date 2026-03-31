function sommePrix(produits) {
    let total = 0;
    for (let i = 0; i < produits.length; i++) {
        total += produits[i].prix;
        
    }
    return total;
}

console.log(sommePrix([
    { nom: "pomme", prix: 2 },
    { nom: "banane", prix: 3 }
])); // 5