function checar_login(){
	var user = document.getElementById('usuario').value;
	var pass = document.getElementById('senha').value;

	if (user==""){
		alert('Digite o nome de usuario.');
		return false;
	}
	else if (pass==""){
		alert('Digite a senha.');
		return false;
	}
	else{
		return true;
	}
}

function checar_registro(){
	var user = document.getElementById('usuario').value;
	var email = document.getElementById('email').value;
	var email2 = document.getElementById('email2').value;
	var pass = document.getElementById('senha').value;
	var pass2 = document.getElementById('senha2').value;

	if (user==""){
		alert('Digite o nome de usuario.');
		return false;
	}
	else if (email==""){
		alert('Digite um e-mail valido.');
		return false;
	}
	else if (email2==""){
		alert('Por favor confirme seu e-mail.');
		return false;
	}
	else if (email!=email2){
		alert('E-mails diferentes.');
		return false;
	}
	else if (pass==""){
		alert('Digita uma senha.');
		return false;
	}
	else if (pass2==""){
		alert('Por favor confime a senha.');
		return false;
	}
	else if (pass!=pass2){
		alert('Senhas diferentes.');
		return false;
	}
	else{
		return true;
	}
}