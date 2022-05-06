import baseAPI from './api';

class ShortenerService {
  constructor() {
    this.api = baseAPI(process.env.REACT_APP_API);
  }

  async getLink(code) {
    const result = await this.api.get(`links/${code}`);

    return result.data;
  }

  async getStats(code) {
    const result = await this.api.get(`links/${code}/stats`);

    return result.data;
  }

  async generate(model) {
    const result = await this.api.post('links', model);

    return result.data;
  }
}

export default ShortenerService;