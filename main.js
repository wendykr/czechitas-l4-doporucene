// tady je místo pro náš program

// FIT email

let button = document.querySelectorAll('.button');

button[0].addEventListener('click',
  function() {
	let vstupJmenoFull = String(prompt('Jméno:'));
    let vstupJmeno = removeDiacritics(vstupJmenoFull.toLowerCase().trim().slice(0,3));

	if (vstupJmeno === '') {
        alert('Jméno je povinný údaj');
    } else {
        let vstupPrijmeniFull = String(prompt('Příjmení:'));
		let vstupPrijmeni = removeDiacritics(vstupPrijmeniFull.toLowerCase().trim().slice(0,6));

		if (vstupPrijmeni === '') {
            alert('Jméno je povinný údaj');
        } else {

		const person = {
			name: vstupJmeno,
			surname: vstupPrijmeni,
		}
		
        const { name, surname } = person;

		let osoba = document.querySelector('.osoba');
        let data = document.querySelector('.inputData');
        data.innerHTML = '<i>' + vstupJmenoFull + ' ' + vstupPrijmeniFull + '<i>';
		osoba.innerHTML = `<span style="color: red;">${name}${surname}</span>@fit.cvut.cz`;
		
		button.classList.add('hidden');
		}
	}
  }
);

function removeDiacritics(inputText) {
    //odstaní diakritiku z textu, převede na malé písmena
    //příklad: removeDiacritics("a ěšč řžýáíéÉÍÁÝŽŘČŠĚĎŤŇÔŮÚ")
    //výstup:                  > a esc rzyaieEIAYZRCSEDTNOOU
    console.log(inputText);

    var r = inputText.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[æ]/g), "ae");
    r = r.replace(new RegExp(/[çč]/g), "c");
    r = r.replace(new RegExp(/[ď]/g), "d");
    r = r.replace(new RegExp(/[èéêëě]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/[ñň]/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[œ]/g), "oe");
    r = r.replace(new RegExp(/[ř]/g), "r");
    r = r.replace(new RegExp(/[š]/g), "s");
    r = r.replace(new RegExp(/[ť]/g), "t");
    r = r.replace(new RegExp(/[ůùúûü]/g), "u");
    r = r.replace(new RegExp(/[ýÿ]/g), "y");
    r = r.replace(new RegExp(/[ž]/g), "z");
    // r = r.replace(new RegExp(/\W/g), ""); //non-word character //BOHUŽEL i "-"
    console.log(r);
    return r;
}

// Množstevní slevy

button[1].addEventListener('click',
  function() {
	let vstupPocet = Number(prompt('Počet ks:'));

	if (vstupPocet <= null) {
        alert('Počet je povinný údaj');
    } else {

        let celkem = 0;
        let kus = 0;
        let limit = 0;

        if (vstupPocet < 50) {
            celkem = vstupPocet * 300;
            kus = 300;
            limit = 'Přidejte ještě alespoň <strong>' + (50 - vstupPocet) + ' ks</strong> a budete mít větší množstevní slevu (tj. od 50 ks)';
        } else if (vstupPocet >= 50 && vstupPocet < 200) {
            celkem = vstupPocet * 250;
            kus = 250;
            limit = 'Přidejte ještě alespoň <strong>' + (200 - vstupPocet) + ' ks</strong> a budete mít větší množstevní slevu (tj. od 200 ks)';
        } else if (vstupPocet >= 200 && vstupPocet < 500) {
            celkem = vstupPocet * 200;
            kus = 200;
            limit = 'Přidejte ještě alespoň <strong>' + (500 - vstupPocet) + ' ks</strong> a budete mít větší množstevní slevu (tj. od 500ks)';
        } else if (vstupPocet > 500 && vstupPocet < 1000) {
            celkem = vstupPocet * 150;
            kus = 150;
            limit = 'Přidejte ještě alespoň <strong>' + (1000 - vstupPocet) + ' ks</strong> a budete mít větší množstevní slevu (tj. od 1 000 ks)';
        } else if (vstupPocet >= 1000) {
            celkem = vstupPocet * 120;
            kus = 120;
            limit = 'Dosáhli jste nejvýše možné množstevní slevy!';
        } 
        
        let celkemKs = document.querySelector('.ks');
        celkemKs.innerHTML = '<strong>' + vstupPocet + '</strong>';
        let celkemObj = document.querySelector('.cena');
        celkemObj.innerHTML = '<strong>' + celkem.toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK' }) + ' </strong> (' + kus + ' Kč/ks)';
        let limitElm = document.querySelector('.limit');
        limitElm.innerHTML = '<span style="color: #8a8a8a; font-size: 16px;">' + limit + '</span>';
    }

    }
);