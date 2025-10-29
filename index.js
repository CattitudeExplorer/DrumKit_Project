
// Detecting when any drum button is clicked
// Loop through all buttons with the class .drum and add event listeners
var buttons = document.querySelectorAll(".drum").length; 
for(var i = 0; i < buttons; i++) {
    // Add a click event listener to each button
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // Get the innerHTML (the letter) of the clicked button
        var letter = this.innerHTML;  
        
        // Call the makeSound function to play the corresponding sound based on the letter
        makeSound(letter);

        // Trigger the button animation based on the clicked letter
        buttonAnimation(letter);
    });
}

// Detecting when a keyboard key is pressed
document.addEventListener("keydown", function(event) {   
    //console.log(event.key);
    makeSound(event.key);  // event.key will trigger sound for matching keys in the switch statement
    buttonAnimation(event.key);
});

// Play sound based on the pressed key
function makeSound(character) {

    switch (character) {
        case "w":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        default:
            console.log(character);
            break;
       }  
    return character;
}
// Make the button look like it was pressed by applying pressed class from css and removing after 100ms
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);   // select each button that is pressed (.w .a .s  and so on);

    activeButton.classList.add("pressed");   // the css class that make the button selected seems like it's pressed (box-shadow) 

    // After 100ms, remove the pressed class to give the effect of the button being released
    var myTimeout = setTimeout(function(){    
        activeButton.classList.remove("pressed");   
    }, 100);
}