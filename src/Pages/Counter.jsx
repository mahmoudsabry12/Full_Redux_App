import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
export const Counter = () => {
    // const Counter = useSelector((state)=> state.value)
    // const toggle = useSelector((state)=> state.showCounter)

    const globalState = useSelector((state)=> state)
    const dispatch = useDispatch()


    const counterOps = (type,payload)=>{
        dispatch({type: type , payload: payload})
    }
    // const increase = ()=>{
    //     dispatch({type:'increase',payload:5})
    // }

    // const decrease =()=>{
    //     dispatch({type:'decrease',payload:3})

    // }

    const toggleCounter =()=>{
        dispatch({type:'toggleCounter'})

    }


    return (
    <>
     {globalState.showCounter && (
        <>
        <div>Counter:{globalState.value}</div>
    <button onClick={()=>counterOps('increase',5)}>Decrease</button>
    <button onClick={()=>counterOps('decrease', 2)}>Increase</button>
        </>
     )}
    <button onClick={toggleCounter}>Toggle Counter</button>

    </>
  )
}
