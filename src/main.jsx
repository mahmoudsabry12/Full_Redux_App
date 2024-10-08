import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/index.js'
import storeToolkit from './Store/Toolkit/index.js'
import MultyStore from './Store/MultyStore/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <Provider store={MultyStore}>
        <App />
      </Provider>
    {/* </Provider> */}
  </StrictMode>,
)
