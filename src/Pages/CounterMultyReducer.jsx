import {useDispatch, useSelector} from 'react-redux'
import { increase,decrease } from '../Store/Toolkit'


export const CounterMultyReducer = () => {
    const dispatch = useDispatch()

    const globalState = useSelector((state) => state)
console.log(globalState)

    return (
    <>

    
        <div>Counter:{globalState.counter.value}</div>
    <button onClick={()=> dispatch(decrease(5))}>Decrease</button>
    <button onClick={()=> dispatch(increase(3))}>Increase</button>
 
    <button>Toggle Counter</button>

<h2>{globalState.auth.password}</h2>
    </>
  )
}
