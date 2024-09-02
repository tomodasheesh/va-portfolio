import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRouteProvider } from './router/provider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageRouteProvider />
  </StrictMode>,
);
