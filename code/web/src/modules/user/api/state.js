// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, TOPS_ANSWER } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}

const surveyInitialState = {
  topsAnswer: 0,
  bottomsAnswer: 0,
  shoesAnswer: 0,
  accessoriesAnswer: 0,
  determinedStyle: '',
};

// Survey Reducer
export const surveyReducer = (state = surveyInitialState, action) => {
  switch (action.type){
    case 'TOPS_ANSWER':
      return {
        ...state,
        topsAnswer: action.payload
      }
    case 'BOTTOMS_ANSWER':
      return {
        ...state,
        bottomsAnswer: action.payload
      }
    case 'SHOES_ANSWER':
      return {
        ...state,
        shoesAnswer: action.payload
      }
    case 'ACCESSORIES_ANSWER':
      return {
        ...state,
        accessoriesAnswer: action.payload
      } 
    case 'STYLE_RESULT':
      return {
        ...state,
        determinedStyle: action.payload
      } 
    default:
      return state
  }
}
