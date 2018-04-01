
// defining global variables 
var luke = { 
    health: 100, 
    attack: 16
    }


var jarJar = {health: 110, 
        attack:26}

var c3po = {health: 69,
         attack:7}

var mace = {health: 97, 
         attack:17}
// these varaiables are for the 2 objects fighting. 

 var idtoCharacter = {"mace": mace, "luke": luke, "jarjar": jarjar, "c3po":c3po}

var userChoice = {
    health: "",
    attack: "",

}

var userFoe ={
    health:"",
    attack:"",

}
$(document).ready(function(){
      $(".row").hover(function(){
      $(".row").css("background-color", "#66afff");
    });
});


// this moves the users character into the userSelect area, and removes it from the selector box
$(".image1").on("click", function(e){
    
    var currentTarget = e.currentTarget.id;
    $("#userSelect").append(this);
    var $remaining = $('.cards');
    console.log($remaining);
    $('#foe').append($remaining);
    
  


    
   




});
// this allows the user to choose which enemy they want to go up against first 
$("#foe").on("click", function(){
    $("#battle").append(this);
    $("#battle").append("#userSelect .image1")
    $("#foe .image1").hide();
    // this creates the attack button, and also the function for how attacking is giong to go
    $("#battle").append("<button>")
        .text("ATTACK")
        // .click(function (){
            // this is supposed to target the two images on the screen, the problem is I'm trying to just target the elements id so I can do if/else 
            // statements and match the picture up with the objects 
            // for example the picture is luke so i want to get the id luke so i can get the object attributes.e
            // var userID = $(".image1:nth-child(1)")[0].id;
            // var enemyID = $(".image1:nth-child(2)")[0].id;
            // var user = idtoCharacter[userID];
            // var enemy = idtoCharacter[enemyID];
            // console.log(user);
            
        // })
      
    
            

});

$("#battle").on("click", function(){
            // These two vars get the ids from the remaining charachters.
            var userID = $(".image1:nth-child(1)")[0].id;
            var enemyID = $(".image1:nth-child(2)")[0].id;
            // With the ID in had we match it with their respective object by matching the strings.
            var user = idtoCharacter[userID];
            var enemy = idtoCharacter[enemyID];
            console.log(user);
            // From the objects respective object values we get the correct health and attack stats of the characters. 
            attackerhealth = user.health;
            attackerattack= user.attack;

            enemyhealth = enemy.health;
            enemyattack = enemy.attack;
            console.log(enemyhealth);
});


// set variables

// get the users picks 