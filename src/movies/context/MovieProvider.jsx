import { useReducer } from "react"
import { types } from "../types/types"
import { MovieContext, MovieReducer } from "./"

const initialState = {}

export const MovieProvider = ({ children }) => {

  const initializer = () => {

    const title = localStorage.getItem('headerTitle')
    
    return {
      headerTitle: title,
      response: false
    }
  }
  const [movieState, dispatch] = useReducer(MovieReducer, initialState, initializer)


  const setHeaderTitle = (title = '') => {

    const action = { type: types.setTitle, payload: title}
    dispatch(action)
  }

  const setReponse = (state = false) => {

    const action = { type: types.setResponse, payload: state}
    dispatch(action)
  }


  return (
    <MovieContext.Provider value={{
      ...movieState,
      setHeaderTitle,
      setReponse
    }}>
      {children}
    </MovieContext.Provider>
  )
}
