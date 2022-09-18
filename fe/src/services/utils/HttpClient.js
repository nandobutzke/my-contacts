import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    await delay(500);

    return response.json();
  }

  async post(path, contact) {
    await fetch(path);

    console.log(contact);
  }
}

export default HttpClient;
