/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//Contstanten

var menu = document.querySelector('.slide_menu');
var show_menu_btn = document.querySelector('.show_menu');
var close_menu_btn = document.querySelector('.close_menu');
var categorien_knop = document.querySelector("#categorien_knop");
var audio_btn = document.querySelectorAll("#audio_btn");
var show_favorites_btn = document.querySelector("#show_favorites");
var toggle_favorite_btn = document.querySelector("#favorite_btn");
var favorietenLijst = [];



// Functies

function audio_handler(e) {
	// Speelt het juiste muziekje af
	e.preventDefault();
	var current_audio = this.closest("article").querySelector("audio");

	// Zet alle audiofiles op pauze
	var audios = document.querySelectorAll("audio");
	audios.forEach(function(audio) {
		if(audio.src.length > 0){
			audio.pause();
		}
	});	

	if (current_audio.duration > 0 && !current_audio.paused) {
		current_audio.pause();
	} else {
		current_audio.currentTime = 0;
		current_audio.volume = 0.05;
		current_audio.play();
	}

}


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

function toggleCategories(e) {
	// Laat de categoriën menu zien, of niet
	e.preventDefault();
	var categorien = document.querySelector("#categorien");
	
	categorien.classList.toggle("open");

}



// eventlisters

close_menu_btn.addEventListener('click', closeMenu);
show_menu_btn.addEventListener('click', showMenu);
categorien_knop.addEventListener('click', toggleCategories);
audio_btn.forEach(function (audio) {
	audio.addEventListener('click', audio_handler);
});