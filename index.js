var numberofbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var content = this.innerHTML;
        makesound(content);
        buttonAnimation(content);
    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(k) {
    switch (k) {
        case 'w':
            var sound1 = new Audio('sounds/tom-1.mp3');
            sound1.play();
            break;
        case 'a':
            var sound2 = new Audio('sounds/tom-2.mp3');
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio('sounds/tom-3.mp3');
            sound3.play();
            break;

        case "d":
            var sound4 = new Audio('sounds/tom-4.mp3');
            sound4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    }

}
function buttonAnimation(current) {

    var activeButton = document.querySelector("." + current);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}


