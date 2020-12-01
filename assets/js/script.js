//Récupérer les éléments du site
//accueil
let start = document.getElementById("start");
let rules = document.getElementById("");
let credits = document.getElementById("");
//jeux
//Emplacements questions
let questions = document.getElementById("questionSpace");
//boutons réponses
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");


//questions
let questionList = ["La terre est ?", "Qui est le mari de la femme du frère de ma tante ?", "Quel est le hérisson à la vitesse supersonique possédant une folle collection d'anneaux ?",

    "Quel est le nouveau prix d'une jupe à 50 euros soldée à 20% ?", `Combien y a-t-il de "a" dans le mot abracadabrantesque ?`, "D'où Satoshi Tajiri a-t-il eu l'idée des Pokémons ?", "Quel animal possède deux pénis ?", "Certains mois de l'année comptent 31 jours. Combien en ont 28 ?",
    "Quel effet parasite produit-on en rapprochant 1 micro d'1 haut-parleur ?", "Avec 4 poules, 2 coqs et 1 cochon, combien peut-on compter de pattes ?", "Un Canard pond un oeuf toutes les 2 heures. Combien de temps va t-il prendre pour pondre 3 oeufs ?",
    "Quelle est la couleur d'une boite noire d'un avion de ligne ?", "Que récompensent chaque année les Darwin Awards, créés aux Etats-Unis en 1993 ?", "Dans quel jeu le personnage de Mario a-t-il été développé en premier ?",
    "Qui livre les cadeaux de noel ?", "Qui est l'anciennne mascotte de sega?", "Quel nom porte la plus petite partie d'une image numérique ?", `De quelle saga cinématographique fait partie le film "L'Oeil du tigre" ?`, `Lequel de ces navires ne se retrouvent pas dans le "Toucher-Couler"`, "Avez-vous aimé ce jeu ?"
]

let answerArray0 = ["ronde", "carré", "plate"];
let answerArray1 = ["Mon oncle", "Mon cousin", "Mon père"];
let answerArray2 = ["Sonic", "Hamtaro", "Tails"];
let answerArray3 = ["40€", "30€", "45€"];
let answerArray4 = ["5", "6", "4"];
let answerArray5 = ["Des chrysalides se transformant en papillon", "Dans un manga sur la métamorphose", "D'un roman de Sci-Fi Japonais"];
let answerArray6 = ["Le requin", "l'alligator", "le boa"];
let answerArray7 = ["12", "1", "6"];
let answerArray8 = ["Un larsen", "un larson", "c'est très chiant"];
let answerArray9 = ["16", "8", "12"];
let answerArray10 = ["0", "6", "4"];
let answerArray11 = ["orange - jaune", " noire - marron", "bleue"];
let answerArray12 = ["Les morts les plus stupides", "Les meilleures variétés de pommes", "Les découvertes les + insolites"];
let answerArray13 = ["Donkey Kong", "Super Mario", "Super Mario Kart"];
let answerArray14 = ["Le père Noël", "Saint-Nicolas", "Thibault :)"];
let answerArray15 = ["Alex Kid", "Alex Adult", "Alex Junior"];
let answerArray16 = ["un pixel", "un xipel", "un lepix"];
let answerArray17 = ["Rocky", "Une saison au zoo", "Terminator"];
let answerArray18 = ["Le Sous-marin", "le porte-avion", "le torpilleur"];
let answerArray19 = ["Absolument", "pas trop", "je ne sais pas"];


// 0 = pas commencé, 1-20 = commencé, 21 = terminé
let nextQuestion = 0;
let checkTOF = 0;

//réponses
var warningSound = new Audio("assets/sound/tic.wav");

//Fonctions utiles
//timer pour les questions
function Timer() {
    var timeQuestion = 10;
    var Timer = setInterval(function () {
        if (timeQuestion <= 5) {
            document.getElementById("countdown").classList.add("warning");
        }
        if (timeQuestion <= 3) {
            document.getElementById("countdown").classList.remove("warning")
            document.getElementById("countdown").classList.add("danger");
            warningSound.play();
        }
        if (timeQuestion <= 0) {
            clearInterval(Timer);
            document.getElementById("countdown").innerHTML = "Terminé";
            document.getElementById("countdown").classList.remove("danger");
            answer1.classList.add("invisible");
            answer2.classList.add("invisible");
            answer3.classList.add("invisible");
        } else {
            document.getElementById("countdown").innerHTML = timeQuestion;
        }
        timeQuestion -= 1;
    }, 1000);
}
//Sons

function sound() {
    if (checkTOF == 1) {
        new Audio("assets/sound/true.wav").play();
    } else if (checkTOF == 2) {
        new Audio("assets/sound/false.wav").play();
    }
}


start.onclick = function () {
    game()
    start.classList.add("invisible")

}




function game() {
    switch (nextQuestion) {
        case 0:
            answer1.innerHTML = answerArray0[0];
            answer1.setAttribute("onclick", "valider('0_0')")
            answer2.innerHTML = answerArray0[1];
            answer2.setAttribute("onclick", "valider('0_1')")
            answer3.innerHTML = answerArray0[2];
            answer3.setAttribute("onclick", "valider('0_2')")
            questions.innerHTML = questionList[0];
            Timer()
            break;
        // case 1:
        //     answer1.innerHTML = answerArray1[0];
        //     answer1.setAttribute("onclick", "valider('0_0')")
        //     answer2.innerHTML = answerArray1[1];
        //     answer2.setAttribute("onclick", "valider('0_1')")
        //     answer3.innerHTML = answerArray1[2];
        //     answer3.setAttribute("onclick", "valider('0_2')")
        //     questions.innerHTML = questionList[1];
        //     Timer()
        //     break;
        // case 2:
        //     answer1.innerHTML = answerArray0[2];
        //     answer2.innerHTML = answerArray0[1];
        //     answer3.innerHTML = answerArray0[0];
        //     questions.innerHTML = questionList[2];
        //     break;
    }
}

function valider(answer) {
    let question = parseInt(answer.split("_")[0])
    let answerUser = parseInt(answer.split("_")[1])
    console.log(question,answerUser)
    if (question == 0) {
        if (answerArray0[answerUser] == answerArray0[0]) {
            console.log("true")
            checkTOF = 1;
            sound();
            checkTOF = 0;
            nextQuestion += 1;
        } else {
            checkTOF = 2;
            sound();
            checkTOF = 0;
            nextQuestion += 1;
        }
    } else if (question == 1){
        if (answerArray1[answerUser] == answerArray1[0]) {
            console.log("true")
            checkTOF = 1;
            sound();
            checkTOF = 0;
            nextQuestion += 1;
        } else {
            checkTOF = 2;
            sound();
            checkTOF = 0;
            nextQuestion += 1;
        }
    }
}