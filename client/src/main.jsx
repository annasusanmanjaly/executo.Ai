import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { SocketProvider } from './context/Socketprovider'
import { AuthProvider } from './context/Authcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <SocketProvider>
    <AuthProvider>
      <App />
    </AuthProvider> 
    </SocketProvider>
  </React.StrictMode>
  </BrowserRouter>
)
