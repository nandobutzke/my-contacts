import APIError from '../../errors/APIError';
import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  async get(path) {
    await delay(4000);

    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('Content-Type');

    let body = null;
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(body, response);
  }
}

export default HttpClient;
