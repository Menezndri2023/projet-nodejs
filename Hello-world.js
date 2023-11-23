
// affichage du message hello world 

const msg = "Hello world"
console.log(msg)


// creation de ficher welcome.txt pouvant lire "hello node" 
 
const fs = require("fs");
const path = require("path");

// fs.writeFile("welcome.txt" , "hello node", function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("file created");
//     });


fs.readFile(path.join(__dirname ,"welcome.txt"), function(err){
    if(err){
        console.log("erreur serveur");
    }else{
        console.log("welcome.hyfuvuttxt")
    }
});

