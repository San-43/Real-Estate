import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {

    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f739dd9e95msh53ac9d2e9b9597ap10d439jsnf74f0d3291e8'
        }
    });

    return data;
}