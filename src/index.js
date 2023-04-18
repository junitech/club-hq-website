import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Wrapper from './Components/Wrapper';
import Header from './Components/Header';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
   
    
      <NavBar />
      <Header/>
      <Wrapper>
      <main>
        <div className='container-lg'>
            <div className="container">
                <App />
            </div>
        </div>      
      </main>
      </Wrapper>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
