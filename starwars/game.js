
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

var userChoice = {
    health: "",
    attack: "",

}

var userFoe ={
    health:"",
    attack:"",

}

var oneChioce = false;

var foechoice = false;



$(".image1").on("click", function(e){
    
    var currentTarget = e.currentTarget.id;
    $("#userSelect").append(this);
    var $remaining = $('.cards');
    console.log($remaining);
    $('#foe').append($remaining);
    
  


    
   




});

$("#foe").on("click", function(){
    $("#battle").append(this);
    $("battle").append("#userSelect .image1")
    $("#foe .image1").hide();
    $("#battle").append("<button>")
        .text("ATTACK")
        .click(function (){
            var user = $(".image1:nth-child(1)").currentTarget.id;
            var enemy = $(".image1:nth-child(2)");
            var user1 =user.currentTarget.id;
            console.log(user)

            
        })
      
    
            

});


// set variables

// get the users picks 