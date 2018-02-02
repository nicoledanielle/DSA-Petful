export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
	type: FETCH_CAT_SUCCESS,
	cat
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
	type: FETCH_DOG_SUCCESS,
	dog
})

export const fetchCat = () => dispatch => {
	fetch(`/api/cat`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(cat => {
			dispatch(fetchCatSuccess(cat));
		});
};

export const fetchDog = () => dispatch => {
	fetch(`/api/dog`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(dog => {
			dispatch(fetchDogSuccess(dog));
		});
};