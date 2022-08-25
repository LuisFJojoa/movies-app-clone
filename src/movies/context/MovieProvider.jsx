import { useReducer } from "react"
import { types } from "../types/types"
import { MovieContext, MovieReducer } from "./"

const initialState = {}

export const MovieProvider = ({ children }) => {

  const initializer = () => {

    const title = localStorage.getItem('headerTitle')
    
    return {
      title: title
    }
  }
  const [header, dispatch] = useReducer(MovieReducer, initialState, initializer)


  const setHeaderTitle = (title = '') => {

    const action = { type: types.setTitle, payload: title}
    dispatch(action)
  }


  return (
    <MovieContext.Provider value={{
      header,
      setHeaderTitle
    }}>
      {children}
    </MovieContext.Provider>
  )
}
