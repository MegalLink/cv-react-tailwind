import React from 'react'
import ReactDOM from 'react-dom/client'
import { ROUTER } from './router/router'
import { RouterProvider } from 'react-router-dom'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={ROUTER}></RouterProvider>
    </div>
  </React.StrictMode>
)
