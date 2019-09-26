window.addEventListener("load", init);

function init(){
	var heads_out = document.querySelector("#heads_out");
	var tails_out = document.querySelector("#tails_out");
	var total = document.querySelector("#total");
	document.querySelector("#heads_butt").addEventListener("click", heads);
	document.querySelector("#tails_butt").addEventListener("click", tails);
	document.querySelector("#reset").addEventListener("click", resetCounts);
	window.addEventListener("keydown", getKey);
	loadCounts();
	percents();
}

function getKey(){
	if(event.keyCode == 72){
		heads();
	}else if(event.keyCode == 84){
		tails();
	}else if(event.keyCode == 82){
		resetCounts();
	}
}

function store(){
	var heads_store = parseInt(heads_out.textContent, 10);
	var tails_store = parseInt(tails_out.textContent, 10);
	var total_store = parseInt(total.textContent, 10);
	localStorage.setItem('headsStore', heads_store);
	localStorage.setItem('tailsStore', tails_store);
	localStorage.setItem('totalStore', total_store);
	loadCounts();
	percents();
}

function loadCounts(){
	var heads_load = localStorage.getItem('headsStore');
	var tails_load = localStorage.getItem('tailsStore');
	var total_load = localStorage.getItem('totalStore');
	heads_out.textContent = heads_load;
	tails_out.textContent = tails_load;
	total.textContent = total_load;
}

function heads(){
	var heads_count = parseInt(heads_out.textContent, 10);
	var total_count = parseInt(total.textContent, 10);
	heads_count++;
	heads_out.textContent = heads_count;
	total_count++;
	total.textContent  = total_count;
	store();
}
function tails(){
	var tails_count = parseInt(tails_out.textContent, 10);
	var total_count = parseInt(total.textContent, 10);
	tails_count++;
	tails_out.textContent = tails_count;
	total_count++;
	total.textContent  = total_count;
	store();
}

function resetCounts(){
	localStorage.setItem('headsStore', 0);
	localStorage.setItem('tailsStore', 0);
	localStorage.setItem('totalStore', 0);
	loadCounts();
	percents();
}

function percentHeads(){
	var heads_count = parseInt(heads_out.textContent, 10);
	var total_count = parseInt(total.textContent, 10);
	var percent_heads = Math.round((heads_count/total_count)*100);
	if(isNaN(percent_heads)){
		document.querySelector("#percent_heads").textContent = "0%";
	}else{
		document.querySelector("#percent_heads").textContent = percent_heads + "%";
	}
}

function percentTails(){
	var tails_count = parseInt(tails_out.textContent, 10);
	var total_count = parseInt(total.textContent, 10);
	var percent_tails = Math.round((tails_count/total_count)*100);
	if(isNaN(percent_tails)){
		document.querySelector("#percent_tails").textContent = "0%";
	}else{
		document.querySelector("#percent_tails").textContent = percent_tails + "%";
	}
}

function percents(){
	percentHeads();
	percentTails();
}