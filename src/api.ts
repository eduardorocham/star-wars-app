const BASE = 'https://swapi.dev/api';

export const api = {
    getFilms: async () => {
        const response = await fetch(`${BASE}/films/`);
        const json = await response.json();
        return json;
    },
    getCharacteres: async (id:number) => {
        const response = await fetch(`${BASE}/people/?page=${id}`);
        const json = await response.json();
        return json;
    },
    getVehicles: async () => {
        const response = await fetch(`${BASE}/vehicles/`);
        const json = await response.json();
        return json;
    },
    getFilm: async (id: string) => {
        const response = await fetch(`${BASE}/films/${id}`);
        const json = await response.json();
        return json;
    },
    getCharacter: async (id: string) => {
        const response = await fetch(`${BASE}/people/${id}/`);
        const json = await response.json();
        return json;
    },
    getVehicle: async (id: string) => {
        const response = await fetch(`${BASE}/vehicles/${id}/`);
        const json = await response.json();
        return json;
    }
}