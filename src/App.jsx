import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { v4 } from 'uuid'
import { addCustomerAction, removeCustomerAction } from './redux/customerReducer'
import { addCashAction, removeCashAction } from './redux/cashReducer'
import { fetchCustomers } from './redux/asyncActions/fetchCustomers'

export default function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = cash => {
    dispatch(addCashAction(cash))
  }
  const getCash = cash => {
    dispatch(removeCashAction(cash))
  }
  const addCustomer = name => {
    const customer = {
      name,
      id: v4()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='App'>
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => addCash(5)}>Add Cash</button>
        <button onClick={() => getCash(10)}>Get Cash</button>
        <button onClick={() => addCustomer('Customer ' + v4())}>Add Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add Customers</button>
      </div>
      {customers.length > 0 ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          {customers.map(customer => (
            <div
              key={v4()}
              style={{
                fontSize: '2rem',
                border: '1px solid',
                padding: '5px',
                marginTop: '10px',
                width: 'fit-content'
              }}
              onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem' }}>No customers</div>
      )}
    </div>
  )
}
