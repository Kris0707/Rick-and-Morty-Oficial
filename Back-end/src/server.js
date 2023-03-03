let http = require('http');


http.createServer( function(req, res){ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
	//Para crear un response empezamos escribiendo el header
	res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === "rickandmorty/character"){
        
    }


}).listen(3001, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor