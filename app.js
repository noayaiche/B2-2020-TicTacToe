console.log("TIC TAC TOE v1");

// Initialisation des joueurs

var url = new URL(location.href); 
var joueur1 = url.searchParams.get("joueur1");
var joueur2 = url.searchParams.get("joueur2"); 
var play1 = url.searchParams.get("play1"); 
var play2 = url.searchParams.get("play2"); 
var player1score = 0; 
var player2score = 0; 
var size = 3; 

var players =[{
    name: joueur1,
    play: play1,
    score : player1score,
},{
    name: joueur2,
    play: play2, 
    score : player2score, 
}];

var messages = [];
var statusGame = 0;

var msg = document.querySelector('.msg');
var cases = document.querySelectorAll(".case");
var player1el = document.querySelector('.player1');
var player2el = document.querySelector('.player2');

/* var continueBtn= document.querySelector(".continue-btn");
var resetBtn= document.querySelector(".reset-btn"); */

//Déclaration de la grille 
var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');

var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');

var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');

// Initialisation de l'interface
player1el.innerHTML = players[0].play + ": " + players[0].name ;
player2el.innerHTML = players[1].play + ": " + players[1].name ;
var currentPlayer = 0;

//Enregistre les scores des joueurs 
var score= {
    play1: 0,  
    play2: 0
}

//Ajout et supression des messages 
addmessage = (message) => {
    var msgHTML = "";
    messages.push(message);

    messages.forEach(msg => {
        msgHTML += "<div class='"+msg.type+"'>" + msg.content + "</div>";
    })
    msg.innerHTML = msgHTML;
    msg.style.display = "block";
}

clearmessage = () => {
    messages = [];
    msg.innerHTML = "";
    msg.style.display = "none";
}

cases.forEach((item) => {
    item.onmouseover = function() {
        this.style.background = "#C1C1C1";
    }
    
    item.onmouseout = function() {
        this.style.background = null;
    }

    item.onclick = function () {
        if (statusGame == 1) {
            return false;
        }

        clearmessage ();

        //Gère les doubles clics 
        if (this.textContent) {
            addmessage({
                type: "error",
                content: "Essayez ailleurs, la case est déjà prise."
            });
            return false;
        }

        // Le joueur joue
        this.innerHTML = players[currentPlayer].play;
        
        /* addmessage({
            type: "jouer",
            content: players[currentPlayer].name + " à toi de jouer"
        });*/ 

        //Combinaisons pour gagner la partie + affichage d'un message + Score 
        if (a1.textContent == players[currentPlayer].play && 
            a2.textContent == players[currentPlayer].play && 
            a3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer? '))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;  
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");
                     
                }else{
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    }); 
                }
            }
            
            a1.classList.add('win');
            a2.classList.add('win');
            a3.classList.add('win');
            
            statusGame = 0;

            return false;
        }

        if (b1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",
                
                
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                  
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     b1.classList.remove("win");
                     b2.classList.remove("win");
                     b3.classList.remove("win");

                }else{
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                    
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                  
                }
            }
            b1.classList.add('win');
            b2.classList.add('win');
            b3.classList.add('win');

            statusGame = 0;

            return false;
        }

        if (c1.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",  
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2;  
                    }
                     
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     c1.classList.remove("win");
                     c2.classList.remove("win");
                     c3.classList.remove("win");
                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            c1.classList.add('win');
            c2.classList.add('win');
            c3.classList.add('win'); 

            statusGame = 0;

            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b1.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>", 
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a1.classList.remove("win");
                     b1.classList.remove("win");
                     c1.classList.remove("win");
                }else{
                    
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                    
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            a1.classList.add('win');
            b1.classList.add('win');
            c1.classList.add('win');

            statusGame = 0;

            return false;
        }

        if (a2.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",  
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    //Vide les cases de la grille et supprime le message 
                     
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a2.classList.remove("win");
                     b2.classList.remove("win");
                     c2.classList.remove("win");

                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                    
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            a2.classList.add('win');
            b2.classList.add('win');
            c2.classList.add('win');

            statusGame = 0;

            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",
            });

            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a3.classList.remove("win");
                     b3.classList.remove("win");
                     c3.classList.remove("win");
                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                    
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            a3.classList.add('win');
            b3.classList.add('win');
            c3.classList.add('win');


            statusGame = 0;
            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a1.classList.remove("win");
                     b2.classList.remove("win");
                     c3.classList.remove("win");

                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win"); 

                    addmessage({
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            a1.classList.add('win');
            b2.classList.add('win');
            c3.classList.add('win');

            statusGame = 0;
            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='#' class='replay'>Rejouer</a>",
                
                
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm('Bravo '+ players[currentPlayer].name + '! Voulez-vous continuer?'))
                {
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                     a3.classList.remove("win");
                     b2.classList.remove("win");
                     c1.classList.remove("win");
                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
        
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  

                    addmessage({
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }
            a3.classList.add('win');
            b2.classList.add('win');
            c1.classList.add('win');

            statusGame = 0;

            return false;
        }

        // Combinaisons match nul + message à afficher 
        if (a1.textContent != "" &&
            a2.textContent != "" &&
            a3.textContent != "" && 
            b1.textContent != "" && 
            b2.textContent != "" && 
            b3.textContent != "" && 
            c1.textContent != "" && 
            c2.textContent != "" && 
            c3.textContent != "") {

            addmessage({
                type: "info",
                content: "Dommage aucun de vous n'a gagné la partie. <a href='#' class='replay'>Rejouer</a>"
            });
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                alert("Retentez votre chance !"); 
            }
            var replay= document.querySelector('.replay'); 
            replay.onclick = function(){
                if (confirm("Dommage aucun de vous n'a gagné la partie. Voulez vous rejouer?"))
                {
                    score.play1; 
                    score.play2; 
                    
                     //Vide les cases de la grille et supprime le message 
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = ""; 
                     msg.innerHTML = null; 
                }else{
                     
                    if(currentPlayer == 0){
                        player1 = document.getElementById("player1"); 
                        score.play1++;
                        player1.innerHTML= score.play1; 
                    }else{
                        player2 = document.getElementById("player2"); 
                        score.play2++; 
                        player2.innerHTML= score.play2; 
                        
                    }
                    
                     a1.innerHTML = ""; 
                     a2.innerHTML = ""; 
                     a3.innerHTML = ""; 
                     b1.innerHTML = ""; 
                     b2.innerHTML = ""; 
                     b3.innerHTML = ""; 
                     c1.innerHTML = ""; 
                     c2.innerHTML = ""; 
                     c3.innerHTML = "";  
                     a1.classList.remove("win");
                     a2.classList.remove("win");
                     a3.classList.remove("win");  
                    addmessage({
                    
                        type: "aurevoir",
                        content :"Merci d'avoir joué, à bientôt! <a href='index.html'>Page d'accueil</a>" 
                    });
                }
            }

            statusGame = 0;

            return false;
        }
       
        // Changement de joueur
        if (currentPlayer == 0) {
            currentPlayer = 1
            player1el.classList.remove('activeplayer');
            player2el.classList.add('activeplayer');

        } else {
            currentPlayer = 0
            player2el.classList.remove('activeplayer');
            player1el.classList.add('activeplayer');
        }
    }
});
