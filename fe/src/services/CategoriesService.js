import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  listCategories(orderBy = 'asc') {
    return this.httpClient.get(`/categories?orderBy=${orderBy}`);
  }

  createCategory(category) {
    return this.httpClient.post('/categories', {
      body: category,
    });
  }
}

export default new CategoriesService();
