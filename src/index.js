import React from "react";

import App from './App';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
  
);

