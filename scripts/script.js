/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//constanten
var menu = document.querySelector('.slide_menu');
var show_menu_btn = document.querySelector('.show_menu');
var close_menu_btn = document.querySelector('.close_menu');

var tabviewBtn = document.querySelector("main ul li:nth-child(3) a img");
var listviewBtn = document.querySelector("main ul li:nth-child(4) a img");

var section = document.querySelector("main section");


// Objecten
var data = [["tame_impala", "vaag"],
						["twenty_one_pilots", "pop"],
						["de_straat", "rock"],
						["asap_rocky", "hiphop"],
					 	["billy_eilish", "hiphop"],
					 	["franz_ferdinand", "pop"]];

var artiestenInfo = [];

function Artiest() {
	this.favoriet = 0;
	this.naam = "";
	this.audio = function () {
		return "../audio/" + this.naam + ".mp3";
	};
	this.foto = function () {
		return "images/artiesten/" + this.naam + ".jpg";
	};
	this.genre = "";
}



//functies

function closeMenu() {
	// het meer menu sluiten
	menu.classList.remove("show");
	menu.classList.add("hide");
}

function showMenu() {
	// het meer menu openen
	menu.classList.remove("hide");
	menu.classList.add("show");
}

function loadArtiesten() {
	// laadt de data van de artiesten
	data.forEach(function (artiest) {
		var nieuweArtiest = new Artiest();
		nieuweArtiest.naam = artiest[0];
		nieuweArtiest.genre = artiest[1];
		artiestenInfo.push(nieuweArtiest);
	});
}

function createTabs() {
	artiestenInfo.forEach(function () {
		var wrapper = document.createElement("div");
		wrapper.classList.add("wrapper");
		var inner = document.createElement("div");
		inner.classList.add("inner");
		var artist_options = document.createElement("ul");
		var artist_name = document.createElement("b");
		var photo_frame = document.createElement("div");
		photo_frame.classList.add("photo_container");
		var artist_photo = document.createElement("img");

		photo_frame.appendChild(artist_photo);
		inner.appendChild(artist_options);
		inner.appendChild(artist_name);
		inner.appendChild(photo_frame);
		wrapper.appendChild(inner);
		section.appendChild(wrapper);
	});
}

//loadArtiesten();
//createTabs();
//tabview();


function tabview() {

	var inner = document.querySelectorAll(".inner");
	inner.forEach(function (item, i) {

		var artiest = artiestenInfo[i];

		var favorBtn = document.createElement("img");
		var artist_options = item.children[0];
		var favor_artist = document.createElement("li");
		item.children[1].textContent = artiest.naam.replace(/_/g, ' ');
		item.children[2].firstChild.src = artiest.foto();
		artist_options.appendChild(favor_artist);
		favor_artist.appendChild(favorBtn).src = "images/favorite.png";
		favor_artist.appendChild(favorBtn).classList.add("favoriteBtn");


	});
}

function listview(){
	const artiesten = data;
	artiesten.forEach(function(artiest){
		console.log(artiest);
	});
}

function artistView(e) {
	e.preventDefault();
	var weergave = e.target.alt;
	if (weergave.includes("lijst")) {
		listview();
	} else {
		tabview(e);
	}
}

//eventlisteners
close_menu_btn.addEventListener('click', closeMenu);
show_menu_btn.addEventListener('click', showMenu);
tabviewBtn.addEventListener('click', artistView);
listviewBtn.addEventListener('click', artistView);
