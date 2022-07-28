import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount,setAmount] = useState(0);
  const addValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => resetAll()}>Reset</button>

            <input type="text" onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment by value</button>
        </div>
    </section>
  )
}

export default Counter