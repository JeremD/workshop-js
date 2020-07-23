console.log("\n02 - Tableaux");

var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

// Affichage des villes
villes.forEach(ville => console.log(ville));

// Vérification si les villes contiennent tous la lettre 'a'
var lettreADansToutesLesVilles = villes.every(ville => ville.includes("a"));
console.log("lettreADansToutesLesVilles =", lettreADansToutesLesVilles);

// Vérification si une ville contient un '-'
var auMoinsUneVilleAvecUnTiret = villes.some(ville => ville.includes("-"));
console.log("auMoinsUneVilleAvecUnTiret =", auMoinsUneVilleAvecUnTiret);

// Filtrer les villes sans de tiret ni d'espace
var villesSansTiretSansEspace = villes.filter(ville => !ville.includes("-") && !ville.includes(" "));
console.log("villesSansTiretSansEspace =", villesSansTiretSansEspace);

// Villes finissant par 's', et conversion en majuscule
var villesMajusculeSeTerminantParS = villes
    .filter(ville => ville.endsWith("s"))
    .map(ville => ville.toUpperCase());
console.log("villesMajusculeSeTerminantParS =", villesMajusculeSeTerminantParS)