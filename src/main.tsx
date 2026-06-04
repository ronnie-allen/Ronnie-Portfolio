import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#1f2937',
          color: '#ffffff',
          borderRadius: '8px',
        },
        success: {
          icon: '📧',
          iconTheme: {
            primary: '#10b981',
            secondary: '#1f2937',
          },
        },
        error: {
          icon: '❌',
          iconTheme: {
            primary: '#ef4444',
            secondary: '#1f2937',
          },
        },
      }}
    />
    <App />
  </StrictMode>
  </HelmetProvider>,
)
