var express = require('express');
var bind = require('bind');
var bodyParser = require('body-parser');
//Aggiungo una libreria di supporto per la gestione degli employees
var lib = require('./lib/lib.js');

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//set the server to respond to a file request
app.use('/files',express.static(__dirname+'/public'));

//set Body-parser on the requests
app.use(bodyParser.urlencoded({ extended: false }));

//create a server
/**
*   CREATE A VOID TEMPLATE
**/
app.get('/', function(req, res) {
	//bind to template
	bind.toFile('tpl/index.tpl', {
        //set up parameters
		open : false
    }, 
    function(data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

/**
*   SEARCH EMPLOYEE
**/
app.post('/search', function(req, res) {
	if ( typeof req.body !== 'undefined' && req.body){
		if ( typeof req.body.ids !== 'undefined' && req.body.ids){
			var getId = parseInt(req.body.ids);
            var employee = lib.getEmployee(getId);
            if(employee == null){
                bind.toFile('tpl/index.tpl', {
                    open : true
                }, 
                function(data){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                });
            }
            else{
                //bind to template
                bind.toFile('tpl/index.tpl', {
                    open : true,
                    ids: employee.id,
                    id: employee.id,
                    name: employee.name,
                    surname: employee.surname,
                    level: employee.level,
                    salary: employee.salary
                }, 
                function(data){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                });   
            }
        }
	}
});

/**
*   DELETE EMPLOYEE
**/
app.post('/delete', function(req, res) {
	if ( typeof req.body !== 'undefined' && req.body){
        //the ontent of the POST receiced
		// salvo il contenuto del campo id
		if ( typeof req.body.ids !== 'undefined' && req.body.ids){
			var getId = parseInt(req.body.ids);
            lib.removeEmployee(getId);
        }
	}
	//bind to template
	bind.toFile('tpl/index.tpl', {
        //set up parameters
		open : false,
		ids: '',
        id: '',
        name: '',
		surname: '',
		level: '',
		salary: ''
    }, 
    function(data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

/**
*   INSERT EMPLOYEES
**/
app.post('/insert',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
        //Nuovo employ per acquisire i dati dalla form
		var employee = new lib.Employee();
        //Flag per il controllo dell'errore
		var error = false;
        
        if(typeof request.body.id !== 'undefined' && request.body.id){
            var id = request.body.id;
            //se id è stato lasciato in bianco
			if(id==""){
				employee.id=lib.getNextId();
			}else{//altrimenti prelevo il dato inserito
				employee.id=parseInt(id);
			}
		}else{//alcuni brosware non inviano il dato se il campo è vuoto
			employee.id=lib.getNextId();
		}
		if(typeof request.body.name !== 'undefined' && request.body.name){
			employee.name=request.body.name;
		}else{
			error = true;
		}
		if(typeof request.body.surname !== 'undefined' && request.body.surname){
			employee.surname=request.body.surname;
		}else{
			error = true;
		}
		if(typeof request.body.level !== 'undefined' && request.body.level){
			employee.level=parseInt(request.body.level);
		}else{
			error = true;
		}
		if(typeof request.body.salary !== 'undefined' && request.body.salary){
			employee.salary=parseInt(request.body.salary);
		}else{
			error = true;
		}
        //Se uno dei capi della form non è stato completato genero un'errore.
		if(error){
			response.writeHead(409,{});
			response.end("Incorrect data sent with the request");
		}else{
			lib.addEmployee(employee);		//Aggiunta dell'employee alla lista
			bind.toFile('tpl/index.tpl', {
                open : false
            },
            function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
		}	
	}else{
		console.log("Request body not defined");
	}
});

//Set the server to listen on a specific port
app.listen('1337','127.0.0.1');

console.log("Server is running at http://127.0.0.1:1337");