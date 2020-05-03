class fetchCache {
  cache = {};

  async _get(input) {
    if (this.cache[input]) {
      return this.cache[input];
    }

    const res = await fetch(input);
    const data = await res.json();
    this.cache[input] = data;

    return data;
  };
}

export default new fetchCache();
