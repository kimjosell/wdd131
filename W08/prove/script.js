let character = {
    name: 'Snorteblat',
    image: 'snortleblat.webp',
    class: 'Swamp Beast Diplomat',
    level: 0,
    health: 100,

    attacked: function() {
        if(this.health <= 0){
            return
        } else {
            this.health = this.health - 10;
        }
    },

    levelup: function() {
        this.level = this.level + 1;
    }
}

let image = document.querySelector(".image");
let nameElement = document.querySelector(".name").querySelector("p");
let stats = document.querySelector(".stats");
let attackButton = document.querySelector("#attackButton");
let levelupButton = document.querySelector("#levelupButton");

function render() {
    stats.innerHTML = `<p>Class: ${character.class} </p> <p>Level: ${character.level}</p> <p>Health: ${character.health}</p>`;
}

render();


image.src = character.image;
nameElement.textContent = character.name;

attackButton.addEventListener("click", () => {
    character.attacked();
    render();
});

levelupButton.addEventListener("click", ()=> {
    character.levelup();
    render();
})

