import { useTranslation } from "react-i18next";
import Signup from "./Auth/Signup";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const { t } = useTranslation();

  const { fullname, email, password, locale, loggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1 className="font-size-1_5r p-2-1r">{t("Hesabım")}</h1>
      {!loggedIn && (
        <>
          <Signup />
        </>
      )}
      {loggedIn && (
        <>
          <div className="m-2-1r min-h-500 overflow-auto">
            <h1>{fullname}</h1>
            <div className="d-flex flex-column border-bottom-1 font-size-0_9r font-weight-500 mb-30 p-15-0">
              <div className="p-5-0 w-100">
                {t("E-posta")}: {email}{" "}
              </div>
              <div className="p-5-0 w-100">
                {t("Parola")}: {password}
              </div>
              <div className="p-5-0 w-100">
                {t("Geçerli Yerel")}: {locale}
              </div>
            </div>
            <select className="p-15-0 mb-30 w-100 mt-20" name="locale">
              <option value={locale}>{locale}</option>
              {/* <option placeholder="Lokal Seç" value="null">
                Lokal Seçiniz
              </option>
              <option value="Tr">Türkçe</option>
              <option value="En">İngilizce</option>
              <option value="fr">Fransızca</option>
              <option value="OTHER">Other</option> */}
            </select>
            <div className="d-flex">
              <button
                type="submit"
                className="w-100 m-2-1r p-15-0 border-1-red bg-white text-red rad-12"
                onClick={handleLogout}
              >
                {t("Çıkış Yap")}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Account;
