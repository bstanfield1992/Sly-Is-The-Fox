//this pulls a Picture of the day or "apod"
// fetch('https://images-api.nasa.gov/search?q=orion?api_key=l1W16WWGhiIw702cJtoH6beTwoywriKr6libgf5l')
// .then(function(response) {
//     return response.json();
// })
// .then(function(response) {
//     console.log(response)
// })

// fetch('https://pokeapi.co/api/v2/pokemon/charizard')
// .then(function(response) {
//     return response.json();
// })
// .then(function(response) {
//     console.log(response)
//     var body = document.body;
//     var div1 = document.createElement('div');
//     var image = response.sprites.front_shiny;
//     var imageEl = document.createElement('img');
//     body.appendChild(div1);
//     imageEl.setAttribute('src', image);
//     div1.appendChild(imageEl);
// })

// https://opentdb.com/api.php?amount=4&category=15&difficulty=easy&type=boolean


fetch('https://opentdb.com/api.php?amount=10&type=multiple')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)
    //      var body = document.body;
    // var div1 = document.createElement('div');
    // var image = response.image;
    // var imageEl = document.createElement('img');
    // body.appendChild(div1);
    // imageEl.setAttribute('src', image);
    // div1.appendChild(imageEl);
})