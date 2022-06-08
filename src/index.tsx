import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('geotaggerApp') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
