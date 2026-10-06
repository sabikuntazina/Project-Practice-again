import { use, useState } from "react";
import ModelCard from "./modelCard";
import CartSection from "./CartSection";

const ModelSection = ({ modelsPromise }) => {
  const [tabColor, setTabColor] = useState("models");
  const [carts, setCarts] = useState([]);
  const models = use(modelsPromise);

  const handleCarts = (model) => {
    setCarts([...carts, model]);
  };

  // console.log(carts)
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box flex justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-3xl ${tabColor === "models" ? "bg-red-500 text-white" : ""} font-bold`}
          onClick={() => setTabColor("models")}
          aria-label="Models"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-3xl ${tabColor === "carts" ? "bg-red-500 text-white" : ""} font-bold`}
          onClick={() => setTabColor("carts")}
          aria-label="Carts"
        />
      </div>

      {tabColor == "models" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              handleCarts={handleCarts}
            ></ModelCard>
          ))}
        </div>
      ) : (
        <CartSection carts={carts}></CartSection>
      )}
    </div>
  );
};

export default ModelSection;
