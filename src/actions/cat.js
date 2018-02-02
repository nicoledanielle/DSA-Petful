import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = cat => ({
  type: FETCH_CAT_REQUEST,
  cat
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
	type: FETCH_CAT_SUCCESS,
	cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = cat => ({
  type: FETCH_CAT_ERROR,
  cat
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = cat => ({
  type: ADOPT_CAT_REQUEST,
  cat
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
  type: ADOPT_CAT_SUCCESS,
  cat
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = cat => ({
  type: ADOPT_CAT_ERROR,
  cat
})

export const fetchCat = () => dispatch => {
	dispatch(fetchCatRequest());
	fetch(`${API_BASE_URL}/api/cat`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(cat => {
			dispatch(fetchCatSuccess(cat));
		})
		.catch(err => {
			dispatch(fetchCatError(err));
		})
};

export const adoptCat = () => dispatch => {
	dispatch(adoptCatRequest());
	return fetch(`${API_BASE_URL}/api/cat`, {
		method: `DELETE`
	})
	.then(res => {
	  if (!res.ok) {
		  throw new Error(res.statusTest)
	  }
		dispatch(fetchCat());
	  })
	  .then(cat => {
				dispatch(adoptCatSuccess(cat));
      })
    .catch(err => {
      dispatch(adoptCatError(err));
    });
};