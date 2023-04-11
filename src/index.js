import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';

const BigButtom = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButtom as='a'>Send a report.</BigButtom>
    {/* <BigButtom> +++ </BigButtom> */}
    {/* <Button /> */}
  </React.StrictMode>

);

