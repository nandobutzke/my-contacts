class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  }
}

export default HttpClient;
