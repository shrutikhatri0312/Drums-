var td = document.querySelectorAll(".drum").length ;
for( var i = 0 ; i < td ; i++ ){
    var dname = document.querySelectorAll(".drum")[i].innerHTML;  
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        drumroll( this.innerHTML ) ;
        animate( this.innerHTML ) ;
    } 
    ) ;
}
document.addEventListener("keypress", function(event) {
    drumroll(event.key);
    animate(event.key);
} );

function animate( drumname ){
    var cname = "." +  drumname.toLowerCase();
    var activebutton = document.querySelector(cname);
    activebutton.classList.add("pressed") ;
    setTimeout( function(){
        activebutton.classList.remove("pressed") ;
    } , 200 ) ; 
}

function drumroll( dname ){  
    var x = dname.toUpperCase() ;  
    switch( x ){ 
        case "W" :{
            var tom1 = new Audio("sounds/tom-1.mp3") ;
            tom1.play() ; 
            break;
        }
        case "A" :{
            var tom2 = new Audio("sounds/tom-2.mp3") ;
            tom2.play() ; 
            break;
        }
        case "S" :{
            var tom3 = new Audio("sounds/tom-3.mp3") ;
            tom3.play() ; 
            break;
        }
        case "D" :{
            var tom4 = new Audio("sounds/tom-4.mp3") ;
            tom4.play() ; 
            break;
        }
        case "J" :{
            var snare = new Audio("sounds/snare.mp3") ;
            snare.play() ; 
            break;
        }
        case "K" :{
            var crash = new Audio("sounds/crash.mp3") ;
            crash.play() ; 
            break;
        }
        case "L" :{
            var audio = new Audio("sounds/kick-bass.mp3") ;
            audio.play() ; 
            break;
        }
    }
} 

