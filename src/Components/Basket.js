import { useTranslation } from "react-i18next";
import { useBasket } from "../contexts/BasketContext";
function Basket() {
  const { t } = useTranslation();

  const { items } = useBasket();

  const price = items.reduce((acc, obj) => acc + obj.price, 0);

  const taxCargo = items.reduce(
    (acc, obj) => acc + obj.cargoPrice + obj.tax,
    0,
  );

  const total = items.reduce(
    (acc, obj) => acc + obj.price + obj.cargoPrice + obj.tax,
    0,
  );

  return (
    <>
      <div className="d-flex flex-column p-1r min-h-230">
        <h3 className="products-total font-size-1_5r p-5-0">
          {t("Ürünlerin Toplamı")}:
        </h3>
        <small className="total font-size-0_9r p-5-0">
          {t("Toplam")}: {price}
        </small>
        <small className="tax-cargo font-size-0_9r p-5-0">
          {t("Vergiler")} + {t("Kargo")}: {taxCargo}
        </small>
        <div className="total-payment font-size-0_9r font-weight-bold p-5-0">
          {t("Genel Toplam")}: {total}
        </div>
      </div>
    </>
  );
}

export default Basket;
