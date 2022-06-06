import React from 'react';
import ReactDOM from 'react-dom'; // removed client
import App from './App';
// import "./index.css"; // Whole index.css is commented out inside
import "./style.css";

// bellow changed Page to App
function Page() {
  return (
    <>
    <div>
      <App />
    </div>
    </>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'));



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
