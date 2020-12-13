import axios from "axios";

const instance = axios.create({
    baseURL: `http://127.0.0.1:5000/sportBuilds`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getFilteredName(filteredSportBuildName) {
    return (await instance.get(`/search/${filteredSportBuildName}`)).data;
}


export default instance;