import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './contexts/auth.context'
import { AiProvider } from './contexts/ai.context'
import { Toaster } from 'react-hot-toast'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <AiProvider>
        <App />
      </AiProvider>
      <Toaster />
    </AuthProvider>
  </BrowserRouter>
)
