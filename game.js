
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
// these varaiables are to match up the two objects fighting.  

 var idtoCharacter = {"mace": mace, "luke": luke, "jarjar": jarJar, "c3po":c3po}


// This prints all the object values on screen
const printToScreen = () => {
    
    $("#lhealth").text(luke.health);
    $("#lattack").text(luke.attack);
    $("#jhealth").text(jarJar.health);
    $("#jattack").text(jarJar.attack);
    $("#chealth").text(c3po.health);
    $("#cattack").text(c3po.attack);
    $("#mhealth").text(mace.health);
    $("#mattack").text(mace.attack);
}

printToScreen ();

// this moves the users character into the userSelect area, and removes it from the selector box
$(".image1").on("click", function(e){
    
    var currentTarget = e.currentTarget.id;
    $("#userSelect").append(this);
    var $remaining = $('.cards');
    
    $('#foe').append($remaining);
    
});
// this allows the user to choose which enemy they want to go up against first 
$("#foe").on("click", function(){
    $("#battle").append(this);
    $("#battle").append("#userSelect .image1")
    $("#foe .image1").hide();
    // this creates the attack button, and also the function for how attacking is giong to go
    $("#battle").append("<button> Attack! </button>")
    $("button").css({"background-color": "black", "color": "white"})
      
});

$("#battle").on("click", function(){
            // These two vars get the ids from the remaining charachters.
            var userID = $(".image1:nth-child(1)")[0].id;
            var enemyID = $(".image1:nth-child(2)")[0].id;
            // With the ID in had we match it with their respective object by matching the strings.
            var user = idtoCharacter[userID];
            var enemy = idtoCharacter[enemyID];


            const fights = () => {
                  
            user.health -= enemy.attack;
            enemy.health -= user.attack;
            user.attack += enemy.attack;
            if(user.health > 0 && enemy.health >0){
                printToScreen();
              } else if (user.health <= 0) {
                // The user lost
                $("#foe").append("<div>")
                    .text("You've Lost!!");
              } else {
                // the user won
                $("#foe").append("<div>")
                    .text("You've Won!");
              }
            

            }
        fights ();

  
});


