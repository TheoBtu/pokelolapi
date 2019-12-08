
//////////////////////////// POKÉMON API ////////////////////////////

function namepokemon(){
    const pokeapi = {
        url:'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        name: document.getElementById('1').value
    }


    const {url, type, name} = pokeapi
    const pokeapiurl = `${url}${type}/${name}`
    // console.log(pokeapiurl)
    fetch(pokeapiurl)                                      // Récupérer l'information
        .then( (poke) => (poke.json()) )                   // Permet de garder la data pour l'utiliser plus tard
        .then( (pokemon) => generateHTML((pokemon) ))

    const generateHTML = (data) => {
        //console.log(data)
        const html = `
        <div class="formpokemon">
        <div class="namepokemon"><h2>${data.name}</h2></div>
        <img class="imagepokemon" src=${data.sprites.front_default}>
        <div class="detailspokemon">
            <span> <h3> Élément : ${data.types[0].type.name} </h3></span>
        </div>
        </div>
        `
        const pokemondiv = document.querySelector('.container')
        pokemondiv.innerHTML = html
    }
}

//////////////////////////// LEAGUE OF LEGENDS API ////////////////////////////

function namechamp(){
    const lolapi = {
        url:'http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/',
        type: 'champion',
        name: document.getElementById('2').value,
        end: '.json'
    }

    const {url, type, name, end} = lolapi
    const lolapiurl = `${url}${type}/${name}${end}`
     //console.log(lolapiurl)

    fetch(lolapiurl)                                      // Récupérer l'information
        .then( (champ) => (champ.json()) )                   // Permet de garder la data pour l'utiliser plus tard
        .then( (champion) => generateHTML((champion) ))

    const generateHTML = (render) => {
        var key = Object.keys(render.data)[0];
        //console.log(Object.keys(render.data)[0]);

        /*
        let name_champ = `${render.data[key]}`;
        let jpg =`_0.jpg`;

        let url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/
            ${name_champ}/
            ${jpg}`
            ;
        console.log(url);
        */

        var image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + key + '_0.jpg'
        console.log(image);


        const html = `
        <div class="formlol">
        <div class="namechampion"><h2>${render.data[key].name}</h2></div>
        <img class="imagelol" src="${image}">
        <div class="detailschamp">
            <span> <h3> Attack : ${render.data[key].info.attack} </h3></span>
            <span> <h3> Defense : ${render.data[key].info.defense} </h3></span>
            <span> <h3> Magic : ${render.data[key].info.magic} </h3></span>
            <span> <h3> Difficulty : ${render.data[key].info.difficulty} </h3></span>
        </div>
        </div>
        `
        const loldiv = document.querySelector('.container')
        loldiv.innerHTML = html
    }
}