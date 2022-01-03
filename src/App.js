import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
