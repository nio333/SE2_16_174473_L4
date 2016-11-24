/**
*	Array di tutti i dipendenti
**/
var empArr=new Array();

/**
*	Crea un oggetto employee inizializzato.
**/
function employee(){
    var emp = {
		id: "",
		name: "",
		surname: "",
		salary: "",
		level: ""
	};
    
	return emp;
}

/**
*	Richiama la funzione GetI(id), esegue un'accesso all'array e
*   restituice employer corrispondende.
*   Se l'elemento da cercare non esiste restituisce null;
*
*	@return employee oppure null se non è stato trovato l'id nell'array
**/
function getEmp(id){
    var i = getI(id);
	if(i!=-1){
		return empArr[i];
	}else{
		return null;
	}
}

/**
*	GetI restituisce -1 se l'id ricevuto come argomento della
*   funzione non è presente nell'array, se invece viene trovato
*   la funzione restituisce l'indice;
*
*	@param id un intero che rappresenta l'id da ricercare
*	@return i l'indice dell'elemento trovato, -1 altrimenti
**/
function getI(id){
    var i=-1;
    for(var j=0;j<empArr.length;j++){
		if(empArr[j].id==id){
			i=j;
            return i;
		}
	}
    return i;  
}

/**
*	RemoveEmp chiama la funzine getI per ottenere la posizione dell'elemento con
*   tale id, se esite elimina l'elemento.
*   
*	@param id rappresenta l'id dell'employee da eliminare.
**/

function removeEmp(id){
    var i = getI(id);
	if(i!=-1){
		empArr.splice(i,1);
	}
}

/**
*   AddEmp chiama la funzine getI per ottenere la posizione dell'elemento con
*   tale id, se non esiste lo inserisci in fondo all'array, altrimenti sostituisce
*   quello presente.
**/
function addEmp(employee){
    var i = getI(employee.id);
    if(i==-1){
        empArr.push(employee);
    }else{
        empArr[i].name=employee.name;
        empArr[i].surname=employee.surname;
        empArr[i].level=employee.level;
        empArr[i].salary=employee.salary;  
    }
}

/**
*   Fornisce l'id immediatamente successivo al più
*   grande id inserito.
*   
*   @return id da inserire nel nuovo dipendente
*/
function getNextId(){
    var id = 0;
    for(var i=0; i<empArr.length; i++){
        if(empArr[i].id > id){
            id=empArr[i].id;
        }
    }
    id=id+1;
	return id;
}

// EXPORTS
exports.Employee = employee;
exports.getEmployee = getEmp;
exports.removeEmployee = removeEmp;
exports.addEmployee = addEmp;
exports.getNextId = getNextId;