var pokeSearch = document.getElementById('search-bar')
var pic = document.getElementById('pokeball-pic')
var log = console.log.bind(log)
var pokemon
var pokeStats

function getVal(){
    pokemon = pokeSearch.value
    log(pokemon)
}

async function iChooseU(){
    var pokeResults = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    log(pokeResults)
    pokeResults = await pokeResults.json()
    log(pokeResults)
    pokeStats = document.getElementById('stats-list')
    log(pokeStats)
    pokeStats.innerHTML = `<li>Name: ${pokeResults.name}</li> <br> <li>Type: ${pokeResults.types[0].type.name}</li>`  
    pic.src = pokeResults.sprites.front_shiny
}

