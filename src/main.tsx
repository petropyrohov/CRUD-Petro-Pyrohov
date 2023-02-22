import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/router';
import '@frontsource/roboto/300.css';
import '@frontsource/roboto/400.css';
import '@frontsource/roboto/500.css';
import '@frontsource/roboto/700.css';

const rootHtmlElement = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootHtmlElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
