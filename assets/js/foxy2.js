fetch('https://randomfox.ca/floof/')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    // console.log(response)
         var body = document.body;
    var fox = document.getElementById('foxImg');
    var image = response.image;
    var foxImgEl = document.createElement('img');
    body.appendChild(fox);
    foxImgEl.setAttribute('src', image);
    foxImgEl.setAttribute('class', 'fox-style')
    fox.appendChild(foxImgEl);
})

//var display = document.getElementById("foxfacts");
//var foxFacts = [
 
function randomfoxfact () {
   var foxfacts = Math.floor(Math.random()*(randomfoxfact.length));
//  document.getElementById('NEED ID NAME').innerhtml = randomfoxfact[foxfacts];
}




// console.log(foxFacts);



