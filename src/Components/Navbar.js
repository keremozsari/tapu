import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

//context
import { useAuth } from "../contexts/AuthContext";
import { useBasket } from "../contexts/BasketContext";

function Navbar() {
  const { t } = useTranslation();

  const { loggedIn } = useAuth();

  const { items } = useBasket();
  return (
    <>
      <div className="position-fixed bottom-0 w-100 bg-softGray overflow-hidden">
        <nav className="d-flex flex-column w-100">
          <ul className="d-flex justify-content-center w-100 m-20-auto p-0-50">
            <li className="nav-item mr-50">
              <NavLink
                to="/ProductList"
                className="nav-link d-flex flex-column align-items-center text-black"
              >
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0V6H18V0H10ZM10 18H18V8H10V18ZM0 18H8V12H0V18ZM0 10H8V0H0V10Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <span>{t("Liste")}</span>
              </NavLink>
              {loggedIn && (
                <div>
                  {
                    <>
                      {items.length > 0 && (
                        <span className="position-absolute top-0">
                          {" "}
                          ({items.length})
                        </span>
                      )}
                    </>
                  }
                </div>
              )}
            </li>
            <li className="nav-item ml-50">
              <NavLink
                to="/"
                className="nav-link d-flex flex-column align-items-center text-black"
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <span>{t("Hesabım")}</span>
              </NavLink>
            </li>
          </ul>
          <div className="border-bottom-2 m-0-auto w-50 position-relative bottom-10 rad-100"></div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
