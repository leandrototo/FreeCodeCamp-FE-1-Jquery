var colors = ['001b2e', '294c60', 'adb6c4', 'cbc0d3', 'efd3d7']
var quotes = [
    'It’s not about ideas. It’s about making ideas happen.',
    'Always deliver more than expected.',
    'The most courageous act is still to think for yourself. Aloud.',
    'What would you do if you were not afraid?',
    'Nothing will work unless you do.',
    'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
    'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
    'One does not discover new lands without consenting to lose sight of the shore for a very long time.',
    'Surround yourself with only people who are going to lift you higher.',
]
var authores = [
    'Pablo Neruda',
    'Leandro Toto',
    'Agustina Feigelson',
    'Jose Luis Borges',
    'Ernesto Sábato',
    'Alberto Elía',
    'Sarmiento',
    'San Martín',
    'Carlos Menem',
]

function changeQuote() {
    var randQuote = Math.floor(Math.random() * 10) + 1;
    return $("#text").html(quotes[randQuote - 1])
}

function changeAuthor() {
    var randQuote = Math.floor(Math.random() * 10) + 1;
    return $("#author").html(authores[randQuote - 1])
}

function changeColor() {
    var randColor = Math.floor(Math.random() * 5) + 1;
    var newColor = '#' + colors[randColor - 1]
    $("#container").css("background-color", newColor)
}

function onClick() {
    changeQuote();
    changeColor();
    changeAuthor();
}

onClick();

$(document).on('click', '#new-quote', function () {
    event.preventDefault();
    onClick()
});


