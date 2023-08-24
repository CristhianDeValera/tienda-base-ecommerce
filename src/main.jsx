import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { EcommerceApp } from './EcommerceApp'
import { BrowserRouter } from 'react-router-dom'

import "./assets/css/estilos.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommerceApp />
    </BrowserRouter>
  </React.StrictMode>,
)
