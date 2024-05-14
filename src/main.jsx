import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from 'react-redux';
import store from "/Project/tugasMsib/tugas-redux/tugas-redux/src/redux/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



















// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from 'react-redux';
// import store from "/Project/latihan/latihan-redux/node_modules/redux/store.js";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );