function getPokemon() {
    let search = document.getElementById('search');
    let pokemon = search.value.toLowerCase(); // Esto les convierte en minuscula cualquier palabra para evitar errores gramaticales

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // Aca deberán agregar en una variable los nuevos campos que desean buscar 

            let name = data.name;
            let type = "Tipo: " + data.types[0].type.name;
            let sprite = data.sprites.front_default;
            let weight = data.weight + " lb";
            
            let ability = "Habilidad: " + data.abilities[0].ability.name;
            let hp = "hp: " + data.stats[0].base_stat;
            let attack = "Ataque: " + data.stats[1].base_stat;
            let defense = "Defensa: " + data.stats[2].base_stat;;
            let specialAttack = "Ataque especial: " + data.stats[3].base_stat;
            let specialDefense = "Defensa especial: " + data.stats[4].base_stat;
            let speed = "Velocidad: " + data.stats[5].base_stat;

            

            document.getElementById('name').textContent = name;
            document.getElementById('type').textContent = type;
            document.getElementById('weight').textContent = weight;
            
            document.getElementById('ability').textContent = ability;
            document.getElementById('hp').textContent = hp;
            document.getElementById('attack').textContent = attack;
            document.getElementById('defense').textContent = defense;
            document.getElementById('specialAttack').textContent = specialAttack;
            document.getElementById('specialDefense').textContent = specialDefense;
            document.getElementById('speed').textContent = speed;

            

            document.getElementById('sprite').src = sprite;
          
        })



        .catch(() => {
            alert('Pokemon no encontrado')
        });
}
