import BaseApi from "./BaseApi";

class MoviesApi extends BaseApi {
  constructor(props) {
    super(props);
  }

  getFilms() {
    return this._fetch(`/beatfilm-movies`);
  }

}


const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
});

export default moviesApi;
