window.addEventListener("load", init);

function init(){
	var heads_out = document.querySelector("#heads_out");
	var tails_out = document.querySelector("#tails_out");
	document.querySelector("#heads_butt").addEventListener("click", heads);
	document.querySelector("#tails_butt").addEventListener("click", tails);
	document.querySelector("#reset").addEventListener("click", resetCounts);
	loadCounts();
}

function store(){
	var heads_store = parseInt(heads_out.textContent, 10);
	var tails_store = parseInt(tails_out.textContent, 10);
	localStorage.setItem('headsStore', heads_store);
	localStorage.setItem('tailsStore', tails_store);
}

function loadCounts(){
	var heads_load = localStorage.getItem('headsStore');
	var tails_load = localStorage.getItem('tailsStore');
	heads_out.textContent = heads_load;
	tails_out.textContent = tails_load;
}

function heads(){
	var heads_count = parseInt(heads_out.textContent, 10);
	heads_count++;
	heads_out.textContent = heads_count;
	store();
}
function tails(){
	var tails_count = parseInt(tails_out.textContent, 10);
	tails_count++;
	tails_out.textContent = tails_count;
	store();
}

function resetCounts(){
	localStorage.setItem('headsStore', 0);
	localStorage.setItem('tailsStore', 0);
	loadCounts();
}