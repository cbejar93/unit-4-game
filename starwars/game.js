
// defining global variables 
var luke = { 
    health: 100, 
    attack: function(){
        return Math.floor(Math.random()*50);
    }
}

var jarJar = {health: 100, 
        attack: function(){
                return Math.floor(Math.random()*50); }}

var c3po = {health: 100,
         attack:function(){
            return Math.floor(Math.random()*50);} }

var mace = {health: 100, 
         attack:function(){
        return Math.floor(Math.random()*50);} }
// these varaiables are for the 2 objects fighting. 
var userChoice = {
    health: "",
    attack: "",

}

var userFoe ={
    health:"",
    attack:"",

}


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
    $("battle").append("#userSelect .image1")
    $("#foe .image1").hide();
    // this creates the attack button, and also the function for how attacking is giong to go
    $("#battle").append("<button>")
        .text("ATTACK")
        .click(function (){
            // this is supposed to target the two images on the screen, the problem is I'm trying to just target the elements id so I can do if/else 
            // statements and match the picture up with the objects 
            // for example the picture is luke so i want to get the id luke so i can get the object attributes.e
            var user = $(".image1:nth-child(1)").currentTarget.id;
            var enemy = $(".image1:nth-child(2)");
            var user1 =user.currentTarget.id;
            console.log(user)

            
        })
      
    
            

});


// set variables

// get the users picks 