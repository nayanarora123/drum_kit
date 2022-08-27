// Detecting Click 

// for(i=0; i<document.querySelectorAll(".drum").length; i++){

// document.querySelectorAll(".drum")[i].addEventListener("click",  (event) => {
    
//     makeSound(event.target.innerHTML);

//  //or you can use simple anonymous function and write (this.innerHTML) inside it.

//     buttonAnimation(event.target.innerHTML);

// });
// }  

// ----------------------------------------------or---------------------------------------------

const drumButton = document.querySelectorAll(".drum");

drumButton.forEach((event, index , arr)=>{

    drumButton[index].addEventListener("click", (event)=>{

        makeSound(event.target.innerHTML);

        buttonAnimation(event.target.innerHTML);

        console.log(event);
    })
        
});


// Detecting Keyboard Button

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // console.log(event);
});


//Function of Clicks and Keyboard Buttons

function makeSound(key){
    
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            
        default: console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    document.querySelector(`.${currentKey}`).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100)
}