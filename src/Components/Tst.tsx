import { RootState } from "@/App/Store"
import {useSelector , useDispatch} from "react-redux"
import { increment , decrement } from "@/features/counter/counterSlice"

function Tst() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          className="bg-blue-700 rounded-md mx-1 px-1"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-blue-700 rounded-md mx-1 px-1"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


export default Tst