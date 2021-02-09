console.log("TIC TAC TOE v1");

// Initialisation des joueurs

/* joueur1 = prompt("Joueur 1: Entrez votre nom"); 
play1 = prompt("Joueur 1: Entrez votre pion"); 
joueur2 = prompt("Joueur 2: Entrez votre nom"); 
play2 = prompt("Joueur 2: Entrez votre pion"); */

var url = new URL(location.href); 
var joueur1 = url.searchParams.get("joueur1");
var joueur2 = url.searchParams.get("joueur2"); 
var play1 = url.searchParams.get("play1"); 
var play2 = url.searchParams.get("play2"); 



var players =[{
    name: joueur1,
    play: play1
},{
    name: joueur2,
    play: play2
}];

var messages = [];

var statusGame = 0;

var msg = document.querySelector('.msg');
var cases = document.querySelectorAll(".case");
var player1el = document.querySelector('.player1');
var player2el = document.querySelector('.player2');

// On gère la grille
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
player1el.innerHTML = players[0].play + ": " + players[0].name;
player2el.innerHTML = players[1].play + ": " + players[1].name;
var currentPlayer = 0;

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

        // Gére les doubles clics
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

        // Combinaison pour qu'un joueur gagne 
        // console.log(a1.textContent);
        if (a1.textContent == players[currentPlayer].play && 
            a2.textContent == players[currentPlayer].play && 
            a3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " + players[currentPlayer].name + " qui a gagné la partie.<a href='index.html' class='replay'>Rejouer</a>"
                
            });
            
            a1.classList.add('win');
            a2.classList.add('win');
            a3.classList.add('win');

            statusGame = 1;

            return false;
            
        }

        if (b1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
                
            });

            b1.classList.add('win');
            b2.classList.add('win');
            b3.classList.add('win');

            statusGame = 1;

            return false;
            restartGame; 
        }

        if (c1.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            c1.classList.add('win');
            c2.classList.add('win');
            c3.classList.add('win');

            statusGame = 1;

            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b1.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            a1.classList.add('win');
            b1.classList.add('win');
            c1.classList.add('win');

            statusGame = 1;

            return false;
        }

        if (a2.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            a2.classList.add('win');
            b2.classList.add('win');
            c2.classList.add('win');

            statusGame = 1;

            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            a3.classList.add('win');
            b3.classList.add('win');
            c3.classList.add('win');

            statusGame = 1;

            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            a1.classList.add('win');
            b2.classList.add('win');
            c3.classList.add('win');

            statusGame = 1;

            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            addmessage({
                type: "success",
                content: "Bravo c'est " +players[currentPlayer].name + " qui a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
            });

            a3.classList.add('win');
            b2.classList.add('win');
            c1.classList.add('win');

            statusGame = 1;

            return false;
        }

        // Cas où personne ne gagne 
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
                content: "Dommage aucun de vous n'a gagné la partie. <a href='index.html' class='replay'>Rejouer</a>"
                
            });

            statusGame = 1;

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

