class NasaAPIService {
  _apiBase = 'https://api.nasa.gov/planetary/apod';

  async getData(key, url) {
    // по дефолту вернет сегодняшнюю picture of the day
    const apiKey = key || 'DEMO_KEY';

    const res = await fetch(`${this._apiBase}/?api_key=${apiKey}`);
    return await res.json();
  }

  async getDataInExactDay(date) {
    return this.getData(null, `&date=${date}`)
  }

}

export default new NasaAPIService();