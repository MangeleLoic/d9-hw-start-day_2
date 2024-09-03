import { setSearchResults } from './searchSlice';

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`API_URL/search?query=${query}`);
      const data = await response.json();
      dispatch(setSearchResults(data));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
};
