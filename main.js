let colors = ['white', 'black'];

let button = document.getElementById('button');
// add eventlistener
button.addEventListener('click', function() {
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let energy = document.getElementById('energy');

    energy.style.background = randomColor;

})


