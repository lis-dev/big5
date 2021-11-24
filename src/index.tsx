import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Base } from './components/Base'
import { ErrorBoundary } from './components/ErrorBoundary'
import ReactGA from 'react-ga4'

if (process.env.REACT_APP_GTM_ID) {
  ReactGA.initialize(process.env.REACT_APP_GTM_ID)
  ReactGA.send('pageview')
}

ReactDOM.render(
  <React.StrictMode>
    <Base>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Base>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
