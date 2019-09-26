window.addEventListener("load", init);
function init(){
	document.querySelector("#heads_butt").addEventListener("click", heads);
	document.querySelector("#tails_butt").addEventListener("click", tails);
}

function heads(){
	var heads_out = document.querySelector("#heads_out");
	var heads_count = parseInt(heads_out.textContent, 10);
	heads_count++;
	heads_out.textContent = heads_count;
	
}
function tails(){
	var tails_out = document.querySelector("#tails_out");
	var tails_count = parseInt(tails_out.textContent, 10);
	tails_count++;
	tails_out.textContent = tails_count;
}