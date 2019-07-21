console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", challengeOne)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function createDog(dog) {
    const dogList = document.getElementById("dog-image-container")
    
    let section = document.createElement("section")
    let img = document.createElement("img")
    img.src = dog
    section.appendChild(img)
    dogList.appendChild(section)
    console.log(dog)
}


function createDoglist(data) {
    data.message.forEach(createDog)
}

function challengeOne(){
    fetch(imgUrl)
    .then(response => response.json() )
    .then(data => createDoglist(data))
 }

