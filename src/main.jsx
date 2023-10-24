import AppRoutes from '@routes/AppRoutes';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom';
import '@styles/index.css'
import { LocalizationProvider } from './context/LocalizationWrapper';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
