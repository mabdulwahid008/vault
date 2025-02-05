import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ThirdwebProvider } from "thirdweb/react";
import EtherProvider from './Provider/EtherProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EtherProvider>
      <BrowserRouter>
        <ThirdwebProvider>
          <App />
        </ThirdwebProvider>
      </BrowserRouter>
    </EtherProvider>
  </StrictMode>,
)
