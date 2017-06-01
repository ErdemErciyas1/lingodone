var words = '';
var tweedeletter = '';
var derdeletter = '';
var vierdeletter = '';
var vijfdeletter = '';



	var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"enkel",
	"effen",
	"email"];

function start(){ // dit is het knopje van "start the game".

randomWord = Math.floor(Math.random()*words.length);   //hij pakt een random getal
rndomwrd = words[randomWord];  //het getal wordt omgezet naar een tekst


var res = rndomwrd.split(""); //rndomwrd wordt opgesplits in losse letters
console.log(res); //de var res wordt in de console gesplits weergegeven.

//de eerste letters splitten;

var eersteletter = rndomwrd.substring(0 ,1);
console.log(eersteletter); // de eerste letter wordt weergegeven in de console.
document.getElementById('attempt1-1').value = eersteletter; //de eerste letter wordt weergegeven in de display.

tweedeletter = rndomwrd.substring(1 ,2);
console.log(tweedeletter); // de tweede letter wordt weergegeven in de console.

derdeletter = rndomwrd.substring(2 ,3);
console.log(derdeletter); // de derde letter wordt weergegeven in de console.

vierdeletter = rndomwrd.substring(3 ,4);
console.log(vierdeletter); // de vierde letter wordt weergegeven in de console.

vijfdeletter = rndomwrd.substring(4 ,5);
console.log(vijfdeletter); // de vijfde letter wordt weergegeven in de console.
}


function check(){ // dit is het knopje van ''controleren".

// de tweede letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById('attempt1-2').value;

if(controle2 == tweedeletter){
	document.getElementById('attempt1-2').style.backgroundColor="yellow";
}



//de derde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle3 = document.getElementById('attempt1-3').value;
if(controle3 == derdeletter){
	document.getElementById('attempt1-3').style.backgroundColor = "yellow";
}


// de vierde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle4 = document.getElementById('attempt1-4').value;
if(controle4 == vierdeletter){
	document.getElementById('attempt1-4').style.backgroundColor = "yellow";
}

// de vijfde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle5 = document.getElementById('attempt1-5').value;
if(controle5 == vijfdeletter){
	document.getElementById('attempt1-5').style.backgroundColor ="yellow";
}


// als de letters goed zijn ingevuld komt er een alert "jij bent de winnaar. 	
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}

// de eerste letter wordt verschoven naar de tweede regel als een letter niet klopt van het woord.

if(controle2 != tweedeletter || controle3 != derdeletter || controle4 != vierdeletter || controle5 != vijfdeletter ){

var eersteletter = rndomwrd.substring(0,1);
console.log(eersteletter);
document.getElementById("attempt2-1").value=eersteletter;

}


// herhaling van de eerste rij maar nu op de tweede rij
var controle2 = document.getElementById('attempt2-2').value;
if(controle2 == tweedeletter){
	document.getElementById('attempt2-2').style.backgroundColor = "yellow";
}

//als de derdeletter klopt wordt het vakje geel.
var controle3 = document.getElementById('attempt2-3').value;
if(controle3 == derdeletter){
	document.getElementById('attempt2-3').style.backgroundColor = "yellow";
}

// zie boven deze tekst.
var controle4 = document.getElementById('attempt2-4').value;
if(controle4 == vierdeletter){
	document.getElementById('attempt2-4').style.backgroundColor = "yellow";
}

// zie boven deze tekst.
var controle5 = document.getElementById("attempt2-5").value;
if(controle5 == vijfdeletter){
	document.getElementById("attempt2-5").style.backgroundColor = "yellow";
}

// als alle letters kloppen ben je de winnaar.
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}

//de eerste letter wordt weergegeven in de derde rij (attempt3-1).
if(controle2 != tweedeletter || controle3 != derdeletter || controle4 != vierdeletter || controle5 != vijfdeletter ){
var eersteletter = rndomwrd.substring(0,1);
console.log(eersteletter);
document.getElementById("attempt3-1").value=eersteletter;
}

// de tweede letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById("attempt3-2").value;
if(controle2 == tweedeletter){
	document.getElementById("attempt3-2").style.backgroundColor= "yellow";
}
// de derde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle3 = document.getElementById("attempt3-3").value;
if(controle3 == derdeletter){
	document.getElementById("attempt3-3").style.backgroundColor = "yellow";
}
// de vierde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle4 = document.getElementById('attempt3-4').value;
if(controle4 == vierdeletter){
	document.getElementById("attempt3-4").style.backgroundColor = "yellow";
}
// de vijfde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle5 = document.getElementById("attempt3-5").value;
if(controle5 == vijfdeletter){
	document.getElementById('attempt3-5').style.backgroundColor = "yellow";
}
// als alle letters kloppen ben je de winnaar.
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}
// de tweede letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
if(controle2 != tweedeletter || controle3 != derdeletter || controle4 != vierdeletter || controle5 != vijfdeletter ){

var eersteletter = rndomwrd.substring(0,1);
console.log(eersteletter);
document.getElementById("attempt4-1").value=eersteletter;
}
// de tweede letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById("attempt4-2").value;
if(controle2 == tweedeletter){
	document.getElementById("attempt4-2").style.backgroundColor= "yellow";
// de derde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById("attempt4-3").value;
if(controle2 == derdeletter){
	document.getElementById("attempt4-3").style.backgroundColor= "yellow";
}
// de vierde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById("attempt4-4").value;
if(controle2 == vierdeletter){
	document.getElementById("attempt4-4").style.backgroundColor= "yellow";
}
// de vijfde letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById("attempt4-5").value;
if(controle2 == vijfdeletter){
	document.getElementById("attempt4-5").style.backgroundColor= "yellow";
}


// als alle letters kloppen ben je de winnaar.
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}

if(controle2 != tweedeletter || controle3 != derdeletter || controle4 != vierdeletter || controle5 != vijfdeletter ){

var eersteletter = rndomwrd.substring(0,1);
console.log(eersteletter);
document.getElementById("attempt5-1").value=eersteletter;

}

}

var controle2 = document.getElementById('attempt5-2').value;
if(controle2 == tweedeletter){
	document.getElementById("attempt5-2").style.backgroundColor ="yellow";
}

var controle3 = document.getElementById('attempt5-3').value;
if(controle3 == derdeletter){
	document.getElementById('attempt5-3').style.backgroundColor ="yellow";
}

var controle4 = document.getElementById('attempt5-4').value;
if(controle4 == vierdeletter){
	document.getElementById('attempt5-4').style.backgroundColor ="yellow";
}


var controle5 = document.getElementById('attempt5-5').value;
if(controle5 == vijfdeletter){
	document.getElementById('attempt5-5').style.backgroundColor ="yellow";
}
// als alle letters kloppen ben je de winnaar.
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}
}// function afsluiting.








	


