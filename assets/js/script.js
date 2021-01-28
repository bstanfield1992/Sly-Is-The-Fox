//this pulls a Picture of the day or "apod"
fetch('https://api.nasa.gov/planetary/apod?api_key=l1W16WWGhiIw702cJtoH6beTwoywriKr6libgf5l')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)
})