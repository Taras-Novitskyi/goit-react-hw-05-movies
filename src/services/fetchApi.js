import axios from 'axios';

const API_KEY = '894ef72300682f1db325dae2afe3e7e2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const FetchTrendingFilms = async (page=1) => {
  const { data } = await axios('trending/movie/week', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });

  return data;
};

export const FetchFilmDetails = async movieId => {
  const { data } = await axios(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchSearchFilms = async (query, page=1) => {
  const { data } = await axios('search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return data;
};


export const fetchFilmCast = async movieId => {
  const { data } = await axios(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
}

export const fetchFilmReviews = async movieId => {
  const { data } = await axios(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};