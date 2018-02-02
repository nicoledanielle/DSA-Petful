export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = dog => ({
  type: FETCH_DOG_REQUEST,
  dog
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

export const fetchDog = () => dispatch => {
	dispatch(fetchDogRequest());
	return fetch(`/api/dog`)
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