// const fetch = require('isomorphic-fetch')
const baseURL = 'https://v2.jokeapi.dev/joke/Any?'
const safeMode = 'safe-mode'
const frenchMode = 'lang=fr'

let setupHTML = document.getElementById('setup')
let deliveryHTML = document.getElementById('delivery')

const fetchJokes = async (event) => {
    if (event.target.id === 'safebtn'){
        const response = await fetch(baseURL + safeMode).then(response => response.json())

        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke
    
        displayJokes(setup, delivery, joke)
    } else if (event.target.id === 'frenchbtn'){
        const response = await fetch(baseURL + frenchMode).then(response => response.json())

        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke
    
        displayJokes(setup, delivery, joke)
    } else {
        const response = await fetch(baseURL).then(response => response.json())

        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke
    
        displayJokes(setup, delivery, joke)
    }
}

function displayJokes(setup, delivery, joke){

    if(setup){
    setupHTML.innerText = setup
    deliveryHTML.innerText = delivery
    } else {
        setupHTML.innerText = joke
        deliveryHTML.innerText = ""
    }
}

let button = document.getElementById('jokeButton')
button.addEventListener('click', fetchJokes)

let safeButton = document.getElementById('safebtn')
safeButton.addEventListener('click', fetchJokes)

let frenchButton = document.getElementById('frenchbtn')
frenchButton.addEventListener('click', fetchJokes)

fetchJokes()

module.exports = fetchJokes