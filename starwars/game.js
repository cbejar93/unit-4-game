
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
// I don't remember what this is for, I just like to have a lot of vars just in case
var userChoice = {
    health: "",
    attack: "",

}

var userFoe ={
    health:"",
    attack:"",

}
var attackagain = true;
var button = false;

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
    $("#battle").append("<button>")
        .text("ATTACK")
      
});

$("#battle").on("click", function(){
            // These two vars get the ids from the remaining charachters.
            var userID = $(".image1:nth-child(1)")[0].id;
            var enemyID = $(".image1:nth-child(2)")[0].id;
            // With the ID in had we match it with their respective object by matching the strings.
            // var attacker = idtoCharacter[userID];
            // var defender = idtoCharacter[enemyID];
            // // this is the dynamic variables that should change to represent the attack   
            // var dcurrenthealth;
            // var acurrenthealth;
            // var button = false 
            
            // // From the objects respective object values we get the correct and starting health and attack stats of the characters. 
            // var attackerhealth = attacker.health;
            // var attackerattack= attacker.attack;

            // var enemyhealth = defender.health;
            // var enemyattack = defender.attack;
            // console.log(enemyhealth);

            const fights = () => {
                // Luke fight series 
                if (userID=="luke" && enemyID=="c3po"){
                        luke.health-=c3po.attack;
                        c3po.health-=luke.attack
                        printToScreen ();
                }
                if (userID=="luke" && enemyID=="jarjar"){
                    luke.health-=jarJar.attack;
                    jarJar.health-=luke.attack
                    printToScreen ();
                }
                if (userID=="luke" && enemyID=="mace"){
                luke.health-=mace.attack;
                mace.health-=luke.attack
                printToScreen ();
                }
            
            // C3PO fight series of functions 
            if (userID=="c3po" && enemyID=="luke"){
                c3po.health-=luke.attack;
                luke.health-=c3po.attack
                printToScreen ();
            }
            if (userID=="c3po" && enemyID=="jarJar"){
                c3po.health-=jarJar.attack;
                c3po.health-=c3po.attack
                printToScreen ();
            }
            if (userID=="c3po" && enemyID=="mace"){
                c3po.health-=mace.attack;
                mace.health-=c3po.attack
                printToScreen ();
            }

            // JARJARS fight series 
            if (userID=="jarJar" && enemyID=="luke"){
                jarJar.health-=luke.attack;
                luke.health-=jarJar.attack
                printToScreen ();
            }
            if (userID=="jarJar" && enemyID=="c3po"){
                jarJar.health-=c3po.attack;
                c3po.health-=jarJar.attack
                printToScreen ();
            }
            if (userID=="jarJar" && enemyID=="mace"){
                jarJar.health-=mace.attack;
                mace.health-=jarJar.attack
                printToScreen ();
            }

            // Mace fight series
            if (userID=="mace" && enemyID=="luke"){
                jarJar.health-=luke.attack;
                luke.health-=jarJar.attack
                printToScreen ();
            }

            }
        fights ();

    console.log(userID);          
    console.log(enemyID);  

        
            // if(button=false){
            //     dcurrenthealth= enemyhealth-= attackerhealth;
            //     acurrenthealth=attackerhealth-=enemyattack;
            //     button = true;
            //     attackagain=false;
            //     return;
            // }else if (button=true){
            //     if (dcurrenthealth > 0 && acurrenthealth > 0){
            //             dcurrenthealth -= attackerattack;
            //             attackagain=false;
            //             return;
            //     }
            // }
            
            
            
        
            
            // var button = true;
            // function attack1(attacker, defender){
                
            
            //     var dcurrenthealth;
            //     var acurrenthealth;
            //     if (button){
            //         dcurrenthealth = defender.health - attacker.attack;
            //         acurrenthealth = attacker.health - defender.attack;
            //         test= false;
            //         return dcurrenthealth;
            //         return acurrenthealth;
            //     }else{
            //         dcurrenthealth-attacker.attack;
            //         acurrenthealth-defender.health;
            //     }
            //      console.log(dcurrenthealth);
            // }
            
  
});


