import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Global from './styles/global'  // Importamos los estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
)
