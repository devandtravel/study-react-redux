import { useDispatch, useSelector } from 'react-redux'
import './App.css'

export default function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  return (
    <div className='App'>
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button>Add Cash</button>
        <button>Get Cash</button>
      </div>
    </div>
  )
}
