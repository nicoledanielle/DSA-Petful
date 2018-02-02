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

export const fetchCat = () => dispatch => {
	dispatch(fetchCatRequest());
	fetch(`/api/cat`)
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