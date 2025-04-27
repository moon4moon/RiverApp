const BASE_URL = "https://danepubliczne.imgw.pl/api/data/";

export const getData = async () => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json()
    return data.results
}

