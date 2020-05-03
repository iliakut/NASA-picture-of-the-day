import fetchCache from "./fetchCache";

class NasaAPIService {
  _apiBase = 'https://api.nasa.gov/planetary/apod';

  async getData(key, params) {
    // по дефолту вернет сегодняшнюю picture of the day
    const apiKey = key || 'DEMO_KEY';

    return await fetchCache._get(`${this._apiBase}/?api_key=${apiKey}${params}`);
  }

  async getDataInExactDay(key, date) {
    return this.getData(key, `&date=${date}`)
  }

}

export default NasaAPIService;
