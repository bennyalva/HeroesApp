const { heroes } = require("../data/heroes")

export const getHeroesByName = (name = '') => {
    if (name === '') {
        return [];
    }
    name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}