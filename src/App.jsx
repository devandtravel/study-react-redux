import { useDispatch, useSelector } from 'react-redux'
import './App.css'

export default function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const addCash = cash => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = cash => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div className='App'>
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => addCash(5)}>Add Cash</button>
        <button onClick={() => getCash(10)}>Get Cash</button>
      </div>
    </div>
  )
}
