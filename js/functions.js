function Konstruktor(nazwa){
	this.name = nazwa;
	this.value = 123;
	this.strzalka = (argumentfunkcji) => { console.log(argumentfunkcji + ' ' + this.name + ' !') };
	this.zwykla = function(argumentfunkcji){
		console.log( argumentfunkcji + ' ' + this.name + ' !') ;
	}
}

