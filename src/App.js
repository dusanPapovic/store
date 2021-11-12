import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/customers">
            <AppCustomers />
          </Route>
          <Route path="/products">
            <AppProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
