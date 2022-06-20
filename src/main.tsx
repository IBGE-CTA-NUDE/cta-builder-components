import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './App';
import {AccordionPage} from './pages/AccordionPage';
import {IconPage} from './pages/IconPage';
import {TooltipPage} from './pages/TooltipPage';

import '../assets/css/reset.css';
import '../assets/css/main.css';
import '../assets/css/tippy@6.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='accordion' element={<AccordionPage />} />
            <Route path='icon' element={<IconPage />} />
            <Route path='tooltip' element={<TooltipPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);
