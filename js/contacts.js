/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

class Contact 
{
	constructor(nom, prenom)
	{
		this.nom = nom;
		this.prenom = prenom;
	}
}

const cLevisse = new Contact("Levisse", "Carole");
const mNelsonne = new Contact("Nelsonne", "Mélodie");

const listeContacts = [cLevisse, mNelsonne];


function lister()
{
	console.log("Voici la liste de tous vos contacts : ")
	
	for (let i = 0; i < listeContacts.length; i++)
	{
		console.log("Nom : " + listeContacts[i].nom + ", Prénom : " + listeContacts[i].prenom);
	}
	
	choix(); 
}


function ajouter()
{
	var addPrenom = prompt("Entrez le prénom de votre contact :");
	if (addPrenom == null)
	{
		console.log("Vous n'avez pas entré le prénom du contact ou avez annulé, retour au menu !");
		choix();
	}
	else
	{
		addNom = prompt("Entrez votre nom de votre contact :"); 
		if (addNom == null)
		{
			console.log("Vous n'avez pas entré le nom du contact ou avez annulé, retour au menu !");
			choix();
		}
		else
		{
			var denomination = new Contact(addNom[0].toUpperCase() + addNom.substring(1, addNom.length).toLowerCase(), addPrenom[0].toUpperCase() + addPrenom.substring(1, addPrenom.length));
			
			listeContacts.push(denomination);
			
			console.log("Le nouveau contact à été ajouté !")
			
			choix();
		}
		
	}
}


function choix()
{
	console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter")
	
	const option = prompt("Choisissez une option : ")
	
	if (option == 1)
		{
			lister();
		}
	else if (option == 2)
		{
			ajouter();
		}
	else if (option == 0)
		{
			console.log("Au revoir !");
		}
	else
		{
			alert("Votre choix n'est pas correct, veuillez renouveler votre saisie !");
			choix();
		}
}

console.log("Bienvenue dans le gestionnaire de contacts !")
choix();
