import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '/Project/tugasMsib/tugas-redux/tugas-redux/src/redux/slices/counterSlice';

function CounterComponent() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <>
            <h2>Counter</h2>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <br />
            <div>
                <input
                    type="number"
                    onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))}
                    placeholder="Enter value"
                />
                <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
            </div>
        </>
    );
}

export default CounterComponent;



















// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '/Project/latihan/latihan-redux/node_modules/redux/slices/counterSlice';

// function CounterComponent() {
//     const count = useSelector(state => state.counter.value);
//     const dispatch = useDispatch();
    
//     return (
//         <>
//             <h2>Counter</h2>
//             <div>
//                 <button onClick={() => dispatch(increment())}>Increment</button>
//                 <span>{count}</span>
//                 <button onClick={() => dispatch(decrement())}>Decrement</button>
//             </div>
//             <br />
//             <div>
//                 <input
//                     type="number"
//                     onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))}
//                     placeholder="Enter value"
//                 />
//                 <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
//             </div>
//         </>
//     );
// }

// export default CounterComponent;
