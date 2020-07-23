console.log("\n01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

/**
 * Addtionner deux nombres
 *
 * @param nb1
 * @param nb2
 * @returns addition
 */
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

/**
 * Soustraire deux nombres
 *
 * @param nb1
 * @param nb2
 * @returns soustraction
 */
function soustraire(nb1, nb2) {
    return nb1 - nb2;
}

// Addition
var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 =", resultat1);

// Référence à la fonction additionner
var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 =", resultat2);

// Multiplier deux nombres
var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
};

// Multiplication
var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 =", resultat3);

// Fonction du premier ordre
var afficherOperation = function (nomOperation, operation, nb1, nb2) {

    switch (nomOperation) {
        case "Somme":
            operation = additionner;
            break;
        case "Soustraction":
            operation = soustraire;
            break;
        case "Multiplication":
            operation = multiplication;
            break;
        default:
            throw new Error("InvalidArgumentException - Opération invalide!");
    }
    console.log(arguments[0] + "(" + arguments[2] + "," + arguments[3] + ") = " + arguments[1](arguments[2], arguments[3]));
}

// Invocation d'une addition
afficherOperation("Somme", somme, 20, 40);

// Invocation d'une mulitplication
afficherOperation("Multiplication", multiplication, 10, 20);

// Invocation d'une soustraction
afficherOperation("Soustraction", soustraire, 15, 5);