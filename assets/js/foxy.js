fetch('https://randomfox.ca/floof/')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)
         var body = document.body;
    var fox = document.getElementById('foxImg');
    var image = response.image;
    var imageEl = document.createElement('img');
    body.appendChild(fox);
    imageEl.setAttribute('src', image);
    imageEl.setAttribute('class', 'fox-style')
    fox.appendChild(imageEl);
})