import {useDispatch, useSelector} from 'react-redux'
import { increase,decrease } from '../Store/Toolkit'


export const CounterToolkit = () => {
    const dispatch = useDispatch()

    const globalState = useSelector((state) => state)


    return (
    <>

        <>
        <div>Counter:{globalState.value}</div>
    <button onClick={()=> dispatch(decrease(5))}>Decrease</button>
    <button onClick={()=> dispatch(increase(3))}>Increase</button>
        </>
    
    <button>Toggle Counter</button>

    </>
  )
}
