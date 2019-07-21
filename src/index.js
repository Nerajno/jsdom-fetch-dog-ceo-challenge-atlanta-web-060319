console.log('%c HI', 'color: firebrick')

// ________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded",challengeTwo)

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function createDog(dog) {
    const dogList = document.getElementById("dog-image-container")
    
    let section = document.createElement("section")
    let img = document.createElement("img")
    img.src = dog
    section.appendChild(img)
    dogList.appendChild(section)
}

function createDoglist(data) {
    data.message.forEach(createDog)
}

function challengeOne(){
    fetch(imgUrl)
    .then(response => response.json() )
    .then(data => createDoglist(data))
 }

//__________________________________________________________________________________________________________
// document.addEventListener("DOMContentLoaded",challengeOne)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// function createBreedListing(breed) {
//     const  breedList = document.getElementById("dog-breeds")
//     for(let a = 0; a <)
// }

function createBreedList(data) {
    console.log(data);
    
    let breeds = Object.keys(data.message);
    // debugger
    // const  breedList = document.getElementById("dog-breeds")
    const  breedList = document.getElementById("breed-dropdown")
    for(let a = 0; a < breeds.length; a++){
        let item = breeds[a]
        let breedOption = document.createElement("option")
        breedOption.innerHTML = item
        breedList.appendChild(breedOption)
    }
}
function challengeTwo(){
    fetch(breedUrl)
    .then(response => response.json() )
    .then(data => createBreedList(data))
 }

