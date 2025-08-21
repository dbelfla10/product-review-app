import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <div className="page__container">
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
