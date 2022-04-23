import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import 'antd/dist/antd.css'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);