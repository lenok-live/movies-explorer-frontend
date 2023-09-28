class BaseApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  _fetch(endpoint, options = {}) {
    const url = `${this._url}${endpoint}`;
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json; charset=utf-8",
      'Accept': 'application/json',
    };

    return fetch(url, options).then(this._checkServerResponse);
  }

}

export default BaseApi
