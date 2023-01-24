import Header from "./Layout/Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./State/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// The code below is completely safe you don't need to hide it
const promise = loadStripe(
  "pk_test_51LG9U7EP4sOSEnhRVtPyXZO2ctdMY51ChiC6jeA1OvPTuezuxow4dkecia91NBOoX79XtqpIV6WR29g0jlVX178R00Pu5croLm"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //This will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          // This is going to fire off the event and shoot into the information about the user
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <div className="app">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={[<Header />, <Home />]} />
            <Route path="/checkout" element={((<Header />), (<Checkout />))} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
