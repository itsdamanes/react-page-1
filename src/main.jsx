import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/home';
import './styles/global.css'

const root = createRoot(document.getElementById('root'));
root.render(<Home />)