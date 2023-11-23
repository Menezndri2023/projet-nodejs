// creation du serveur et du programme ecoutant sur le port 3000

const http = require('http')

const serveur = http.createServer(function(request,reponse){
    reponse.writeHead(200,{'Content-Type': 'text/html'})
    reponse.end("<h1>Hello Node!!!!</h1>")
})

serveur.listen(3000, ()=>{
    console.log('serveur en écoute sur le port 3000')
})