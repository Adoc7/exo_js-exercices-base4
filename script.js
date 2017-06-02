let quiz = [
    {
        "question": "Qui a inventé la dynamite?",
        "choix": [
            "John Trinit",
            "Paul Craine",
            "Alfred Nobel",
            "John Dynamite"
        ],
        "correct":"Alfred Nobel",
    },
    {
        "question": "Qui a inventé le téléphone?",
        "choix":[
            "Alexander Graham Bell",
            "Benjamin Franklin",
            "Thomas Edison",
            "Ma femme"
        ],
        "correct":"Thomas Edison",
    },
    {
        "question":"A qui doit-on la pénicilline?",
        "choix":[
            "Sir Alexander Fleming",
            "Louis Pasteur",
            "Antoine Lavoisier",
            "Alfred Pénicilline"
        ],
        "correct":"Sir Alexander Fleming",
    },
    {
        "question" :"Qui a inventé la boîte de conserve?",
        "choix":[
            "Joseph Cugnot",
            "Auguste Denayrouze",
            "Cédan Laboite",
            "Nicolas Appert"
        ],
        "correct":"Nicolas Appert",
    }


];

//

       // document.getElementById('quest').innerHTML += quiz[3].question;
       // document.getElementById('prop_1').innerHTML += quiz[3].choix[0];
       // document.getElementById('prop_2').innerHTML += quiz[3].choix[1];
       // document.getElementById('prop_3').innerHTML += quiz[3].choix[2];
       // document.getElementById('prop_4').innerHTML += quiz[3].choix[3];
       //  document.getElementById('soluce').innerHTML += quiz[3].correct;


// function clic_suiv(){
// for (var i=0; i<quiz.length;i++){
//     document.getElementById('quest').innerHTML = quiz[i].question;
//     document.getElementById('prop_1').innerHTML = quiz[i].choix[0];
//     document.getElementById('prop_2').innerHTML = quiz[i].choix[1];
//     document.getElementById('prop_3').innerHTML = quiz[i].choix[2];
//     document.getElementById('prop_4').innerHTML = quiz[i].choix[3];
//     document.getElementById('soluce').innerHTML = quiz[i].correct;
//     }
//  }


// var liste=document.getElementById('livre').innerHTML+=quiz[i].choix[0];
//              +books[i].author+"<br>"
//              +books[i].link+"<br>"
//              +books[i].type+"<br>"+"<br>";


function affichage(){
    document.getElementById('quiz').innerHTML = quizz[i].question;
    document.getElementById('prop_1').innerHTML = quizz[i].choix[0];
    document.getElementById('prop_2').innerHTML = quizz[i].choix[1];
    document.getElementById('prop_3').innerHTML = quizz[i].choix[2];
    document.getElementById('prop_4').innerHTML = quizz[i].choix[3];
};

var i=0;
affichage();


document.getElementById('bt_suiv').onclick = function() {
    if (i < 4) {
        i++;
    }
    affichage();
}



document.getElementById('bt_prec').onclick = function() {

    if (i > 0) {
        i--;
    }
    affichage();
}
// Add Comment Collapse