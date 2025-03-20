import React, { useContext, useReducer } from 'react'
import Reducer from './Reducer'
import { AppContext } from './Context'

const ComponentOne = () => {

    const {name} = useContext(AppContext)
    const initialstate = {num : 0} 
    const [state, dispatch] = useReducer(Reducer, initialstate)


    const AddCount = () => {
        dispatch({type : 'Inc'})
    }

  return (
    <>    
    <div>Count : {state.num}</div>
    <button onClick={AddCount}>Add Count</button>
    <h2>Name From Context : {name}</h2>
    </>
  )
}

export default ComponentOne