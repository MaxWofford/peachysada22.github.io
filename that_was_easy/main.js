function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeyPress);

function delegateKeypress(event) {
    if (event.chorCode == 32) {
        $("#easy").tigger("click");
    }
}
