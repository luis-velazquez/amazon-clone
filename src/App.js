import Header from "./Layout/Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

function App() {
  return (
    //BEM
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login/*"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
