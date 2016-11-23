/**
*   Se il campo ids non è vuoto settto action per segnalare al server che
*   sto effettuando una ricerca, altriementi lancio un messaggio d'errore
*   
*	@param form
**/
function search(form){
	if(document.getElementById("ids").value!=""){
        form.action="/delete";
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
function delete(form){
    if(document.getElementById("ids").value!=""){
        form.action="/delete";
    }
    else{
        alert("Specify ID and retry");
    }
}

/**
* Elimino valore eventualmente presente nel campo ids
**/
function reset(){
	document.getElementById("ids").value="";
}