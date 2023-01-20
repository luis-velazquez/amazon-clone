import Header from "./Layout/Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
