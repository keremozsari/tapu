import { useQuery } from "react-query";
import fetchProduct from "./Auth/api";
import Card from "../Components/Card";
import Basket from "../Components/Basket";

function List() {
  const { isLoading, error, data } = useQuery(["products"], fetchProduct);

  if (isLoading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="d-flex flex-column h-70-vh overflow-auto p-2-1r border-bottom-1">
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </div>

      <Basket />
    </>
  );
}

export default List;
