console.log('%c HI', 'color: firebrick')
// ________________________________________________________________________________________________
// => challengeOne
document.addEventListener('DOMContentLoaded', () => {
    // challengeOne()
    // setTimeout(3000)
    challengeTwo()
   })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let selection = document.querySelector("#breed-dropdown");

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

// challengeTwo

//borrowed
function handleChangeColor(event){
    event.target.style.color = 'blue'
  }

// Selection of species

   // console.log(data);
function createBreedList(data) {
    let breeds = Object.keys(data.message);
    let selection = document.querySelector("#breed-dropdown");
    let selectedLetter = selection.addEventListener('click', onButtonClick)
    debugger
    const  breedList = document.getElementById("dog-breeds")
    for(let a = 0; a < breeds.length; a++){
        let item = breeds[a]
        let breedOption = document.createElement("li")
        breedOption.innerHTML = item
        let breedOptionContent = breedOption.innerHTML
        // console.log(breedOptionContent[0]);
        // listend to the innerHtml of select option and return 
        // selectedBreed()
        breedOption.addEventListener('click', handleChangeColor)
        breedList.appendChild(breedOption)
    }
}
function challengeTwo(){
    fetch(breedUrl)
    .then(response => response.json() )
    .then(data => createBreedList(data))
    // .then(data => data)

    let selection = document.querySelector("#breed-dropdown");
    let selectedLetter = selection.addEventListener('click', onButtonClick)
    // createBreedList(data)
 }

//----------------------------------------------------------------------------
//=> challenge 4 


    var onButtonClick = function() {
        let breedLetter = selection.options[selection.selectedIndex].value;
        return breedLetter

    };


// Final Considerations
// 1. Load the page with the header and drop down
// 2. Load species based on the value of the drop down btn selction
// 3. Load all the randon pictures of dogs