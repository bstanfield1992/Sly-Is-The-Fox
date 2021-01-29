
fetch('https://opentdb.com/api.php?amount=10&type=multiple')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)
})

fetch('https://randomfox.ca/floof/')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)
         var body = document.body;
    var div1 = document.createElement('div');
    var image = response.image;
    var imageEl = document.createElement('img');
    body.appendChild(div1);
    imageEl.setAttribute('src', image);
    div1.appendChild(imageEl);
})