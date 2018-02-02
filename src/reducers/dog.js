import{
	FETCH_DOG_REQUEST,
	FETCH_DOG_SUCCESS,
	FETCH_DOG_ERROR,
	ADOPT_DOG_REQUEST,
	ADOPT_DOG_SUCCESS,
	ADOPT_DOG_ERROR
} from '../actions/dog'

const initialState ={
	dogs: null,
	loading: false,
	error: null
}

export const dogReducer = (state = initialState, action) => {
	if(action.type === FETCH_DOG_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}
	else if(action.type===FETCH_DOG_SUCCESS){
		return Object.assign({}, state, {
			loading: false,
			error: null,
			dogs: action.dogs
		})
	}
	else if(action.type===FETCH_DOG_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}
	else if(action.type===ADOPT_DOG_REQUEST){
		return Object.assign({}, state, {
			loading: false,
			error: null
		})
	}
	else if(action.type===ADOPT_DOG_SUCCESS){
		return Object.assign({}, state, {
			dogs: action.dogs
		})
	}
	else if (action.type === ADOPT_DOG_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}
	return state;
}
