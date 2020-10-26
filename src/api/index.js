import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon';

export const fetchAllPokemon = async () => {

    try {
        const { data } = await axios.get(url);

        return { data };

    } catch (error) {
        console.log(error)
    }
}
