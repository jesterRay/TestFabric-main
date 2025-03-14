import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <App />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
