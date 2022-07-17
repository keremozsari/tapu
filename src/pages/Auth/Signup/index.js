import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { useAuth } from "../../../contexts/AuthContext";

function Signup() {
  const { t } = useTranslation();

  const { login } = useAuth();

  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          locale: "",
        }}
        validationSchema={yup.object().shape({
          fullname: yup
            .string()
            .min(2, t("Çok kısa!"))
            .max(30, t("Çok uzun!"))
            .required(t("Zorunlu alan")),
          email: yup
            .string()
            .email(t("Geçerli bir email girin"))
            .required(t("Zorunlu alan")),
          password: yup
            .string()
            .min(5, t("Parolanız en az 5 karakter olmalıdır"))
            .required(t("Zorunlu alan")),
          locale: yup.string(),
        })}
        onSubmit={(values) => {
          login({
            fullname: values.fullname,
            email: values.email,
            password: values.password,
            locale: values.locale,
          });
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="d-flex flex-column m-2-1r">
              {errors.fullname && touched.fullname ? (
                <div className="text-red">{errors.fullname}</div>
              ) : null}
              <Field
                type="text"
                placeholder={t("İsim Soyisim")}
                name="fullname"
                className="p-15-0 mb-30"
              />
              {errors.email && touched.email ? (
                <div className="text-red">{errors.email}</div>
              ) : null}
              <Field
                type="text"
                placeholder={t("E-posta")}
                name="email"
                className="p-15-0 mb-30"
              />
              {errors.password && touched.password ? (
                <div className="text-red">{errors.password}</div>
              ) : null}
              <Field
                type="password"
                placeholder={t("Parola")}
                name="password"
                className="p-15-0 mb-30"
              />
              <Field
                className="p-15-0 mb-30"
                component="select"
                name="locale"
                multiple={false}
              >
                <option placeholder="Lokal Seç" value="null">
                  {t("Lokal Seçiniz")}
                </option>
                <option value="TR">{t("Türkçe")}</option>
                <option value="EN">{t("İngilizce")}</option>
                <option value="FR">{t("Fransızca")}</option>
                <option value="OTHER">{t("Diğer")}</option>
              </Field>
              <div className="d-flex">
                <button type="submit" className="w-100 m-2-1r p-15-0">
                  {t("Giriş Yap")}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Signup;
