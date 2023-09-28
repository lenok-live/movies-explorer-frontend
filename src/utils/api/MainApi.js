import BaseApi from './BaseApi';

class MainApi extends BaseApi {
  constructor(options) {
    super(options);
  }

  authorization(email, password) {
    return this._fetch(`/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
  }

  registration(name, email, password) {
    return this._fetch(`/signup`, {
      method: "POST",
      body: JSON.stringify({ name, email, password })
    });
  }

  getMe(token) {
    return this._fetch(`/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        method: "GET",
      },
    });
  }

  editMyInfo(token, { name, email }) {
    return this._fetch(`/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({ name, email })
    });
  }

  getSavedFilms(token) {
    return this._fetch(`/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        method: "GET",
      }
    });
  }

  createFilm(movieInfo, token) {
    return this._fetch(`/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({ ...movieInfo })
    });
  }

  async removeFilm(movieId, token) {
    try {
      const response = await this._fetch(`/movies/${movieId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=utf-8",
          'Accept': 'application/json',
        },
        credentials: 'include',
      });


      return response;
    } catch (error) {
      console.error('Error removing movie:', error);
      throw error;
    }
  }

}

const mainApi = new MainApi({
  baseUrl: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  }
});

export default mainApi;
