console.log("\n01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

/**
 * Additionner deux nombres
 *
 * @param nb1
 * @param nb2
 * @return addition
 */
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

// Addition
var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 =", resultat1);

// Référence à la fonction additionner
var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 =", resultat2);

// Multiplier deux nombres
var multiplication = (nb1, nb2) => (nb1 * nb2);

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
            break;
        case "Multiplication":
            operation = multiplication;
            break;
        default:
            throw new Error("InvalidArgumentException: Opération invalide !");
    }
    console.log(arguments[0] + "(" + nb1 + "," + nb2 + ") =", arguments[1](nb1, nb2));
}

// Invocation d'une addition
afficherOperation("Somme", somme, 20, 40);

// Invocation d'une mulitplication
afficherOperation("Multiplication", multiplication, 10, 20);

// Invocation d'une soustraction (avec fonction annonyme)
afficherOperation("Soustraction", (nb1, nb2) => nb1 - nb2, 15, 5);