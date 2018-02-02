import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = dog => ({
  type: FETCH_DOG_ERROR,
  dog
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = dog => ({
  type: ADOPT_DOG_REQUEST,
  dog
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
  type: ADOPT_DOG_SUCCESS,
  dog
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = dog => ({
  type: ADOPT_DOG_ERROR,
  dog
})

export const adoptDog = () => dispatch => {
	dispatch(adoptDogRequest());
	return fetch(`${API_BASE_URL}/api/dog`, {
		method: `DELETE`
	})
	.then(res => {
	  if (!res.ok) {
		  throw new Error(res.statusTest)
	  }
		dispatch(fetchDog());
	  })
	  .then(dog => {
				dispatch(adoptDogSuccess(dog));
      })
    .catch(err => {
      dispatch(adoptDogError(err));
    });
};

export const fetchDog = () => dispatch => {
	dispatch(fetchDogRequest());
	return fetch(`${API_BASE_URL}/api/dog`)
	.then(res => {
	  if (!res.ok) {
		return Promise.reject(res.statusText);
	  }
		return res.json();
	  })
	  .then(dog => {
				dispatch(fetchDogSuccess(dog));
      })
    .catch(err => {
      dispatch(fetchDogError(err));
    });
};