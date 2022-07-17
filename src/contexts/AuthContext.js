import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [price, setPrice] = useState(0);
  const [cargoPrice, setCargoPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [locale, setLocale] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn((current) => !current);
    setFullname(data.fullname);
    setEmail(data.email);
    setPassword(data.password);
    setPrice(data.price);
    setCargoPrice(data.cargoPrice);
    setTax(data.tax);
    setLocale(data.locale);

    console.log(loggedIn);
    localStorage.setItem(
      "input",
      JSON.stringify({
        loggedIn: true,
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        price: data.price,
        cargoPrice: data.cargoPrice,
        tax: data.tax,
        locale: data.locale,
      }),
    );
  };

  const logout = () => {
    setLoggedIn(false);
    setFullname(null);
    setEmail(null);
    setPassword(null);
    setPrice(0);
    setCargoPrice(0);
    setTax(0);
    setLocale(null);

    localStorage.removeItem("input");
  };

  const values = {
    loggedIn,
    fullname,
    email,
    password,
    price,
    cargoPrice,
    tax,
    locale,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
