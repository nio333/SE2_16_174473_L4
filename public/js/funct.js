/**
*   Funzione di toggle della from degli employee 
*   fra visibile e non.
*/
function shForm(){
	var div = document.getElementById("employee");
	if (div.classList.contains('hidden')) {
        div.classList.toggle('visible');
        resetForm();
    } else {
        div.classList.toggle('hidden');
    }
}

/**
*   Funzione di reset dei campi della form
**/

function resetForm(){
    document.getElementById("ids").value="";
	document.getElementById("id").value="";
	document.getElementById("name").value="";
	document.getElementById("surname").value="";
	document.getElementById("level").value="";
	document.getElementById("salary").value="";
}

/**
*   Se il campo ids non è vuoto settto action per segnalare al server che
*   sto effettuando una ricerca, altriementi lancio un messaggio d'errore
*   
*	@param form
**/

function searchEmp(form){
	if(document.getElementById("ids").value!=""){
        form.action = "/search";
        form.submit();
    }
    else{
        alert("Specify ID and retry");
    }
}

/**
*   Se il campo ids non è vuoto settto action per segnalare al server che
*   sto eliminado un elemento, altriementi lancio un messaggio d'errore
*   
*	@param form
**/
function deleteEmp(form){
    if(document.getElementById("ids").value != ""){
        form.action = "/delete";
        form.submit();
    }
    else{
        alert("Specify ID and retry");
    }
}

/**
*   Elimino valore eventualmente presente nel campo ids
**/
function reset(){
	document.getElementById("ids").value = "";
}

/**
*   Procedo all'aggiunta dei valori nel vettore, solo se tutti i campi sono stati compilati,
*   altrimenti lancio un messaggio di errore.
*   Settto action per segnalare al server che sto effettuando una insert
*
*   @param form
*/
function addEmp(form){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var level = document.getElementById("level").value;
	var salary = document.getElementById("salary").value;
    
	if(id != "" && name != "" && surname != "" && level != "" && salary != ""){
        form.action="/insert";
		document.getElementById("employee").disabled=true;
		form.submit();
	}else{
		alert("Error data!");
    }
}