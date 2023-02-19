import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { Provider } from 'react-redux'
import { store } from '../redux'

const Wrap: React.FC = (): JSX.Element => (
  <HelmetProvider>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </HelmetProvider>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Wrap />
)
