console.log("\n03 - POO");

/**
 * Créer une personne
 * 
 * @param {String} nom 
 * @param {String} prenom 
 * @param {String} pseudo
 */
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    // Nom complet
    this.getNomComplet = function () {
        return nom + " " + prenom + " " + pseudo;
    }
}

/**
 * Créer un client à partie d'une personne
 * 
 * @param {String} nom 
 * @param {String} prenom 
 * @param {String} pseudo 
 * @param {String} numeroClient 
 */
function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;

    // Informations complètes
    this.getInfos = function () {
        return nom + " " + prenom + " " + pseudo + " " + numeroClient;
    }
}

/**
 * Afficher les informations d'une personne
 * 
 * @param {Personne} personne 
 */
function afficherPersonne(personne) {
    console.log(personne.getNomComplet());
}

// Création de personnes
var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

// Affichage de personnes
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

afficherPersonne(paul);

// Affichage de l'age de jules (WARNING: undefined)
console.log(jules.age);

// Modifier un objet
jules.pseudo = "jules44";
console.log(jules.pseudo);

// Ajout de la propriétée age à Personne
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

// Jules a 30 ans
jules.age = 30
console.log(jules.age);

// Ajout de la méthode getInitiales
Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

// Affichage des initiales
console.log(jules.getInitiales());

// Création d'un client
var steve = new Client("Steve", "LUCAS", "steve44", "A01");

// Affichage de la personne Steve
afficherPersonne(steve);

// Affichage du client Steve
console.log(steve.getInfos());