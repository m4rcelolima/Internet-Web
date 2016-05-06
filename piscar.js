function piscar() {
	if(document.getElementById("titulo_pisca").className == "titulo_corpo_aparece"){
		document.getElementById("titulo_pisca").className ="titulo_corpo_some";
	}
	else{
		document.getElementById("titulo_pisca").className ="titulo_corpo_aparece";
	}
}

setInterval("piscar()", 1500);
