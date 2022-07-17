import "./sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trFlag from "./img/turkish.png";
import enFlag from "./img/english.png";
//pages
import Account from "./pages/Account";
import ProductList from "./pages/ProductList";
import Navbar from "./Components/Navbar";

function App() {
  const { i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="App">
      <Router>
        <div className="d-flex justify-content-end">
          <button className="bg-white" onClick={() => handleChangeLng("tr")}>
            <img width="25" src={trFlag} alt="turkish-flag" />
          </button>
          <button className="bg-white" onClick={() => handleChangeLng("en")}>
            <img width="25" src={enFlag} alt="english-flag" />
          </button>
        </div>
        <Navbar />
        <Switch>
          <Route path="/ProductList" component={ProductList} />
          <Route path="/" component={Account} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
