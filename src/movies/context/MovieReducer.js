import { types } from '../types/types'


export const MovieReducer = (state = {}, action) => {

  switch (action.type) {
    case types.setTitle:
      return {
        headerTitle: action.payload
      }

    default:
      return state;
  }
}