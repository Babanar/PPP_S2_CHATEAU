
var cnvs = document.getElementById("mainCanvas"); //Stock dans cnvs l'élément de la balise canvas
var ctxt = cnvs.getContext("2d"); //Son context est ensuite extrait et placé dans ctxt


//Classe servant à stocker une position dans un environnement 2D
var Vector2D = function(a=0,b=0)
{
	//Variables
	
	this.x=a; //En x (0 par default)
	this.y=b; //En Y (0 par default)
}


//Classe servant à stocker un chateau en mémoire
var Chateau = function(a,d=0,e=0,b=120,c=80) {
	
	//Variables
	
	this.img = new Image(); //Déclare une variable Image
	this.img.src=a; //Définit l'image du chateau
	this.position = new Vector2D(d,e); //Déclare une variable position :  (0,0) par default
	this.size = new Vector2D(b,c); //Déclare une variable contenant la taille (ici toujours la meme)
	
	//Methodes
	
	this.afficher = function() //Affiche le chateau
	{
		ctxt.drawImage(	this.img, //Image à afficher...
						this.position.x, //Sa position en x
						this.position.y, //Sa position en y
						this.size.x,	//Sa taille en x
						this.size.y);	//Sa taille en y
	}
	
	this.setPosition=function(a,b) //Définit la position du chateau
	{
		this.position.x=a; //Sa position en x
		this.position.y=b; //Sa position en y
	}
	
	this.setSize=function(a,b) //Définit la taille du chateau
	{
		this.size.x=a; //Sa taille en x
		this.size.y=b; //Sa taille en y
	}

}


var ch1 = new Chateau("chateau_bleu.png");
	ch1.setPosition(0,20);
	ch1.setSize(240,160);
	ch1.afficher();

delete ch1;
