import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import { LastLocationProvider } from 'react-router-last-location';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const globalStyles = css`

  
    
  ::-webkit-scrollbar {
    background-color:transparent;
    width:8px
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color:transparent
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color:#babac0;
    border-radius:4px;
    border:2px solid transparent
  }
  ::-webkit-scrollbar-corner {display: none}

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {display:none}

  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;

    margin: 0;
    overflow: hidden;
    --color-link : #505050;
    --color-link-hover : #5a7fff;
    --color-white : #eeeeee;
    --color-light-gray : #43474c;
    --color-gray : #2c2f33;
    --color-dark-gray : #23272a;
    --color-text : #505050;

    color: var(--color-text);

    a{
      color: var(--color-text);
      &:hover{
        color: var(--color-link-hover);
      }
      &.active{
        color: var(--color-link-hover);
      }
    }
    h1{
      font-weight: 200;
    }
    h2{
      font-weight: 600;
      font-size: 1.2rem;
    }
    h3{
      font-weight: 200;
    }
    h4{
      font-weight: 200;
    }
    button{
      &:focus{
        outline: none;
      }
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
